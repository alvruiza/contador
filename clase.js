const nacionalidades = ["mexicano", "argentino", "chileno", "mexicano", "peruano", "peruano", "chileno", "mexicano", "chileno", "argentino", "chileno"];

function cuenta() {

mex = nacionalidades.filter (element => element === "mexicano")
mex = "Mexicanos: " + " " + mex.length
arg = nacionalidades.filter (element => element === "argentino")
arg = "Argentinos: " + " " + arg.length
per = nacionalidades.filter (element => element === "peruano")
per = "Peruanos: " + " " + per.length
chi = nacionalidades.filter (element => element === "chileno")
chi = "Chilenos: " + " " + chi.length

console.log(mex, arg, per,chi)

}

cuenta()