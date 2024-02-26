import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp from '../TodoApp';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe('TodoApp Component', () => {
  test('renders without crashing', () => {
    render(<TodoApp />);
  });
});
