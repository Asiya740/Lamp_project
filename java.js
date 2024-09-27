    let Lamp = document.getElementById("Lamp");
    let lamp1 = document.getElementById("lamp1");
    let lamp2 = document.getElementById("lamp2");
    let lamp3 = document.getElementById("lamp3");
    let lamp4 = document.getElementById("lamp4");

    lamp1.addEventListener('click', () => {
            Lamp.style.filter = "none";
    })

    lamp2.addEventListener('click', () => {
        Lamp.style.filter = "hue-rotate(45deg)";
})

lamp3.addEventListener('click', () => {
    Lamp.style.filter = "hue-rotate(180deg)";
})

lamp4.addEventListener('click', () => {
    Lamp.style.filter = "hue-rotate(280deg)";
})


    /* let minus = document.getElementById("minus"); 
let count = document.getElementById("count"); 
let plus = document.getElementById("plus"); 
let total = document.getElementById("total"); 

var coun = 5;
count.innerText = coun;

minus.addEventListener('click', () => {   
     coun -= 1;

     count.innerText = coun;  // Corrected this line
}); */


let minus = document.getElementById("minus"); 
let plus = document.getElementById("plus"); 
let count = document.getElementById("count"); 
let total = document.getElementById("total");

let quantity = 5;
let pricePerItem = 59.66;

count.innerText = quantity;
total.innerText = `$${(quantity * pricePerItem).toFixed(2)}`;

minus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        count.innerText = quantity;
        total.innerText = `$${(quantity * pricePerItem).toFixed(3)}`;
    }
});

plus.addEventListener('click', () => {
    quantity++;
    count.innerText = quantity;
    total.innerText = `$${(quantity * pricePerItem).toFixed(4)}`;
});

    
    




