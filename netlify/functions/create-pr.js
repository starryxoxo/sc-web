// netlify/functions/create-pr.js

const { Octokit } = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Set this securely in Netlify dashboard
const OWNER = "your-github-username"; // Replace with your GitHub username/org
const REPO = "your-repo-name"; // Replace with your repo name
const BASE_BRANCH = "main"; // Your default branch

const octokit = new Octokit({ auth: GITHUB_TOKEN });

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed, only POST supported",
    };
  }

  try {
    const { updatedContent, filePath } = JSON.parse(event.body);

    if (!updatedContent || !filePath) {
      return {
        statusCode: 400,
        body: "Missing updatedContent or filePath in request body",
      };
    }

    // Get latest commit SHA of base branch
    const { data: refData } = await octokit.git.getRef({
      owner: OWNER,
      repo: REPO,
      ref: `heads/${BASE_BRANCH}`,
    });
    const baseCommitSha = refData.object.sha;

    // Create a new branch name with timestamp
    const newBranchName = `edit-${Date.now()}`;

    // Create a new branch from the base branch commit
    await octokit.git.createRef({
      owner: OWNER,
      repo: REPO,
      ref: `refs/heads/${newBranchName}`,
      sha: baseCommitSha,
    });

    // Get the current file version SHA to update
    const { data: fileData } = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: filePath,
      ref: BASE_BRANCH,
    });

    // Update the file content in the new branch
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: filePath,
      message: `Website edit via Netlify function PR`,
      content: Buffer.from(updatedContent, "utf8").toString("base64"),
      branch: newBranchName,
      sha: fileData.sha,
    });

    // Create Pull Request from new branch to base branch
    const { data: pr } = await octokit.pulls.create({
      owner: OWNER,
      repo: REPO,
      title: `Website Edit - ${new Date().toISOString()}`,
      head: newBranchName,
      base: BASE_BRANCH,
      body: "Automatic PR created from website edit",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ prUrl: pr.html_url }),
    };
  } catch (error) {
    console.error("Error in create-pr function:", error);
    return {
      statusCode: 500,
      body: `Server error: ${error.message}`,
    };
  }
};
                                  
