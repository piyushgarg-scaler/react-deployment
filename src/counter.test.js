import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("Initial State Should be 1", () => {
    render(<Counter />);

    // Select the elements
    const minusText = screen.getByText("-");
    const plusText = screen.getByText("+");
    const countText = screen.getByText("Count is 1");

    // Test
    expect(minusText).toBeInTheDocument();
    expect(plusText).toBeInTheDocument();
    expect(countText).toBeInTheDocument();
  });

  test("Increment by one", () => {
    render(<Counter />);

    // Select the elements
    const plusText = screen.getByText("+");

    // Fire the event
    fireEvent.click(plusText);

    // Check if the count incremented
    const countText = screen.getByText("Count is 2");

    expect(countText).toBeInTheDocument();
  });

  test("Decrement by one", () => {
    render(<Counter />);

    // Select the elements
    const minusText = screen.getByText("-");

    // Fire the event
    fireEvent.click(minusText);

    // Check if the count incremented
    const countText = screen.getByText("Count is 0");

    expect(countText).toBeInTheDocument();
  });

  test("Count should not be less than 0", () => {
    render(<Counter />);

    // Select the elements
    const minusText = screen.getByText("-");

    // Fire the event
    fireEvent.click(minusText);
    fireEvent.click(minusText);
    fireEvent.click(minusText);

    // Check if the count incremented
    const countText = screen.getByText("Count is 0");

    expect(countText).toBeInTheDocument();
  });
});
