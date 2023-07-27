```javascript
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'npm test',
    'post-merge': 'npm install'
  }
}
```