# Project Title

### Akhilesh_UIAssignment

## Description

This application is developed using React.js and leverages APIs to fetch and display data. The primary functionality of the application is to calculate and show the reward points earned by customers based on their purchases. The reward points are awarded according to a specific rewards program, which operates as follows:

Points Calculation Logic:

For every dollar spent above $100 in a single transaction, the customer earns 2 reward points.
For every dollar spent between $50 and $100, the customer earns 1 reward point.

Example: If a customer spends $120, the points earned are calculated as:

    1) 2 points for every dollar spent over $100: 2 * ($120 - $100) = 2 * $20 = 40 points.
    2) 1 point for every dollar spent between $50 and $100: 1 * ($100 - $50) = 1 * $50 = 50 points.
    3) Total points for this transaction: 40 + 50 = 90 points.
    
Functionality:

    1) The application fetches transaction records for each customer over a three-month period.
    2) It calculates the reward points earned per month for each customer as well as the total reward points accumulated over the entire period.
    3) The results are displayed in a user-friendly format, making it easy to track and understand the rewards.



### Available Script

1)  Starts the development server and opens the application in your default browser:
       ### npm run start
2) Runs the test suite to ensure that all components and functionalities are working as expected:
    ### npm run test
             
3)  Builds the application for production, optimizing the code for deployment:
     ### npm run build
    
### Installing

1) We have to clone from the github Repository 
     ### https://github.com/akhil030698/Akhilesh_UIASSIGNMENT_
2) Navigate to the project directory:
    ### cd Akhilesh_UIASSIGNMENT_
3) Install all dependencies:
     ### npm install

### Executing program
1) Start the development server:
     ### npm run start

    This command will compile the code, start the development server, and open the application in       your default web browser.

3) To run tests and ensure everything is working correctly, use:
      ### npm run test

4) For building the application for production deployment, execute:
     ### npm run build

### Example of Points Calculation
Given the following transactions:

### Transaction 1: $120

    1) Points for amount over $100: 2 * ($120 - $100) = 40 points
    2) Points for amount between $50 and $100: 1 * ($100 - $50) = 50 points
    3) Total points for Transaction 1: 90 points

### Transaction 2: $80

    1) Points for amount over $100: 0 points (since $80 is less than $100)
    2) Points for amount between $50 and $100: 1 * ($80 - $50) = 30 points
    3) Total points for Transaction 2: 30 points
    
    By aggregating the points for all transactions over a given month and period, the application provides a comprehensive view of the reward points earned by each customer.

### Additional Notes
 1) Ensure that the API endpoints for fetching transaction data are correctly configured in the application.
 2) The application’s design and structure follow standard React.js practices, making it scalable and maintainable.


