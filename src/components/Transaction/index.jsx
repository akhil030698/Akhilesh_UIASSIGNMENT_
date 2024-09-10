import React from "react";
import "../../App.css";

const Transaction = ({ monthlyPoints, totalPoints }) => {
  return (
    <>
      <div className="cards-container">
        <div className="monthly-points">
          <h2>Monthly Points</h2>
          {Object.keys(monthlyPoints).map((customerId) => (
            <div className="card" key={customerId}>
              <h3>Customer {customerId}</h3>
              {Object.keys(monthlyPoints[customerId]).map((monthYear) => (
                <div key={monthYear} className="card-content">
                  <strong>{monthYear}:</strong>{" "}
                  {monthlyPoints[customerId][monthYear]} points
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="total-points">
          <h2>Total Points</h2>
          {Object.keys(totalPoints).map((customerId) => (
            <div className="card" key={customerId}>
              <h3>Customer {customerId}</h3>
              <div className="card-content">
                <strong>Total:</strong> {totalPoints[customerId]} points
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transaction;
