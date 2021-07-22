import {render, screen} from '@testing-library/react';
import Header from '../Header';

it('should render header component with text pass to title props', () => {
  render(<Header title="Testing heading" />);
  const headingElement = screen.getByText(/Testing heading/i);
  expect(headingElement).toBeInTheDocument();
});

it('should get element by id header', () => {
  render(<Header title="Testing heading" />);
  const headingElement = screen.getByTestId("header");
  expect(headingElement).toBeInTheDocument();
});

it('should get element by title header', () => {
  render(<Header title="Testing heading" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY
it('should find element using the findByText() method', async() => {
  render(<Header title="Testing heading" />);
  const headingElement = await screen.findByText(/Testing heading/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY
it('should find element using the queryByText() method', async() => {
  render(<Header title="Testing heading" />);
  const headingElement = screen.queryByText(/hi/i);
  expect(headingElement).not.toBeInTheDocument();
});

// GET ALL BY
it('should find element using the queryByText() method', async() => {
  render(<Header title="Testing heading" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(1);
});
