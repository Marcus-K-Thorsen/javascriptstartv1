// Der er 3 JavaScript keywords der bruges til tildeling af variabel

const a = 5 // skal tildeles en værdi hvis noget er en const og det kan ikke ændres efter
//a = 6
let b = 6 // behøver ikke tildeles en værdi og den værdi kan ændres til noget andet
b = "hej" // før var det typen number nu er det typen string

var c = 5.5 // variabler tildelt med 'var' kan tilgås

console.log(a)

function testScope() {
    let a1 = "jeg er lokal"
    var v1 = "jeg var lokal"
    if (a1<v1) {
        let a2 = "a1 var mindre end v1"
        console.log(a2)
        console.log(b)
        if (3 == 3) {
            let a3 = a1
            var v3 = 3.3
            console.log("3=3")
        }
        // console.log(a3) kan ikke ses her, a3 er ude for scope
        console.log(v3) // kan ses her, v3 er indenfor scope
    }
}


testScope()
//console.log(a2)
//console.log(v1) //nu kan 'var' ikke ses udenfor for functionens block, v1 er ude for scope