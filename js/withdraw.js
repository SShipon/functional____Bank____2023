/* add event listener deposit button */

document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step number --1
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString)
    console.log(newWithdrawAmount)
     withdrawField.value = '';
//  step number 6
     const withdrawTotalElement = document.getElementById('withdraw-total')
     const previousTotalAmountString = withdrawTotalElement.innerText;
     const previousTotalAmount = parseFloat(previousTotalAmountString)
    // console.log(previousTotalAmount)
     const newWithdrawTotal = previousTotalAmount - newWithdrawAmount
     withdrawTotalElement.innerText = newWithdrawTotal;

     //step-6
   const balanceElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString)
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceElement.innerText = newBalanceTotal;

})
