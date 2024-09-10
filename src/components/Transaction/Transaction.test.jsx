// src/components/Transaction/Transaction.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Transaction from "./index.jsx";

describe("Transaction Component", () => {
  const monthlyPoints = {
    1: {
      "7-2024": 90,
      "8-2024": 30,
    },
    2: {
      "7-2024": 150,
    },
  };

  const totalPoints = {
    1: 120,
    2: 150,
  };

  it("renders monthly points correctly", () => {
    render(
      <Transaction monthlyPoints={monthlyPoints} totalPoints={totalPoints} />
    );

    // Check if "Monthly Points" section is present
    expect(screen.getByText(/Monthly Points/i)).toBeInTheDocument();

    // Check if monthly points for Customer 1 are rendered
    expect(screen.getByText(/Customer 1/i)).toBeInTheDocument();
    expect(screen.getByText(/7-2024:/i)).toHaveTextContent("90 points");
    expect(screen.getByText(/8-2024:/i)).toHaveTextContent("30 points");

    // Check if monthly points for Customer 2 are rendered
    expect(screen.getByText(/Customer 2/i)).toBeInTheDocument();
    expect(screen.getByText(/7-2024:/i)).toHaveTextContent("150 points");
  });

  it("renders total points correctly", () => {
    render(
      <Transaction monthlyPoints={monthlyPoints} totalPoints={totalPoints} />
    );

    // Check if "Total Points" section is present
    expect(screen.getByText(/Total Points/i)).toBeInTheDocument();

    // Check if total points for Customer 1 are rendered
    expect(screen.getByText(/Customer 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toHaveTextContent("120 points");

    // Check if total points for Customer 2 are rendered
    expect(screen.getByText(/Customer 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toHaveTextContent("150 points");
  });

  it("handles empty props gracefully", () => {
    render(<Transaction monthlyPoints={{}} totalPoints={{}} />);

    // Check if "Monthly Points" and "Total Points" sections are present but empty
    expect(screen.getByText(/Monthly Points/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Points/i)).toBeInTheDocument();

    // Check that no customer data is displayed
    expect(screen.queryByText(/Customer 1/i)).toBeNull();
    expect(screen.queryByText(/Customer 2/i)).toBeNull();
  });
});
