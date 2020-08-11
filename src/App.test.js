import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders netflix row ", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/netflix originals/i);
  expect(linkElement).toBeInTheDocument();
});
