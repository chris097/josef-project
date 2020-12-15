// 2. store classes && values in our object
// 1. UIController gonna be our helper

// const cart2 = document.querySelector('.cart')
// cart2.addEventListener('click', () => {
//     console.log('click.')
// })
function UIController(className, value){
    let UI = document.querySelector(className);
    if(value){
      UI.style.display = value;
    }
    return UI;
 };

 function createUIClass(){
    return {
      getClass : function(){
        return{
            cart: ".cart",
            click: "click",
            block: "block",
            none: "none",
            menu: ".menu",
            close: ".close",
            navLink: ".nav-link",
            zoomOut: ".zoom-out",
            shopLogin: ".shop-login",
            shoppingCart: ".shopping-cart",
            removeShoppingCart: ".remove-shopping_cart"
        }
      }
    }
 };


 
function cartEvent (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();
     
     const displayShoppingCart =() => {
        UIController(inputBtn.shoppingCart, inputBtn.block)
     }
     const removeShoppingCart =() => {
        UIController(inputBtn.shoppingCart, inputBtn.none)
     }
     const openNav = () => {
        UIController(inputBtn.navLink, inputBtn.block)
        UIController(inputBtn.close, inputBtn.block)
        UIController(inputBtn.menu, inputBtn.none)
    }
     const closeNav = () => {
        UIController(inputBtn.navLink, inputBtn.none)
        UIController(inputBtn.close, inputBtn.none)
        UIController(inputBtn.menu, inputBtn.block)
    }

    UIController(inputBtn.menu).addEventListener(inputBtn.click, openNav)  
    UIController(inputBtn.close).addEventListener(inputBtn.click, closeNav)  
     UIController(inputBtn.cart).addEventListener(inputBtn.click, displayShoppingCart)  
     UIController(inputBtn.removeShoppingCart).addEventListener(inputBtn.click, removeShoppingCart) 
 }

 cartEvent(createUIClass)