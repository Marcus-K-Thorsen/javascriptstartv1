console.log("jeg er i setbackgroundcolor.js")

const inp = document.querySelector(".inpColor")
console.log(inp)

const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

const colpicker = document.querySelector(".colPicker")
console.log(colpicker)

function setBackgroundColor(e) {
    const bdy = document.querySelector("body");
    let col = inp.value
    console.log(col)
    console.log("Dette er 'e', argumentet der blev overført:")
    console.log(e)
    bdy.style.backgroundColor = col
}

function setBackgroundColorPicker(e) {
    const bdy = document.querySelector("body")
    let col = colpicker.value
    console.log(col)
    bdy.style.backgroundColor = col;
}

pbCol.addEventListener('click', setBackgroundColor)
inp.addEventListener("keyup", setBackgroundColor)
colpicker.addEventListener("input", setBackgroundColorPicker)