```javascript
import * as Yup from 'yup';

// User Schema
export const UserSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must not exceed 50 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must not exceed 100 characters'),
});

// Task Schema
export const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required('Task title is required')
    .min(3, 'Task title must be at least 3 characters')
    .max(100, 'Task title must not exceed 100 characters'),
  description: Yup.string()
    .required('Task description is required')
    .min(10, 'Task description must be at least 10 characters')
    .max(500, 'Task description must not exceed 500 characters'),
});

// Test Schema
export const TestSchema = Yup.object().shape({
  testName: Yup.string()
    .required('Test name is required')
    .min(3, 'Test name must be at least 3 characters')
    .max(100, 'Test name must not exceed 100 characters'),
  expectedResult: Yup.string()
    .required('Expected result is required')
    .min(3, 'Expected result must be at least 3 characters')
    .max(500, 'Expected result must not exceed 500 characters'),
});
```