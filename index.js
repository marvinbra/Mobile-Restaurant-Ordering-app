import { menuArray } from "./data";

class Feed {
    constructor(data) {
        Object.assign(this, data)
    }

    getMenuHtml() {
        const {name, ingredients, price, emoji, uuid} = this
        return `
        <div class="menuCard" id="menuCard">
            <div class="item-details">
                <div class="emoji"> ${menu} </div>
            </div>
            <div class="info">
                <div class="name"> ${name} </div>
                <div class="ingredients"> ${ingredients} </div>
                <div class="price"> ${price} </div>
            </div>
            <div>
                <button id="buyBtn" data-btn="${uuid}">+</button
            </div>
        </div>
        `
    }    
}

let menuFeed = new Feed(menuArray[0])

function render() {
    document.getElementById("menu").innerHTML = menuFeed.getMenuHtml()
}

render()