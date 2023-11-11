const bill = document.getElementById('bill');
const button5 = document.getElementById('button5');
const button10 = document.getElementById('button10');
const button15 = document.getElementById('button15');
const button25 = document.getElementById('button25');
const button50 = document.getElementById('button50');
const inputCustom = document.getElementById('inputCustom');
const peopleNr = document.getElementById('peopleNr');
const tipNr = document.getElementById('tipNr');
const totalNr = document.getElementById('totalNr');
const reset = document.getElementById('resetbtn');
const redP = document.getElementById('redP');

function updateRedP() {
    if (peopleNr.value > 0) {
        redP.style.display = 'none';
    } else {
        redP.style.display = 'flex';
    }
}

function handleInput() {
    updateRedP();
}

peopleNr.addEventListener('input', handleInput);

function handleReset() {
    tipNr.innerText = '0.00';
    totalNr.innerText = '0.00';
    bill.value = '0';
    peopleNr.value = '0';
    redP.style.display = 'none';
    inputCustom.value = '0';
}

reset.addEventListener('click', function () {
    peopleNr.removeEventListener('input', handleInput);
    handleReset();
    peopleNr.addEventListener('input', handleInput);
});

function updateAmounts(tipPercentage) {
    let tipAmount = (tipPercentage / 100) * (bill.value / peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount = (bill.value / peopleNr.value) + tipAmount;
    totalNr.innerText = totalAmount.toFixed(2);
    updateRedP();
}

button5.addEventListener('click', function () {
    updateAmounts(5);
});

button10.addEventListener('click', function () {
    updateAmounts(10);
});

button15.addEventListener('click', function () {
    updateAmounts(15);
});

button25.addEventListener('click', function () {
    updateAmounts(25);
});

button50.addEventListener('click', function () {
    updateAmounts(50);
});

inputCustom.addEventListener('keyup', function () {
    updateAmounts(inputCustom.value);
});
