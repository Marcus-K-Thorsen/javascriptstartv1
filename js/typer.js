// Der er 7 (3+2+2) primitive typer i JavaScript

// Der er yderligere 2 typer
// object function

function showTypes(lst) {
    const afTypen = " er af typen: "
    console.log("STARTER Udskrivning")
    for (const obj of lst) {
        if (typeof obj != "undefined") {
            console.log(obj + afTypen + typeof obj)
        } else {
            console.log("Denne variabel er " + obj + " og" + afTypen + typeof obj)
        }

    }
}

const arr = []

const a = 5.5
let b = NaN
const arr2 = [1, 3]
var v
let l


arr.push(a)
arr.push(b)
arr.push(arr2)
arr.push(v)
arr.push(l)
arr.push(0/0)
arr.push(null)
arr.push("tekst")
showTypes(arr)