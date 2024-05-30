let balance = 0;

function add() {
    const des = document.getElementById('des').value;
    const ink = parseFloat(document.getElementById('ink').value);

    if (isNaN(ink) || ink <= 0) {
        alert("Please enter a valid income.");
        return;
    }

    // Increment the balance with the deposited income
    balance += ink;

    // Display the updated balance
    updateBalanceDisplay();

    // Optionally, you can store the deposit in local storage or perform other actions.
    // For simplicity, this example doesn't store deposits.

    // Optional: Clear the input fields
    document.getElementById('des').value = '';
    document.getElementById('ink').value = '';
}

function updateBalanceDisplay() {
    // Display the current balance in the 'balanceDisplay' div
    const balanceDisplay = document.getElementById('balanceDisplay');
    balanceDisplay.innerHTML = `Balance: $${balance.toFixed(2)}`;
}
let totalExpense = 0;
function expense() {
    const des = document.getElementById('des').value;
    const exp = parseFloat(document.getElementById('exp').value);

    if (isNaN(exp) || exp <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }

    // Check if there's enough balance to cover the expense
    if (exp > balance) {
        alert("Insufficient funds. Cannot process the expense.");
        return;
    }

    // Deduct the expense from the balance
    balance -= exp;

    // Add the expense to the totalExpense
     totalExpense += exp;
 alert('added successfully')
    // Display the updated balance and total expense
    updateBalanceDisplay();
    updateExpenseDisplay();
}

function updateExpenseDisplay() {
    // Display the total expense in the 'expenseDisplay' div
    const expenseDisplay = document.getElementById('expenseDisplay');
    expenseDisplay.innerHTML = `Expense: $${totalExpense.toFixed(2)}`;
}
function register(){
    const bank={
     username:uname.value,
     password:pssd.value,
  
    }
    if(bank.username in localStorage){
     alert('Employee already exits')
   }
   else{
      localStorage.setItem(bank.username,JSON.stringify(bank))
      alert('customer register successfully')
      window.location = './login.html';
   }
 }
function login() {
    var enteredusername = document.getElementById("uname").value;
    var enteredPassword = document.getElementById("pssd").value;
    console.log(enteredusername);
    console.log(enteredPassword);
   
   
    if(uname.value in localStorage){
    let bank=JSON.parse(localStorage.getItem(enteredusername))
    // console.log(bank);
     var storeduname=bank.username;
     var storedpassword=bank.password
     if (storeduname && storedpassword) {
        // Check if entered username and password match the stored values
        if (enteredusername === storeduname && enteredPassword === storedpassword) {
            alert("Login successfully");
            window.location = './index.html';
        } else {
            console.log("Incorrect username or password");
        }
    } else {
        console.log("Username or password not found in localStorage");
    }

    }
    else{
        alert("no username")
    }


}