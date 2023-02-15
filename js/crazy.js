function out(s) {console.log(s)}

let a = 5 ; let b = "HEY"
console.log(a)

console.log("hej " + 5)

console.log(5 + " hej")

console.log("hej " - 5)

out("Jeg er i out " + (4>5))

const c = "hej"
const d = 0
let f
let g = null

if (c > d) {out("c er større end d")}
if (d) out("c er noget")

out(f)
out(g)
if (f) out("jeg er undefined")
if (g) out("jeg er null")

let arr = [5, 5.5, "hej", 5>4, f, g, [1, "array2"], {"erik" : 5}, 0/0]

//arr.forEach(out)
arr.forEach(s => out(typeof s + ": " + s))
out(arr[6].forEach(n => out(n)))