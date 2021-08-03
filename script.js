//             ·············· Ejercicios de DOM ··············


//     *********Ejercicio 0 *********
// En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
/* 
<span>Uno</span>
<p class="guayerd"> Setenta </p>
<span class="guayerd"> Cinco </span>
<span> Dos </span>
<span> Test </span>
<span class="guayerd"> Cuatro </span>
<span id="hola"> Tres </span>
<p>Diez</p> */


// a) El primer span
// console.log(document.querySelector("span").innerHTML)


// b) El primer span con clase “guayerd”
// console.log( document.querySelector(".guayerd").innerText)

// c) El span con id “hola”
// console.log( document.querySelector("#hola").innerText)

// d) Todos los span
// document.querySelectorAll("span").forEach(e => console.log(e.innerText) )

// e) Todos los elementos con clase “guayerd”
// document.querySelectorAll(".guayerd").forEach(e => console.log(e.innerText))

// f) Todos los span con clase “guayerd”.
// document.querySelectorAll("span.guayerd").forEach(e => console.log(e.innerText))

// g) Todos los span y párrafos.
// document.querySelectorAll("span, p").forEach(e => console.log(e.innerText) )



//     *********Ejercicio 1 *********
// Hacer un HTML nuevo con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.

// a) Al ID azul cambiarle el texto por “Azul”.
// document.querySelector("#azul").innerHTML = "Azul";

// b) Al primer párrafo cambiarle el texto por “Verde”.
// document.querySelector("p").innerText = "Verde"

// c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
// document.querySelectorAll(".rojo").forEach(e => e.innerText = "Rojo")

// d) A todos los párrafos agregarles un “!” al final del texto. 
// document.querySelectorAll("p").forEach( e => e.innerText += "!" )

// e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.
// document.querySelectorAll("h1, p").forEach( e => e.innerText = "*" + e.innerText)




//     *********Ejercicio 2 *********
// Crear una función flecha que en base a 2 datos de temperatura, indique la temperatura media (Es decir, el promedio de ambas). Mostrar el resultado con un mensaje en el HTML. Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 

// let tempMedia = (min, max) => (min + max) / 2
// document.querySelector("#temperatura").innerText = `La temperatura media es ${tempMedia(10, 20)}` 




//     *********Ejercicio 3 *********
// Crear una función flecha que solicite al usuario que elija entre las estaciones del año (Invierno, verano, primavera, otoño) y mostrar una imagen que haga referencia a la estación elegida.

// CON CONDICIONAL TERNARIO:
// let estacion = prompt("¿Cuál es su estación favorita?").toLowerCase();

// const fotoEstacion = season => season === "verano" ?
//                                document.querySelector("img").src = "verano.jpg"
//                                : season === "primavera" ?
//                                document.querySelector("img").src = "primavera.jpg"
//                                : season === "otoño" ?
//                                document.querySelector("img").src = "otoño.jpg"
//                                : season === "invierno" ?
//                                document.querySelector("img").src = "invierno.jpg"
//                                : alert("Ingrese una opcion valida")

// fotoEstacion(estacion)

// OTRA ALTERNATIVA:
// let estacion = prompt("Ingrese el nombre de una estación:").toLowerCase();
// const fotoEstacion = season => document.querySelector("img").src = `${season}.jpg`
// fotoEstacion(estacion)





//     *********Ejercicio 4 *********
// Crear una función flecha que calcule la edad del usuario. Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.
// const anioActual = 2021;
// let fechaNac = parseInt( prompt("Ingrese el año en que nació usando 4 dígitos:") );
// const calcularEdad = nacimiento => anioActual - nacimiento 

// calcularEdad(fechaNac) >= 18 ? document.querySelector("#validarEdad").innerText = "Usted es mayor de edad" : document.querySelector("#validarEdad").innerText = "Usted es menor de edad"





//     *********Ejercicio 5 *********
// Crear una función flecha que solicite al usuario su nombre y su animal favorito (Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y mostrando una foto de su animal favorito. 
// let nombre = prompt("¿Como te llamas?");
// let animal = prompt("¿Qué animal te gusta más de esta lista? \n Elefante \n Gato \n Perro \n Humano").toLowerCase();

// const mensaje = () => {
//     document.querySelector("#msjAnimal").innerText = `Hola ${nombre}! Aquí tienes una foto!`;
//     document.querySelector("img").src = `${animal}.jpg`;    
// }
// mensaje(nombre, animal)

