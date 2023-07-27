```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers
import instructionReducer from './reducers/instructionReducer';
import taskReducer from './reducers/taskReducer';
import codeReducer from './reducers/codeReducer';
import conversationReducer from './reducers/conversationReducer';
import toolReducer from './reducers/toolReducer';
import testReducer from './reducers/testReducer';
import documentationReducer from './reducers/documentationReducer';

const reducer = combineReducers({
  instruction: instructionReducer,
  task: taskReducer,
  code: codeReducer,
  conversation: conversationReducer,
  tool: toolReducer,
  test: testReducer,
  documentation: documentationReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
```