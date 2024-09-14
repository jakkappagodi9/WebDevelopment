let element  = document.getElementById("main-heading");
// change fruit shop to fruit world
element.textContent = "Fruit World";
element.style.color = "orange";

//div node with id header  background modification
let headElement = document.getElementById("header");
headElement.style.background = 'green';
headElement.style.borderBottom = '2px solid orange';

//fruit in basket color chnage to green
document.getElementById('basket-heading').style.color = 'green';
//Thanks Message
document.getElementById('thanks').innerHTML = '<p>Please visit us again </p>';