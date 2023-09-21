import { menuArray } from "./data"
import { v4 as uuidv4 } from "uuid"

const shoppingCart = document.getElementById("shoppingCart")
const finishOrder = document.getElementById("finishOrder")
const yourOrder = document.getElementById("your−order")
const paymentModal = document.getElementById("payement-modal")
const completeBtn = document.getElementById("completeBtn")
const inputName = document.getElementById("input-name")
const payBtn = document.getElementById("pay-btn")
const thxMsg = document.getElementById("thanks-msg")
let menuIndex = []
let totalPriceArr = []
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
            totalPriceArr.push(menu.price)
            
            const uuid = uuidv4()
            menuIndex.push({
                ...menu,
                 uuid
                 })
            
            shoppingCart.innerHTML += `
                <div class="addToOrder">
                    <div>
                    <div class="orderItem"><span>${menu.name}</span></div>
                        <button class="removeBtn" data-removebtn="${uuid}">remove</button>
                    </div>
                    <div>
                        <div>$${menu.price}</div>
                    </div>
                </div>
            `
        } if (shoppingCart.innerHTML) {
            finishOrder.innerHTML = `
                <div>
                    <p class="spanPrice">Total Price: </p>
                    <p class="spanPrice">$${totalPrice}</p>
                </div>
                <button class="completeBtn" data-completebtn="${menu.uuid}">Complete order</button>
            `
            yourOrder.innerHTML = `
                <p>Your Order</p>
            `
        }
    })
}

function handleRemoveClick(orderid){
    
    shoppingCart.innerHTML = ``
    finishOrder.innerHTML = ``
    yourOrder.innerHTML = ``
    
    menuIndex = menuIndex.filter(function(menu){
        return menu.uuid !== orderid 
    })
    menuIndex.forEach( menu => {
        
        totalPriceArr.reduce((total, num) => total + num, 0) 
        
        totalPriceArr -= menu.price
        
        shoppingCart.innerHTML += `
             <div class="addToOrder">
                <div>
                    <div class="orderItem"><span>${menu.name}</span></div>
                    <button class="removeBtn" data-removebtn="${menu.uuid}">remove</button>
                </div>
                <div>
                    <div>$${menu.price}</div>
                </div>
             </div>
        `
        if (shoppingCart.innerHTML) {
            finishOrder.innerHTML = `
                <div>
                    <p class="spanPrice">Total Price: </p>
                    <p class="spanPrice">$${totalPrice}</p>
                </div>
                <button class="completeBtn" data-completebtn="${menu.uuid}">Complete order</button>
            `
            yourOrder.innerHTML = `
                <p>Your Order</p>
            `
        }
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
    thxMsg.style.display = "block"
    thxMsg.innerHTML = `
    <p>Thanks ${inputName.value}! Your order is on its way.</p>
    `
})

const menuFeed = menuArray.map(function(menu){
//   const {name, ingredients, price, emoji, uuid} = menuArray
    return`
        <div class="menuCard" id="menuCard">
            <div class="item-details">
            
                <div>
                    <div class="emoji"> ${menu.emoji} </div>
                </div>
                
                <div class="info">
                    <div class="name"> ${menu.name} </div>
                    <div class="ingredients"> ${menu.ingredients} </div>
                    <div class="price"> $${menu.price} </div>
                </div>
                
                <div>
                    <button class="buyBtn" id="buyBtn" data-btn="${menu.uuid}">+</button
                </div>
            </div>
        </div>
    `
}).join("")

function render() {
    document.getElementById("menu").innerHTML = menuFeed
}

render()