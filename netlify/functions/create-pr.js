const { Octokit } = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Set in Netlify env vars
const OWNER = "starryxoxo";
const REPO = "sc-web";
const BASE_BRANCH = "main";

const octokit = new Octokit({ auth: GITHUB_TOKEN });

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed, only POST supported",
    };
  }

  try {
    const { updatedContent } = JSON.parse(event.body);

    if (!updatedContent) {
      return {
        statusCode: 400,
        body: "Missing updatedContent in request body",
      };
    }

    // Get latest commit SHA of base branch
    const { data: refData } = await octokit.git.getRef({
      owner: OWNER,
      repo: REPO,
      ref: `heads/${BASE_BRANCH}`,
    });
    const baseCommitSha = refData.object.sha;

    // New branch
    const newBranchName = `edit-${Date.now()}`;
    await octokit.git.createRef({
      owner: OWNER,
      repo: REPO,
      ref: `refs/heads/${newBranchName}`,
      sha: baseCommitSha,
    });

    // Unique filename in edits/ folder, safe for file paths
    const timestampSafe = new Date().toISOString().replace(/[:.]/g, "-");
    const newFilePath = `edits/edit-${timestampSafe}.md`;

    // Create the new file in the new branch (as plain text)
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: newFilePath,
      message: `Create new edit via website at ${timestampSafe}`,
      content: Buffer.from(updatedContent, "utf8").toString("base64"),
      branch: newBranchName,
      // no sha: new file!
    });

    // Create PR
    const { data: pr } = await octokit.pulls.create({
      owner: OWNER,
      repo: REPO,
      title: `Website Edit - ${new Date().toISOString()}`,
      head: newBranchName,
      base: BASE_BRANCH,
      body: "Automatically created PR from website edit",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ prUrl: pr.html_url }),
    };
  } catch (error) {
    console.error("Error in create-pr:", error);
    return {
      statusCode: 500,
      body: `Server error: ${error.message}`,
    };
  }
};
