import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/layout/App";

test("test test", () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
