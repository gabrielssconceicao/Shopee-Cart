
async function addItem(userCart,item) {
  userCart.push(item)
}

async function deleteItem(userCart, name) {}

async function removeItem(userCart, index) {}

async function calculateTotaL(userCart) {
  return userCart.reduce((total,item)=> total + item.subtotal(),0)
}

export {addItem,deleteItem,removeItem,calculateTotaL}