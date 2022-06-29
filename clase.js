//creamos arra vacío donde irán almacenadas las nacionalidades a contar
const natArray = []


// definimos la variable numOfPersons con un prompt que nos pregunta cuantas personas debemos contar
let numOfPersons = window.prompt("¿Cuántas personas son?");


// creamos una funcion con un loop para que el usuario ingrese las nacionalidades
// a través del prompt se le pide al usuario ingresar las nacinalidades, el prompt indica cuáles son válidas

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

//llamamos a la función para que aparezcan los prompt al cargar el sitio
//input se llama con el valor numOfPersons por lo que el usuario define al principio cuántas nacionalidades se le pedirán
input(numOfPersons)


//creamos una función que utiliza el método .filter en cada variablr para analizar los strings ingresados por el usuario en el array originalmente vacío


function count() {


// .filter nos devuelve un nuevo array en donde sólo se encuentran las coincidencias que estaban en el array natArray
// re definimos las variables a un string más el metodo .length sobre el nuevo array y esto nos entrega finalmente el conteo de coincidencias.    
let mex = natArray.filter (element => element === "mexicano")
mex = "Mexicanos: " + " " + mex.length
let arg = natArray.filter (element => element === "argentino")
arg = "Argentinos: " + " " + arg.length
let per = natArray.filter (element => element === "peruano")
per = "Peruanos: " + " " + per.length
let chi = natArray.filter (element => element === "chileno")
chi = "Chilenos: " + " " + chi.length

// desplegamos en la consola y en un alert las variables redefinidas que ahora ya icorporan el conteo de coincidencias.

console.log(chi,mex,per,arg)
alert(`${chi}, ${mex}, ${per}, ${arg}`)

}

// llamamos a la funcion para que se realice el conteo y se muestren los resultados al usario

count() 

