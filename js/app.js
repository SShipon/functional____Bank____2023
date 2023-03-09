/* add event listener deposit button */

document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-field');
   const newDepositString = depositField.value;
   const newDepositAmount = parseFloat(newDepositString)
   console.log(newDepositAmount)
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total')
    const PreviousTotalAmountString = depositTotalElement.innerText;
    const PreviousTotalAmount = parseFloat(PreviousTotalAmountString)
    console.log(PreviousTotalAmount)
    const newDepositTotal = PreviousTotalAmount + newDepositAmount
    depositTotalElement.innerText = newDepositTotal;


     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString)
     console.log(previousBalanceTotalAmount)
     const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
     balanceTotalElement.innerText = newBalanceTotal;
})

