const buttonElement = document.querySelector('button')
 function addCSS(){
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value
    console.log(css)
    const foreFront = document.querySelector('#forefront')
    foreFront.style.cssText = css
    
 }

buttonElement.addEventListener('click', addCSS)