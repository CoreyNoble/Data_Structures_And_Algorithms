/**
 * Determines the richest customer out of a list of customers.
 * Each customer has a list of bank account values.
 *
 * @param {number[][]} accounts
 * @return {number}
 */
 const maximumWealth = accounts => {
    // Keeps track of the greatest customer wealth.
    let richestCustomerWealth = 0
    
    // O(n) loop over every customer.
    for (let customer in accounts) {
        // Keeps track of the customers' wealth.
        let customerWealth = 0
        
        // O(n) loop over every bank value for the customer.
        for (let bankValue of accounts[customer]) {
            // Adds the bank value to the customers' wealth.
            customerWealth += bankValue
        }
        
        // Determine if this is the new highest customer value.
        richestCustomerWealth = Math.max(richestCustomerWealth, customerWealth)
    }
    
    // Highest customer value found.
    return richestCustomerWealth
}