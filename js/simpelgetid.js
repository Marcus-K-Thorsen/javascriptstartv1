const fruits = ["æbler", "pærer", "bananer", 'juice']

function myFunc1(item) {
    let ptag1 = document.getElementById("demo")
    console.log(ptag1)
    ptag1.innerHTML += item + "<br>"
}

function myFunc2(item, index) {
    let ptag2 = document.getElementById("demo")
    ptag2.innerHTML += "<br>" + index + ": " + item
}

//fruits.forEach(myFunc2)
fruits.forEach(item => myFunc2(item, fruits.indexOf(item)))