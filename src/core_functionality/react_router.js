```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../react_components/HomePage';
import TaskPage from '../react_components/TaskPage';
import TestPage from '../react_components/TestPage';
import DocumentationPage from '../react_components/DocumentationPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/task" component={TaskPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/documentation" component={DocumentationPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
```