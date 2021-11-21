
// getting input function

function getInput(productId, price){
    const productInput = document.getElementById(productId);
    const newValue =  price;
    return newValue;

}


// for calculation function

function calculation(){
    const subTotalText = document.getElementById('best-price').innerText;
    const subTotal = parseInt(subTotalText);
    const memoryText  = document.getElementById('memory').innerText;
    const memory = parseInt(memoryText);
    const storageText = document.getElementById('storage').innerText;
    const storage =parseInt(storageText);
    const deliveryText = document.getElementById('delivery').innerText;
    const delivery = parseInt(deliveryText);
    const total=  memory+storage+delivery+subTotal;
    document.getElementById('total').innerText=total;
    document.getElementById('promo-total').innerText=total;
    // return total;
}

// promo code


function updatePromoCode(){
    
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value;

    if (promoCode === 'stevekaku') {
        const totalPriceWithoutPromo = parseFloat(document.getElementById('total').innerText);
        const totalPriceWithPromo = (totalPriceWithoutPromo * 20) / 100;
        const grandTotal = parseFloat((totalPriceWithoutPromo - totalPriceWithPromo).toFixed(2));

        document.getElementById('promo-total').innerText = grandTotal;
        document.getElementById('promo-code').value = '';
    }
}
 

//input event handler
document.getElementById('memory-8gb').addEventListener('click',function(){
    document.getElementById('memory').innerText=getInput('memory-8gb',0);
    calculation();

});
document.getElementById('memory-16gb').addEventListener('click',function(){
    
document.getElementById('memory').innerText=getInput('memory-16gb',180);
calculation();
});
document.getElementById('storage-sm').addEventListener('click',function(){
document.getElementById('storage').innerText=getInput('storage-sm',0);
calculation();
});
document.getElementById('storage-md').addEventListener('click',function(){
document.getElementById('storage').innerText=getInput('storage-md',100);
calculation();
});
document.getElementById('storage-lg').addEventListener('click',function(){
document.getElementById('storage').innerText=getInput('storage-lg',180);
calculation();
});
document.getElementById('delivery-withoutCharge').addEventListener('click',function(){
document.getElementById('delivery').innerText=getInput('delivery-withoutCharge',0);
calculation();
});
document.getElementById('delivery-withCharge').addEventListener('click',function(){
document.getElementById('delivery').innerText=getInput('delivery-withCharge',20);
calculation();
});



// promo code 

document.getElementById('promo-apply').addEventListener('click', function () {
    
    updatePromoCode();

});


 
