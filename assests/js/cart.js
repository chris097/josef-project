const addCart = document.getElementsByClassName('add-to-cart') 
const shoppingCart = document.getElementsByClassName('shopping-cart')
document.addEventListener("DOMContentLoaded", getFromLS)
    // console.log(removeCartItemsButton)
// console.log(removeCartItemsButton)
    const removeCartItemsButton = document.getElementsByClassName('remove-item')
    for (let i = 0; i < removeCartItemsButton.length; i++) {
        const button = removeCartItemsButton[i];
        button.addEventListener('click', removeCartButton)
        updateCartTotal()
    }

    const qualityInput = document.getElementsByClassName('quality-cart')
    for (let i = 0; i < qualityInput.length; i++) {
        const input = qualityInput[i];
        input.addEventListener('change', qualityChange)
    }

    function removeCartButton (event) {
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function qualityChange (event) {
        const input = event.target
        if(isNaN(input.value) || input.value <= 0){
            input.value = 1
        }
        updateCartTotal()
    }

    function updateCartTotal (){
        const cardContainer = document.getElementsByClassName('shopping-items')[0]
        const shoppingContent = cardContainer.getElementsByClassName('shopping-content')
        let total = 0;     
        console.log(shoppingContent)
        for (let i = 0; i < shoppingContent.length; i++) {
            const cardRow = shoppingContent[i];
            const priceElement = cardRow.getElementsByClassName('cart-price')[0]
            const qualityElement = cardRow.getElementsByClassName('quality-cart')[0]
            // console.log(priceElement, qualityElement)
            const price = parseFloat(priceElement.innerText.replace("$", ""))
            const quality = qualityElement.value
            console.log(price, quality)
            total = total + (price * quality)
            console.log(total)
        }
        total = Math.round(total * 100) / 100
        const res = document.getElementsByClassName('cart-total')[0].innerText = '$' + total
        console.log(res)
    } 
    
// Add Items to cart box
// Loop
for (let i = 0; i < addCart.length; i++) {
    const button = addCart[i];
    // console.log(button)
    button.addEventListener('click', addCartClicked)
    // button.addEventListener('DOMContentLoaded', getItemsFromLS)
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
    updateCartTotal()
    // addToLocalStorage(title, price, images) 
}

// Update Cart Item

function addToCart(title, images, price){
        const cartRow = document.createElement('div')
        cartRow.classList.add('shopping-content')
        const shoppingItems = document.getElementsByClassName('shopping-items')[0]
        // console.log(shoppingItems)
        // console.log(shoppingItems)
        const cartTitle = shoppingItems.getElementsByClassName('title')
        // console.log(cartTitle)
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
            <img src=${images} alt="" class="cart-img">
            <span class="title">${title}</span>
        </div>
        <div class="price">
            <p class="fnsz13 cart-price">${price}</p>
        </div>
        <div class="quality">
            <input class="quality-cart" type="number" id="" value="1">
                <span class="remove-item">
                   <button type="button">Remove</button>
                </span>
        </div>
                                
        `
        cartRow.innerHTML = html
        shoppingItems.append(cartRow) 
        cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartButton)
        cartRow.getElementsByClassName('quality-cart')[0].addEventListener('change', qualityChange)

        saveToLS(html)
}
function saveToLS(html){
    let items = getItemLS()

    items.push(html)

    localStorage.setItem('Items', JSON.stringify(items))
}

function getItemLS (){
    let items;

    if(localStorage.getItem('Items')=== null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('Items'))
    }
    return items;
}

function getFromLS(){
    let items = getItemLS()
    
    // const cartRow = document.createElement('div')
    // cartRow.classList.add('shopping-content')
    // const shoppingItems = document.getElementsByClassName('shopping-items')[0]
    // cartRow.innerHTML= [items]
    // shoppingItems.append(cartRow)
    
    // updateCartTotal()
    items.map(item => {
        const cartRow = document.createElement('div')
        cartRow.classList.add('shopping-content')
        const shoppingItems = document.getElementsByClassName('shopping-items')[0]
        cartRow.innerHTML= [item]
        shoppingItems.append(cartRow)
        cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartButton)
        document.getElementsByClassName('cart-logout')[0].addEventListener('click', e => {
            localStorage.clear(item)
        })
        

        const qualityInput = document.getElementsByClassName('quality-cart')
        for (let i = 0; i < qualityInput.length; i++) {
            const input = qualityInput[i];
            input.addEventListener('change', qualityChange)
        }
        updateCartTotal()
    })
}










