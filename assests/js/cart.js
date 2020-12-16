const addCart = document.getElementsByClassName('add-to-cart') 
const removeCartItemsButton = document.getElementsByClassName('remove-item')
    // console.log(removeCartItemsButton)
// console.log(removeCartItemsButton)

    for (let i = 0; i < removeCartItemsButton.length; i++) {
        const button = removeCartItemsButton[i];
        button.addEventListener('click', removeCartButton)
    }

    function removeCartButton (event) {
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    }

// Add Items to cart box
// Loop
for (let i = 0; i < addCart.length; i++) {
    const button = addCart[i];
    console.log(button)
    button.addEventListener('click', addCartClicked)
}
// Event handler
function addCartClicked (e) {
    const button = e.target
    const shopItem = button.parentElement.parentElement
    // console.log(shopItem.getElementsByClassName('card-name')[0].innerText)
    const price = shopItem.getElementsByClassName('price')[0].innerText
    const title = shopItem.getElementsByClassName('title')[0].innerText
    const images = shopItem.getElementsByClassName('images')[0].src
    // console.log(title, images, price)
    addToCart(title, images, price)
}
// Update Cart Items
function addToCart(title, images, price){
    const cartRow = document.createElement('div')
    cartRow.classList.add('column')
    const shoppingItems = document.getElementsByClassName('shopping-items')[0]
    console.log(shoppingItems)
    const cartTitle = shoppingItems.getElementsByClassName('title')
    console.log(cartTitle)
    for (let i = 0; i < cartTitle.length; i++) {
        if(cartTitle[i].innerText == title){
            alert('This item is already added to the cart')
            return
        }
    }
    // if(cartTitle === )
    // console.log(shoppingItems)
    const html = `
    <div class="item">
        <img src="${images}" alt="" class="cart-img">
        <p class="title">${title}</p>
        </div>
        <div class="price">
        <p class="fnsz13">${price}</p>
        </div>
        <div class="quality">
        <input type="number" id="" value="2">
        <span class="remove-item">
        <button type="button">Remove</button>
        </span>
    </div>
    `
    cartRow.innerHTML = html
    shoppingItems.append(cartRow) 
    cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartButton)
}


