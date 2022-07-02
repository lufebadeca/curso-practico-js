function calcularPrecioConDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    const precioConCupon = precioConDescuento*(100-cupon)/100;
    return precioConCupon;
}

const coupons = [5,10,15,20,25,30,40,50];
const couponCodes = ["codigo5","codigo10","codigo15","codigo20","codigo25","codigo30","codigo40","codigo50"];

function computePriceDiscount(){
    const price = document.getElementById("input-price");
    const discount = document.getElementById("input-discount");
    const c = document.getElementById("input-coupon");
    const couponText = c.value;
    var appliedCoupon = 0;
    for(var i=0; i<coupons.length; i++){
        if( couponText==couponCodes[i] ){
            appliedCoupon = coupons[i];
        };
    }
    const finalPrice = calcularPrecioConDescuento(price.value, discount.value, appliedCoupon);
    const couponField = document.getElementById("discountBox");
    couponField.innerText = `- ${appliedCoupon}% off`;
    const resultInput = document.getElementById("result");
    resultInput.innerText = `The final price to pay is $ ${finalPrice}`;
}




/*
console.log(
    {
        precioOriginal,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento
    }
);
*/