import React, { useState, useEffect } from "react";
import { processTransactions } from "./utils/utility";
import Transaction from "./components/Transaction/index.jsx";

import "./App.css";
import { fetchTransactions } from "./api";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch transactions.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { monthlyPoints, totalPoints } = processTransactions(transactions); // passing the all transaction record which is store in the file
  return (
    <div className="App">
      <h1>Reward Points</h1>
      {error === null ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <Transaction
            monthlyPoints={monthlyPoints}
            totalPoints={totalPoints}
          />
        )
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default App;
