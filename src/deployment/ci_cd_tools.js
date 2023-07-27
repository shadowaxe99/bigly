```javascript
const axios = require('axios');
const fs = require('fs');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_NAME = process.env.REPO_NAME;
const OWNER = process.env.OWNER;

const configureCICDTools = async () => {
  try {
    const workflowContent = fs.readFileSync('./.github/workflows/main.yml', 'utf8');

    const response = await axios({
      method: 'put',
      url: `https://api.github.com/repos/${OWNER}/${REPO_NAME}/actions/workflows/main.yml`,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      data: {
        content: workflowContent,
      },
    });

    if (response.status === 200) {
      console.log('CI/CD workflow configured successfully.');
    } else {
      console.log('Failed to configure CI/CD workflow.');
    }
  } catch (error) {
    console.error(`Error configuring CI/CD tools: ${error}`);
  }
};

configureCICDTools();
```