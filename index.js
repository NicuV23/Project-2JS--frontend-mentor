 const bill =document.getElementById('bill');
 const button5 =document.getElementById('button5');
 const button10 =document.getElementById('button10');
const button15 =document.getElementById('button15');
const button25 =document.getElementById('button25');
 const button50 =document.getElementById('button50');
 const inputCustom =document.getElementById('inputCustom');
const peopleNr =document.getElementById('peopleNr');
console.log(peopleNr.value);
 const tipNr =document.getElementById('tipNr');
 const totalNr =document.getElementById('totalNr');
const reset =document.getElementById('resetbtn');
const redP =document.getElementById('redP');

button5.addEventListener('click',function(){
    let tipAmount = 5/100*(bill.value/peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peopleNr.value)+tipAmount;
    totalNr.innerText =totalAmount.toFixed(2);
    if(peopleNr.value !='null'){
        redP.style.display='flex';
    }
    peopleNr.addEventListener('input', function() {
        if (peopleNr.value > 0) {
            redP.style.display = 'none';
        } else {
            redP.style.display = 'flex';
        }
    });
})
button10.addEventListener('click',function(){
    let tipAmount= 10/100*(bill.value/peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peopleNr.value)+tipAmount;
    totalNr.innerText =totalAmount.toFixed(2);
    if(peopleNr.value !='null'){
        redP.style.display='flex';
    }
    peopleNr.addEventListener('input', function() {
        if (peopleNr.value > 0) {
            redP.style.display = 'none';
        } else {
            redP.style.display = 'flex';
        }
    });
})
button15.addEventListener('click',function(){
    let tipAmount= 15/100* (bill.value/peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peopleNr.value)+tipAmount;
    totalNr.innerText =totalAmount.toFixed(2);
    if(peopleNr.value !='null'){
        redP.style.display='flex';
    }
    peopleNr.addEventListener('input', function() {
        if (peopleNr.value > 0) {
            redP.style.display = 'none';
        } else {
            redP.style.display = 'flex';
        }
    });
})
button25.addEventListener('click',function(){
    let tipAmount= 25/100*(bill.value/peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peopleNr.value)+tipAmount;
    totalNr.innerText =totalAmount.toFixed(2);
    if(peopleNr.value !='null'){
        redP.style.display='flex';
    }
    peopleNr.addEventListener('input', function() {
        if (peopleNr.value > 0) {
            redP.style.display = 'none';
        } else {
            redP.style.display = 'flex';
        }
    });
   
})
button50.addEventListener('click',function(){
    let tipAmount= 50/100*(bill.value/peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peopleNr.value)+tipAmount;
    totalNr.innerText =totalAmount.toFixed(2);
    if(peopleNr.value !='null'){
        redP.style.display='flex';
    }
    peopleNr.addEventListener('input', function() {
        if (peopleNr.value > 0) {
            redP.style.display = 'none';
        } else {
            redP.style.display = 'flex';
        }
    });
})

reset.addEventListener('click',function(){
    tipNr.innerText ='0.00';
    totalNr.innerText='0.00';
    bill.value='0';
    peopleNr.value='0';
    redP.style.display='none';
    inputCustom.value ='0';
})

inputCustom.addEventListener('keyup',function(){
    let tipAmount= inputCustom.value/100*(bill.value/peopleNr.value);
    tipNr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peopleNr.value)+tipAmount;
    totalNr.innerText =totalAmount.toFixed(2);
    if(peopleNr.value !='null'){
        redP.style.display='flex';
    }
})

