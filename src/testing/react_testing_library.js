```javascript
import { render, fireEvent } from '@testing-library/react';
import App from '../core_functionality/react_components';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('fires events correctly', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('my-button');
  fireEvent.click(button);
  expect(button.textContent).toBe('Clicked');
});

test('interacts with form', () => {
  const { getByLabelText, getByTestId } = render(<App />);
  const input = getByLabelText('My Input:');
  const submitButton = getByTestId('submit-button');

  fireEvent.change(input, { target: { value: 'test value' } });
  fireEvent.click(submitButton);

  expect(input.value).toBe('test value');
});
```