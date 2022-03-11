function buy(id){
    for(i = 0; i < products.length; i++){
        if(id == products[i].id){
            cartList.push(products[i]);
        }
    } 
}

function cleanCart(){
    for(i = 0; i <= cartList.length; i++){
        cartList.splice(cartList[i]);
    }
}

function subTotal(){
    for(var i = 0; i < cartList.length; i++){
        if(cartList[i].type == "grocery"){
            subtotal.grocery.value =+  cartList[i].price;
            subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
        }else if(cartList[i].type == "clothes"){
            subtotal.clothes.value +=  cartList[i].price;
        }else{
            subtotal.joies.value +=  cartList[i].price;
        }
    }
}

function calculateTotal(){

}

function generateCart(){
    
}

