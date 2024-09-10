// src/App.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { fetchTransactions } from "./api";
import { processTransactions } from "./utils/utility";
import Transaction from "./components/Transaction/index.jsx";

// Mock the fetchTransactions function
jest.mock("./api", () => ({
  fetchTransactions: jest.fn(),
}));

// Mock the processTransactions function
jest.mock("./utils/utility", () => ({
  processTransactions: jest.fn(),
}));

// Mock the Transaction component
jest.mock("./components/Transaction/index.jsx", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Transaction Component</div>),
}));

describe("App Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("displays loading message while fetching data", () => {
    fetchTransactions.mockResolvedValueOnce([]);
    render(<App />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("displays error message if fetching data fails", async () => {
    fetchTransactions.mockRejectedValueOnce(new Error("Failed to fetch"));
    render(<App />);
    expect(
      await screen.findByText(/Failed to fetch transactions./i)
    ).toBeInTheDocument();
  });

  it("displays transaction component with points data when data is fetched successfully", async () => {
    const mockTransactions = [
      { customerId: 1, date: "2024-07-15", amount: 120 },
      { customerId: 1, date: "2024-08-10", amount: 80 },
    ];

    const mockMonthlyPoints = { "7-2024": 90, "8-2024": 30 };
    const mockTotalPoints = 120;

    fetchTransactions.mockResolvedValueOnce(mockTransactions);
    processTransactions.mockReturnValueOnce({
      monthlyPoints: mockMonthlyPoints,
      totalPoints: mockTotalPoints,
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Transaction Component/i)).toBeInTheDocument();
    });

    expect(Transaction).toHaveBeenCalledWith(
      { monthlyPoints: mockMonthlyPoints, totalPoints: mockTotalPoints },
      {}
    );
  });
});
