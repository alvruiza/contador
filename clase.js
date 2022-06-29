
// array con los strings que queremos enumerar
const nacionalidades = ["mexicano", "argentino", "chileno", "mexicano", "peruano", "peruano", "chileno", "mexicano", "chileno", "argentino", "chileno"];

/* Función de conteo. Creamos 4 variables para cada una de las nacionalidaes.
Aplicamos el método .filter sobre el array original 
para encontrar las coincidencias de cada palabra, en este caso las nacionalidades.
Cuando encontramos las coincidencias, el método .filter nos devuelve un nuevo array,
sin modificar el original. Por ello, una vez ejecutado, 
re definimos las variables (mex, arg, per y chi)
con un string con la palabra que buscamos + un especio + el método .length para que cuente
la cantidad de palabras encontradas por el método .filter en el nuevo array. Asi logramos
obtener las veces que se repite cada palabra del array nacionalidades */

function cuenta() {

mex = nacionalidades.filter (element => element === "mexicano")
mex = "Mexicanos: " + " " + mex.length
arg = nacionalidades.filter (element => element === "argentino")
arg = "Argentinos: " + " " + arg.length
per = nacionalidades.filter (element => element === "peruano")
per = "Peruanos: " + " " + per.length
chi = nacionalidades.filter (element => element === "chileno")
chi = "Chilenos: " + " " + chi.length

/*  Finalmente le pedimos a la funcion que 
 en loguee en la consola las 4 variables para ver los resultados */

console.log(mex, arg, per,chi)

}

// llamamos a la función creada para ver los resultados en la consola.

cuenta()