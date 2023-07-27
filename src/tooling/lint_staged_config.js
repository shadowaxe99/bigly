```javascript
module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.py': ['pylint', 'black', 'git add'],
  '*.jsx': ['eslint --fix', 'prettier --write', 'git add'],
  '*.tsx': ['eslint --fix', 'prettier --write', 'git add'],
  '*.css': ['stylelint --fix', 'prettier --write', 'git add'],
  '*.scss': ['stylelint --fix', 'prettier --write', 'git add'],
};
```