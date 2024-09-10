// function to calculatePoints
export function calculatePoints(transactionAmount) {
  let points = 0;
  if (transactionAmount > 100) {
    points = (transactionAmount - 100) * 2 + (100 - 50);
  } else if (transactionAmount > 50) {
    points = transactionAmount - 50;
  }
  return points;
}
// function to store the points against the date of transaction
// and the total points of the Customer
export const processTransactions = (data) => {
  const monthlyPoints = {};
  const totalPoints = {};
  data.forEach(({ customerId, transactionAmount, transactionDate }) => {
    const points = calculatePoints(transactionAmount); // calling the function to calculatePoints
    const monthYear = new Date(transactionDate).toISOString().slice(0, 10); // reteriving the date form the transaction date in yyyy-mm-dd

    if (!monthlyPoints[customerId]) {
      monthlyPoints[customerId] = {}; // creating the new object for the new  customerID
    }
    if (!monthlyPoints[customerId][monthYear]) {
      monthlyPoints[customerId][monthYear] = 0;
    }
    monthlyPoints[customerId][monthYear] += points; // adding the points of the date wise transaction

    if (!totalPoints[customerId]) {
      totalPoints[customerId] = 0;
    }
    totalPoints[customerId] += points; // adding the total points of the Customer transaction
  });

  return { monthlyPoints, totalPoints };
};
