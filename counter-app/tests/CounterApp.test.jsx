import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Testing in CounterApp component", () => {
  const value = 100;

  test("Should the component match with the snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Should render the initial value as 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
  });

  test("Should the value be incremented by one when the user click +1", () => {
    const initialValue = 10;

    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("Should the value be decremented by one when the user click -1", () => {
    const initialValue = 10;

    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test("Should the value be equals to the initial value when the user click reset", () => {
    const initialValue = 10;

    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole("button", { name: "button-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
