import { menuArray } from "./data";

const shoppingCart = document.getElementById("shoppingCart")
const finishOrder = document.getElementById("finishOrder")
const yourOrder = document.getElementById("your−order")
const menuIndex = []
let totalPrice = 0

document.addEventListener("click", function(e){
    if(e.target.dataset.btn){
        handleOrderClick(e.target.dataset.btn)
    } if(e.target.dataset.removebtn){
        handleRemoveClick(e.target.dataset.removebtn)
    } if(e.target.dataset.completebtn){
        handleCompleteClick(e.target.dataset.completebtn)
    }
})

function handleOrderClick(orderid){
    menuArray.forEach(function(menu){
        if(menu.uuid === orderid){
            totalPrice += menu.price
            menuIndex.push(menu.id)
            shoppingCart.innerHTML += `
            <div class="addToOrder">
                <div>
                    <div class="orderItem"><span>${menu.name}</span></div>
                    <button data-removebtn="${menu.uuid}">remove</button>
                </div>
                <div>
                    <div>${menu.price}</div>
                </div>
            </div>
            `
        } if (shoppingCart.innerHTML) {
            finishOrder.innerHTML = `
            <p>Total Price: </p>
            <p>${totalPrice}</p>
            <button data-completebtn="${menu.uuid}">Complete order</button>
            `
            yourOrder.innerHTML = `
            <p>Your Order</p>
            `
        }
    })
}

// noch nicht funktionstüchtig 
function handleRemoveClick(orderid){
    menuArray.forEach(function(menu){
        if(menu.uuid = orderid){
            shoppingCart.remove()
        }
    })
}

function handleCompleteClick(orderid){
    menuArray.forEach(function(menu){
        if(menu.uuid = orderid){
            console.log("works")
            paymentModal.style.display = "flex"
        }
    })
}

const menuFeed = menuArray.map(function(menu){
//   const {name, ingredients, price, emoji, uuid} = menuArray
    return`
        <div class="menuCard" id="menuCard">
            <div class="item-details">
                <div class="emoji"> ${menu.emoji} </div>
            </div>
            <div class="info">
                <div class="name"> ${menu.name} </div>
                <div class="ingredients"> ${menu.ingredients} </div>
                <div class="price"> ${menu.price} </div>
            </div>
            <div>
                <button id="buyBtn" data-btn="${menu.uuid}">+</button
            </div>
        </div>
    `
})

function render() {
    document.getElementById("menu").innerHTML = menuFeed
}

render()