import { v4 as uuidv4 } from 'uuid';

export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕",
        isOrdered: true,
        uuid: uuidv4()
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1,
        isOrdered: true,
        uuid: uuidv4()
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 8,
        emoji: "🍺",
        id: 2,
        isOrdered: true,
        uuid: uuidv4()
    }
]