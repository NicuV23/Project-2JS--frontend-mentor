 const bill =document.getElementById('bill');
 const button5 =document.getElementById('button5');
 const button10 =document.getElementById('button10');
const button15 =document.getElementById('button15');
const button25 =document.getElementById('button25');
 const button50 =document.getElementById('button50');
 const inputcustom =document.getElementById('inputcustom');
const peoplenr =document.getElementById('peoplenr');
 const tipnr =document.getElementById('tipnr');
 const totalnr =document.getElementById('totalnr');
const reset =document.getElementById('resetbtn');
const redp =document.getElementById('redp');

button5.addEventListener('click',function(){
    let tipAmount = 5/100*(bill.value/peoplenr.value);
    tipnr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peoplenr.value)+tipAmount;
    totalnr.innerText =totalAmount.toFixed(2);
    peoplenr.addEventListener('input', function() {
        if (peoplenr.value > 0) {
            redp.style.display = 'none';
        } else {
            redp.style.display = 'flex';
        }
    });
})
button10.addEventListener('click',function(){
    let tipAmount= 10/100*(bill.value/peoplenr.value);
    tipnr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peoplenr.value)+tipAmount;
    totalnr.innerText =totalAmount.toFixed(2);
    peoplenr.addEventListener('input', function() {
        if (peoplenr.value > 0) {
            redp.style.display = 'none';
        } else {
            redp.style.display = 'flex';
        }
    });
})
button15.addEventListener('click',function(){
    let tipAmount= 15/100* (bill.value/peoplenr.value);
    tipnr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peoplenr.value)+tipAmount;
    totalnr.innerText =totalAmount.toFixed(2);
    peoplenr.addEventListener('input', function() {
        if (peoplenr.value > 0) {
            redp.style.display = 'none';
        } else {
            redp.style.display = 'flex';
        }
    });
})
button25.addEventListener('click',function(){
    let tipAmount= 25/100*(bill.value/peoplenr.value);
    tipnr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peoplenr.value)+tipAmount;
    totalnr.innerText =totalAmount.toFixed(2);
    peoplenr.addEventListener('input', function() {
        if (peoplenr.value > 0) {
            redp.style.display = 'none';
        } else {
            redp.style.display = 'flex';
        }
    });
   
})
button50.addEventListener('click',function(){
    let tipAmount= 50/100*(bill.value/peoplenr.value);
    tipnr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peoplenr.value)+tipAmount;
    totalnr.innerText =totalAmount.toFixed(2);
    peoplenr.addEventListener('input', function() {
        if (peoplenr.value > 0) {
            redp.style.display = 'none';
        } else {
            redp.style.display = 'flex';
        }
    });
})

reset.addEventListener('click',function(){
    tipnr.innerText ='0.00';
    totalnr.innerText='0.00';
    bill.value='0';
    peoplenr.value='0';
    redp.style.display='none';
    inputcustom.value ='0';
})

inputcustom.addEventListener('keyup',function(){
    let tipAmount= inputcustom.value/100*(bill.value/peoplenr.value);
    tipnr.innerText = tipAmount.toFixed(2);
    let totalAmount =(bill.value/peoplenr.value)+tipAmount;
    totalnr.innerText =totalAmount.toFixed(2);
    
})

