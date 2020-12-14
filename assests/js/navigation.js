import{UIController} from './UI.js';


export function eventController (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();

     const removeLogin = () => {
         UIController(inputBtn.shopLogin, inputBtn.none)
         UIController(inputBtn.zoomOut, inputBtn.none)
         console.log('something was clicked...')
     }

     const displayLogin = () => {
         console.log('something was clicked...')
         UIController(inputBtn.shopLogin, inputBtn.block)
         UIController(inputBtn.zoomOut, inputBtn.block)

     }

     UIController(inputBtn.signIn).addEventListener(inputBtn.click, displayLogin)
     UIController(inputBtn.removeLoginModal).addEventListener(inputBtn.click, removeLogin)
    
 }
