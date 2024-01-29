let mainText = document.querySelector(".first_scroll")
let mainText2 = document.querySelector(".numbers")
let mainText3 = document.querySelector(".service_title")
let mainText4 = document.querySelector(".buildings")

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value > 386){
        mainText.style.animation="scroll1 2s ease-out forwards"
    }

    else {
        mainText.style.animation="scrollback 2s ease-out forwards"
    }

    if(value > 1616){
        mainText2.style.animation="scroll2 2s ease-in-out forwards"
    }

    else {
        mainText2.style.animation="scrollback2 2s ease-in-out forwards"
    }

    if(value > 1616){
        mainText3.style.animation="scroll3 2s ease-in-out forwards"
    }

    else {
        mainText3.style.animation="scrollback3 2s ease-in-out forwards"
    }

    if(value > 1616){
        mainText4.style.animation="scroll4 2s ease-in-out forwards"
    }

    else {
        mainText4.style.animation="scrollback4 2s ease-in-out forwards"
    }
})