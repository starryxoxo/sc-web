const { Octokit } = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Your fine-grained PAT with repo permissions
const OWNER = "starryxoxo"; // Replace with your GitHub username/org
const REPO = "sc-web"; // Replace with your repo name
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

    // Create unique new branch name
    const newBranchName = `edit-${Date.now()}`;

    // Create branch from base branch commit
    await octokit.git.createRef({
      owner: OWNER,
      repo: REPO,
      ref: `refs/heads/${newBranchName}`,
      sha: baseCommitSha,
    });

    // Unique filename with timestamp, inside edits/ directory
    const timestampSafe = new Date().toISOString().replace(/[:.]/g, "-");
    const newFilePath = `edits/edit-${timestampSafe}.md`;

    // Create new file in new branch
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: newFilePath,
      message: `Create new website edit ${timestampSafe}`,
      content: Buffer.from(updatedContent, "utf8").toString("base64"),
      branch: newBranchName,
      // no sha — new file
    });

    // Create pull request from new branch to base
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
