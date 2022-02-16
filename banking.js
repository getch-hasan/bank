document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite');
    const depositeAmount = depositeInput.value;
    console.log(depositeAmount);

    const totalDeposit = document.getElementById('total-deposite');

    const currentDeposite = totalDeposit.innerText;
    let newDeposite = parseFloat(currentDeposite) + parseFloat(depositeAmount);

    totalDeposit.innerText = newDeposite;

    const totalBalance = document.getElementById('total-balance')
    const totalBalancetext = totalBalance.innerText;
    const totalBalanceflot = parseFloat(totalBalancetext);

    const newBalance = totalBalanceflot + parseFloat(newDeposite)
    totalBalance.innerText = newBalance




    depositeInput.value = ''
})
document.getElementById('withdraw-button').addEventListener('click', function () {


    const withdrawinput = document.getElementById('withdrew')

    const withdrawAmounttext = withdrawinput.value
    const newWithdrawAmount = parseFloat(withdrawAmounttext)
    console.log(newWithdrawAmount)
    const totalWithdraw = document.getElementById('total-withdraw')
    const previouswithdraw = totalWithdraw.innerText


    const newtotalWithdraw = parseFloat(previouswithdraw) + parseFloat(newWithdrawAmount)
    totalWithdraw.innerText = newtotalWithdraw
    withdrawinput.value = ''

    const totalBalance = document.getElementById('total-balance')
    const totalBalancetext = totalBalance.innerText;
    const totalBalanceflot = parseFloat(totalBalancetext);

    const newBalance = totalBalanceflot - parseFloat(withdrawAmounttext)
    totalBalance.innerText = newBalance






})