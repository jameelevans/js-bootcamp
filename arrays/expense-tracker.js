const account = {
    name: 'Jameel Evans',
    expenses: [],
    income: [],
    // addExpense -> description, amount 
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    //Add income of account
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    //Get summary of account
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        //Jameel Evans has a balance of $10. $100 in income. $90 in expenses.
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}




account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
