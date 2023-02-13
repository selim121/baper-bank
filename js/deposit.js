document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);





    // //deposit
    // const depositField = document.getElementById('deposit-amount');
    // const newDepositAmountString = depositField.value;
    // const newDepositAmount = parseFloat(newDepositAmountString);

    // depositField.value = '';

    // if(isNaN(newDepositAmount)){
    //     alert('Please provide a valid amount');
    //     return;
    // }

    // const depositTotalElement = document.getElementById('deposit-total');
    // const previousDepositTotalString = depositTotalElement.innerText;
    // const previousDepositTotal = parseFloat(previousDepositTotalString);

    // const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // depositTotalElement.innerText = currentDepositTotal;

    // //balance

    // const balanceTotalElement = document.getElementById('balance-total');
    // const previousBalanceTotalString = balanceTotalElement.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // balanceTotalElement.innerText = currentBalanceTotal;

})
