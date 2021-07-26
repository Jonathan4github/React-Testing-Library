import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn();

describe('Add Input', () => {
  it('should render text input element', () => {
    render(<AddInput
      todos = {[]}
      setTodos = {mockSetTodos}
    />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type in input element', () => {
    render(<AddInput
      todos = {[]}
      setTodos = {mockSetTodos}
    />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: {value: 'test change event'}});
    expect(inputElement.value).toBe('test change event');
  });

  it('should have empty input when add button is clicked', () => {
    render(<AddInput
      todos = {[]}
      setTodos = {mockSetTodos}
    />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i});
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  })
})