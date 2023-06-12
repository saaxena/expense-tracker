const expenseForm = document.getElementById('expense-form');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const expenseList = document.getElementById('expense-list');

// Load expenses from local storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Display expenses
function displayExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.textContent = `${expense.description} - $${expense.amount}`;
    li.classList.add('list-group-item');
    expenseList.appendChild(li);
  });
}

// Add new expense
function addExpense(description, amount) {
  const expense = {
    description,
    amount
  };
  expenses.push(expense);
  displayExpenses();
  saveExpenses();
}

// Save expenses to local storage
function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Event listener for form submission
expenseForm.addEventListener('submit', e => {
  e.preventDefault();
  const description = expenseInput.value.trim();
  const amount = parseFloat(amountInput.value);
  if (description && amount) {
    addExpense(description, amount);
    expenseInput.value = '';
    amountInput.value = '';
  }
});

// Initial display of expenses
displayExpenses();
