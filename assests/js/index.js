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
            click: "click",
            block: "block",
            none: "none",
            signIn: ".sign-in",
            zoomOut: ".zoom-out",
            shopLogin: ".shop-login",
            removeLoginModal: ".remove-login_modal",
            removeShoppingCart: ".remove-shopping_cart"
        }
      }
    }
 };

function eventController (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();

      let removeLogin = () => {
         UIController(inputBtn.shopLogin, inputBtn.none)
         UIController(inputBtn.zoomOut, inputBtn.none)
         console.log('something was clicked...')
     }

     let displayLogin = () => {
         console.log('something was clicked...')
         UIController(inputBtn.shopLogin, inputBtn.block)
         UIController(inputBtn.zoomOut, inputBtn.block)
     }
     UIController(inputBtn.signIn).addEventListener(inputBtn.click, displayLogin)
     UIController(inputBtn.removeLoginModal).addEventListener(inputBtn.click, removeLogin) 
 }
 
 eventController(createUIClass)
