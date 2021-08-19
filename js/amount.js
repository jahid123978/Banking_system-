function getInputValue(inputValue) {
    const depositInput = document.getElementById(inputValue);
    const depositAmount = depositInput.value;
    const depositAmountValue = parseFloat(depositAmount);
    // clear the deposit input 
    depositInput.value = '';
    return depositAmountValue;
}

function totalValue(previousValue, depositAmountValue) {
    const depositTotal = document.getElementById(previousValue);
    const totalDepositAmountTax = depositTotal.innerText;
    const totalDepositAmount = parseFloat(totalDepositAmountTax);

    const totalUpdateDepositAmount = depositAmountValue + totalDepositAmount;
    depositTotal.innerText = totalUpdateDepositAmount;
}

function totalBalance(depositAmountValue, isAdd){
    const accountBalance = document.getElementById('balance-total');
    const accountBalanceAmount = accountBalance.innerText;
    const accountBalanceAmountValue = parseFloat(accountBalanceAmount);
    if(isAdd == true)
    {
        const totalUpdateBalanceAmount = accountBalanceAmountValue + depositAmountValue;
        accountBalance.innerText = totalUpdateBalanceAmount;
    }
    else
    {
        const totalUpdateBalanceAmount = accountBalanceAmountValue - depositAmountValue;
        accountBalance.innerText = totalUpdateBalanceAmount;
    }
}




//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function() {
    //get the amount deposit amount
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value;
    // const depositAmountValue = parseFloat(depositAmount);
    const depositAmountValue = getInputValue('deposit-input') 
    

    // const depositTotal = document.getElementById('deposit-total');
    // const totalDepositAmountTax = depositTotal.innerText;
    // const totalDepositAmount = parseFloat(totalDepositAmountTax);

    // const totalUpdateDepositAmount = depositAmountValue + totalDepositAmount;
    // depositTotal.innerText = totalUpdateDepositAmount;
    if(depositAmountValue > 0)
    {
        totalValue('deposit-total', depositAmountValue);

        //update account balance
        // const accountBalance = document.getElementById('balance-total');
        // const accountBalanceAmount = accountBalance.innerText;
        // const accountBalanceAmountValue = parseFloat(accountBalanceAmount);
        // const totalUpdateBalanceAmount = accountBalanceAmountValue + depositAmountValue;
        // accountBalance.innerText = totalUpdateBalanceAmount;
        totalBalance(depositAmountValue, true);
    }
    // clear the deposit input 
    // depositInput.value = '';
});

//withdraw account balance
document.getElementById('withdraw-btn').addEventListener('click', function (){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountTax = withdrawInput.value;
    // const withdrawAmountValue = parseFloat(withdrawAmountTax);
    const withdrawAmountValue = getInputValue('withdraw-input');

    // const previousWithdrawAmount = document.getElementById('withdraw-total');
    // const withdrawAmountTaxV = previousWithdrawAmount.innerText;
    // const previousWithdrawAmountValue = parseFloat(withdrawAmountTaxV);
    // const totalWithdrawAmount = withdrawAmountValue + previousWithdrawAmountValue;
    // previousWithdrawAmount.innerText = totalWithdrawAmount;
     const accountBalance = document.getElementById('balance-total');
        const accountBalanceAmount = accountBalance.innerText;
        const accountBalanceAmountValue = parseFloat(accountBalanceAmount);
    if(withdrawAmountValue > 0 && withdrawAmountValue<accountBalanceAmountValue)
    {
        totalValue('withdraw-total', withdrawAmountValue);
    
        // const accountBalance = document.getElementById('balance-total');
        // const accountBalanceAmount = accountBalance.innerText;
        // const accountBalanceAmountValue = parseFloat(accountBalanceAmount);
        // const totalAccountBalance = accountBalanceAmountValue - withdrawAmountValue;
        // accountBalance.innerText = totalAccountBalance;
        totalBalance(withdrawAmountValue, false);
    }
    
    //clear the withdraw placeholder
    // withdrawInput.value = '';
})