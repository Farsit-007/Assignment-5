const sButton = document.getElementsByClassName('seatButton')
let newTotalPrice = 0;
let sCount = 0
for(let s of sButton){
    s.addEventListener('click', function(){
        if (sCount < 4) {
        s.style.backgroundColor = '#1DD100';
        s.style.color = 'white';
        s.setAttribute('disabled','')
        s.classList.remove('bg-[#F7F8F8]')
        sCount = sCount + 1;
        setInnertText('seat-count',sCount);
        
        const rem_seat = document.getElementById('rem-seat');
        const rem_seat_num = parseInt(rem_seat.innerText);
        const remCount = rem_seat_num - 1;
        setInnertText('rem-seat',remCount);

        const div = document.createElement('div');
        const ticketPrice = document.getElementById('ticket-price');

        const p1 = document.createElement('p');
        p1.innerText = s.innerText;
        p1.classList.add("pl-2")
        const p2 = document.createElement('p')
        p2.innerText ='Economy';
        p2.classList.add("pl-8");
        const p3 = document.createElement('p');
        p3.innerText = ticketPrice.innerText;
   
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        
        const app = document.getElementById('app-section');
        app.appendChild(div);
        div.classList.add("flex", "justify-between" ,"py-2")


        const totalPriceOfSeat = document.getElementById('ticket-price');
        const totalPrice_NUm = parseInt(totalPriceOfSeat.innerText);
        const totalPriceElement = document.getElementById('totalPrice');
        const totalPriceCurrent = parseInt(totalPriceElement.innerText);
        newTotalPrice += totalPrice_NUm;
        setInnertText('totalPrice', newTotalPrice);
        
        const applybtn = document.getElementById('applybtn');
        if(sCount === 4){
            applybtn.removeAttribute('disabled')
        }
        }
        else{
            alert('`Ticket Purchase for One Person is Limited ')
        }
    })
}

applybtn.addEventListener('click',function(){
    const couponCode = takeinputValue('inputCupon');
    if(couponCode === 'NEW15'){
        const grandN1 = newTotalPrice * 0.15;
        const grandTotal = newTotalPrice - grandN1;
        setInnertText('grand_total',grandTotal);
        setInnertText('totalPrice',grandTotal);
        hideOption('applyHIde');
    }
    else if(couponCode === 'Couple 20'){
        const grandN1 = newTotalPrice * 0.2;
        const grandTotal = newTotalPrice - grandN1;
        setInnertText('grand_total',grandTotal);
        setInnertText('totalPrice',grandTotal);
        hideOption('applyHIde');
    }
    else{
        alert('Please Give Valid Coupon Code')
    }
})





function hideOption(elementId){
    const hideIt = document.getElementById(elementId);
    hideIt.classList.add('hidden');
}

function takeinputValue(elementId){
    const element = document.getElementById(elementId);
    const eleValue = element.value;
    return eleValue;
}
function setInnertText(elementId,value){
    let element = document.getElementById(elementId);
    element.innerText = value;
}

