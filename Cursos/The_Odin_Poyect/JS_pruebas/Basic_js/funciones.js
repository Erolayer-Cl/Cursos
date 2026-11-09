function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

const message = favoriteAnimal('Goat')
console.log(message)

function saludar(nombre) {
    return "Hola " + nombre + " es un gusto"
}
console.log(saludar("Juan"));

//funcion anonima

const suma = function (){
    return 2 + 2
}
console.log(suma())

//funcion flecha

boton.addEventListener("click", function () {
  console.log("me clickearon");
});

boton.addEventListener("click", () => {
  console.log("me clickearon");
});

n => n * 2        // devuelve n * 2 (correcto, expresión implícita)
n => { n * 2 }    // NO devuelve nada — undefined

const doble = (n) => { return n * 2 } 
console.log(doble(4))
