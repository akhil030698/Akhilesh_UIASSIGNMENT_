import transactions from "./utils/transaction";

export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
};