// CON FUNCION TRADICIONAL:
// function mensaje() {
//     document.querySelector("#msjAnimal").innerText = `Hola ${nombre}`;
//     document.querySelector("img").src = `${animal}.jpg`;
// }




//     *********Ejercicio 6 *********
// Crear en el HTML un span con un ángulo del 0 al 360. Luego calcular su opuesto y mostrarlo en otro span. (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) El mensaje debería ser:
// Ángulo: 90
// Opuesto: 270

// let angulo = parseInt( prompt("Ingrese el valor de un ángulo entre 0 y 360 grados:"));

// document.querySelector("#angulo").innerText = `El valor del ángulo es de ${angulo}`
// document.querySelector("#opuesto").innerText = `El valor de su opuesto es de ${360 - angulo}`




//     *********Ejercicio 7 *********
// Generación de mails empresariales. Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no. Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
// nombre.apellido@empresa.com(.ar si es argentina).

// let nombre = prompt("¿Cuál es su nombre?");
// let apellido = prompt("¿Cuál es su apellido?");
// let empresa = prompt("¿Cuál es el nombre de su empresa?");
// let nacional = confirm("¿Su empresa es argentina?");

// const generadorEmail = () => (nacional) ? document.querySelector("#email").innerText = `Su nueva dirección de correo-e es ${nombre}.${apellido}@${empresa}.com.ar` : document.querySelector("#email").innerText = `Su nueva dirección de correo-e es ${nombre}.${apellido}@${empresa}.com`

// generadorEmail()




//     *********Ejercicio 8 *********
// En un restaurante tienen menú del día según el día de la semana.

// a) Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por HTML el menú con el nombre del plato y una imagen del mismo.

// Lunes: Milanesas con puré 
// Martes: Fideos con salsa
// Miércoles: Pizza
// Jueves: Hamburguesas con papas fritas
// Viernes: Pastel de papa

// let dia = prompt("Ingrese el día de la semana (lunes-viernes)").toLowerCase();

// const selectorMenu = () => {
//     if (dia === "lunes") {
//         document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es ''Milanesas con puré'`
//         document.querySelector("#comida").src = "milanesas.jpg"
//     } else if (dia === "martes") {
//         document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es 'Fideos con salsa'`
//         document.querySelector("#comida").src = "fideos.jpg"
//     } else if (dia === "miercoles") {
//         document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es 'Pizza'`
//         document.querySelector("#comida").src = "pizza.jpg"
//     } else if (dia === "jueves") {
//         document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es 'Hamburguesas con papas fritas'`
//         document.querySelector("#comida").src = "hamburguesa.jpg"
//     } else if (dia === "viernes"){
//         document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es 'Pastel de papa'`
//         document.querySelector("#comida").src = "pastel.jpg"
//     } else {
//         alert("Ingrese un día válido")
//     }
// }

// selectorMenu(dia)





// b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde javascript.

// Milanesas con puré ($300)
// Fideos con salsa ($250)
// Pizza ($400)
// Hamburguesas con papas fritas ($430)
// Pastel de papa  ($280)

const milanesas = "300";
const fideos = "250";
const pizza = "400";
const hamburguesa = "430";
const pastel = "280";

let dia = prompt("Ingrese el día de la semana (lunes-viernes)").toLowerCase();

const selectorMenu = () => {
    if (dia === "lunes") {
        document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es "Milanesas con puré"`
        document.querySelector("#comida").src = "milanesas.jpg"
        document.querySelector("#precio").innerText = `Precio $${milanesas}`
    } else if (dia === "martes") {
        document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es "Fideos con salsa"`
        document.querySelector("#comida").src = "fideos.jpg"
        document.querySelector("#precio").innerText = `Precio $${fideos}`
    } else if (dia === "miercoles") {
        document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es "Pizza"`
        document.querySelector("#comida").src = "pizza.jpg"
        document.querySelector("#precio").innerText = `Precio $${pizza}`
    } else if (dia === "jueves") {
        document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es "Hamburguesas con papas fritas"`
        document.querySelector("#comida").src = "hamburguesa.jpg"
        document.querySelector("#precio").innerText = `Precio $${hamburguesa}`
    } else if (dia === "viernes"){
        document.querySelector("#menuCreator").innerText = `El menú del día ${dia} es "Pastel de papa"`
        document.querySelector("#comida").src = "pastel.jpg"
        document.querySelector("#precio").innerText = `Precio $${pastel}`
    } else {
        alert("Ingrese un día válido")
    }
}

selectorMenu(dia)