const natArray = []

let numOfPersons = window.prompt("¿Cuántas personas son?");

let nationality = ""
function input(nation) {
    for (let i = 1; i <= nation; i++) {
        let nat = window.prompt(`Ingrese nacionalidad ${i}.`,`Nac. Válidas: mexicano, chileno, argentino, peruano.`)
        if (typeof nat !== "string") {
            alert("Nacionalidad Invalida")
            i = i -1            
        }else{
            console.log(`${nat} fue agregado al arreglo`)
            nationality = nat 
            natArray.push(nat)           
        }
    }
}

input(numOfPersons)

function count() {

let mex = natArray.filter (element => element === "mexicano")
mex = "Mexicanos: " + " " + mex.length
let arg = natArray.filter (element => element === "argentino")
arg = "Argentinos: " + " " + arg.length
let per = natArray.filter (element => element === "peruano")
per = "Peruanos: " + " " + per.length
let chi = natArray.filter (element => element === "chileno")
chi = "Chilenos: " + " " + chi.length

console.log(chi,mex,per,arg)
alert(`${chi}, ${mex}, ${per}, ${arg}`)

}

count() 

