import * as cartService from './service/cart.js';
import createItem from './service/item.js';


const cart = []
const whishlist = []

console.log("Welcome to your Shopee-Cart!");

const item1 = await createItem("Hotwheels Ferrari",20.99,1)
const item2 = await createItem("Hotwheels Lamborghini",39.99,3)
await cartService.addItem(cart,item1)
await cartService.addItem(cart,item2)


console.log(item1.subtotal())
console.log(await cartService.calculateTotaL(cart))