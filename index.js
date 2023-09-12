import { menuArray } from "./data";
import { v4 as uuidv4 } from 'uuid';

const shoppingCart = document.getElementById("shoppingCart")
const finishOrder = document.getElementById("finishOrder")
const yourOrder = document.getElementById("your−order")
const paymentModal = document.getElementById("payement-modal")
const inputName = document.getElementById("input-name")
const payBtn = document.getElementById("pay-btn")
const thxMsg = document.getElementById("thanks-msg")
let menuIndex = []
let totalPrice = 0

document.addEventListener("click", function(e){
    if(e.target.dataset.btn){
        handleOrderClick(e.target.dataset.btn)
    } if(e.target.dataset.removebtn){
        handleRemoveClick(e.target.dataset.removebtn)
    } if (e.target.dataset.completebtn){
        handleCompleteClick(e.target.dataset.completebtn)
    }
})

function handleOrderClick(orderid){
   
    menuArray.forEach(function(menu){
        if(menu.uuid === orderid){
            totalPrice += menu.price
            menuIndex.push({...menu})
            shoppingCart.innerHTML += `
                <div class="addToOrder">
                    <div>
                        <div class="orderItem"><span>${menu.name}</span></div>
                        <button data-removebtn="${uuid}">remove</button>
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
                <button  data-completebtn="${menu.uuid}">Complete order</button>
            `
            yourOrder.innerHTML = `
                <p>Your Order</p>
            `
        }
    })
}

function handleRemoveClick(orderid){
    shoppingCart.innerHTML = ``
    menuIndex = menuIndex.filter(function(menu){
        return menu.uuid !== orderid
    })
    menuIndex.forEach(menu => {
        shoppingCart.innerHTML +=`
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
    })
    
}

function handleCompleteClick(orderid){
    menuArray.forEach(function(menu){
        if(menu.uuid = orderid){
            paymentModal.style.display = "flex"
        }
    })
}

payBtn.addEventListener("click", function() {
    paymentModal.style.display = "none"
    shoppingCart.textContent = ""
    yourOrder.textContent = ""
    finishOrder.textContent = ""
    thxMsg.innerHTML = `
    <p>Thanks ${inputName.value}! Your order is on its way.</p>
    `
})

const menuFeed = menuArray.map(function(menu){
//  const {name, ingredients, price, emoji, uuid} = menuArray
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