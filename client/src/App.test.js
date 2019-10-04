import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import DarkButton from './components/DarkButton.js';

/* Test One - App */
test('App renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* Test Two - Button */
test('DarkButton renders without crashing', () => {
  const div = document.createElement('div');
  render(<DarkButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});