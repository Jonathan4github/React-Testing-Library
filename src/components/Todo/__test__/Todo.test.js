import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
)

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {name: /Add/i});

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {target: {value: task }});
    fireEvent.click(buttonElement);
  });
}

describe('Todo Integration Test', () => {
  it('should render Todo component', () => {
    render(<MockTodo />);
    addTask(['wash my clothes'])
    const divElement = screen.getByText(/wash my clothes/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should add multiple todo to todo list', () => {
    render(<MockTodo />);
    addTask(['todo 1', 'todo 2', 'todo 3']);
    const divElements = screen.getAllByTestId('todo-item-container');
    expect(divElements.length).toBe(3);
  });

  it('should not have the complete style/class when initially rendered', () => {
    render(<MockTodo />);
    addTask(['wash my clothes'])
    const divElement = screen.getByText(/wash my clothes/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('should have the complete style/class when task is completed/clicked', () => {
    render(<MockTodo />);
    addTask(['wash my clothes'])
    const divElement = screen.getByText(/wash my clothes/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
})
