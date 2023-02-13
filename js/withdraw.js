document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    

    const previousBalanceTotal = getTextElementValueById('balance-total');


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    } else {
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
    }

    // const withdrawField = document.getElementById('withdraw-amount');
    // const newWithdrawAmountString = withdrawField.value;
    // const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // withdrawField.value = '';

    // if(isNaN(newWithdrawAmount)){
    //     alert('Please provide a valid amount');
    //     return;
    // }

    // const withdrawTotalElement = document.getElementById('withdraw-total');
    // const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // const balanceTotalElement = document.getElementById('balance-total');
    // const previousBalanceTotalString = balanceTotalElement.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // if(newWithdrawAmount > previousBalanceTotal){
    //     alert('Please enter valid amount!');
    //     return;
    // }


    // const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotalElement.innerText = currentWithdrawTotal;


    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotalElement.innerText = newBalanceTotal;

})