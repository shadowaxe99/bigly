```javascript
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runGitScripts() {
  try {
    console.log("Pulling latest changes from the repository...");
    const pull = await exec('git pull');
    console.log(pull.stdout);

    console.log("Adding all changes to the staging area...");
    const add = await exec('git add .');
    console.log(add.stdout);

    console.log("Committing changes...");
    const commit = await exec('git commit -m "Automated commit by AI assistant"');
    console.log(commit.stdout);

    console.log("Pushing changes to the repository...");
    const push = await exec('git push');
    console.log(push.stdout);

    console.log("All git scripts have been successfully run.");
  } catch (error) {
    console.error("An error occurred while running git scripts:", error);
  }
}

module.exports = runGitScripts;
```