// 2. store classes && values in our object
// 1. UIController gonna be our helper
export function UIController(className, value){
    let UI = document.querySelector(className);
    if(value){
      UI.style.display = value;
    }
    return UI;
 };