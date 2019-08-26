let myAccount = {
    name: 'Jameel Evans',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function (account, income) {
    account.income = account.income + income
} 

//resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
//getAccountSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

//AddIncome
addIncome(myAccount, 2000)

//addExpense
addExpense(myAccount, 2.50)

//addExpense
addExpense(myAccount, 160)

//getAccountSummary
console.log(getAccountSummary(myAccount))

//resetAcccount
resetAccount(myAccount)

//getAccountSummary
console.log(getAccountSummary(myAccount))



//addExpense


