//select every element
const eightGB = document.getElementById('eight-GB');
const sixteenGB = document.getElementById('sixteen-GB');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const totalcostField = document.getElementById('total-cost');
const bestPrice = document.getElementById('best-price');
const SSD256 = document.getElementById('ssd-256');
const SSD512 = document.getElementById('ssd-512');
const SSD1TB = document.getElementById('ssd-1tb'); 
const deliveryTwenty = document.getElementById('delivery-twenty');
const deliveryZero = document.getElementById('delivery-zero');
const deliveryCharge = document.getElementById('delivery-charge');
const anotherTotal = document.getElementById('another-total-cost');
const promoCode = document.getElementById('promo-code');
const applyButton = document.getElementById('apply-button');


//convert all cost value 
function convert(textId){
    const Text = textId.innerText;
    const convertValue = parseInt(Text);
    return convertValue;
}
//calculation function
function calculate(whose,cost){
    whose.innerText = cost;
    //get all cost value
    const bestPriceValue = convert(bestPrice);
    const memoryCostValue = convert(memoryCost);
    const storageCostValue = convert(storageCost);
    const deliveryChargeValue = convert(deliveryCharge);
    //calculate total cost
    const totalCost = bestPriceValue + memoryCostValue + storageCostValue + deliveryChargeValue;
    //set calculation value
    totalcostField.innerText = totalCost;
    //another
    anotherTotal.innerText = totalCost;
}

//event function for each button
function another(id,choice,price){
    id.addEventListener('click',function(){
        calculate(choice,price);
    })
}
another(eightGB,memoryCost,0)
another(sixteenGB,memoryCost,180);
another(SSD256,storageCost,0);
another(SSD512,storageCost,100);
another(SSD1TB,storageCost,180);
another(deliveryZero,deliveryCharge,0);
another(deliveryTwenty,deliveryCharge,20);

//promo code
applyButton.addEventListener('click',function(){
    promoCodeValue = promoCode.value;
    if(promoCodeValue == 'stevekaku'){
        const previousTotal = convert(anotherTotal);
        const promoPrice = previousTotal - (previousTotal * 0.2);
        anotherTotal.innerText = promoPrice;
        promoCode.value = '';
    }
})
