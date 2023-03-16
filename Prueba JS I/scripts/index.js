////EJERCICIO 10
const megaTeacher = {
    name: "Pablo",
    lastname: "Quintana",
    age: 27,
    vegan: false,
    address: {
        street: "Gran Vía",
        number: 73,
        floor: 4
    },
    hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
    height: 1.98
}
/*
1.Escribe una función que acepte un hobbie y lo añada a la lista de hobbies de nuestro megaTeacher.
*/
// const añadirHobbie = function(hobbie) {
// megaTeacher.hobbies.push(hobbie);
// }
// añadirHobbie(prompt("Agrege otro Hobbie:"));
// console.log(megaTeacher.hobbies);

/*
2.Escribe un método introduceMySelf dentro del objeto que devuelva el siguiente string: "Hola, me llamo <name> <lastname>, 
tengo [age] años y vivo en la calle <street>, <number>. Mis hobbies son: <hobbie>, <hobbie>, <hobbie> (etc.)".
*/

// megaTeacher.introduceMySelf = function() {
//     return `Hola, me llamo ${this.name} ${this.lastname}, tengo ${this.age} años y vivo en la calle ${this.address.street}, ${this.address.number}. Mis hobbies son: ${this.hobbies.join(", ")}`;
// }
// console.log(megaTeacher.introduceMySelf());

/*
3.Modifica la primera función: debe aceptar un array de nuevos hobbies, 
y se lo añadirá a los hobbies del objeto hasta que éstos últimos sean 8, no más.
*/

// let arr = ["dancing", "movies", "traveling", "eating", "exercise", "museums"];
// const addHobbies = function(arr){
//     megaTeacher.hobbies.push(...arr);  // use los tres puntos para unir dos arrays
//     megaTeacher.hobbies.splice(megaTeacher.hobbies.length - 2, 8);
// }
// addHobbies(arr);
// console.log(megaTeacher.hobbies);

/*
4.Escribe un método que te permita modificar los datos personales.
*/

// megaTeacher.setPeronInfo = function() {
//     return `hola mi nombre es ${this.name = "daniel"} ${this.lastname= "leon"}, tengo ${this.age=25}. ¿soy vegano? ${this.vegan= false}`
//  }
//  console.log(megaTeacher.setPeronInfo());
/*
5. Escribe un método que te permita modificar la dirección.
 */

// megaTeacher.setDireccion = function() {
//     return `Mi direccion es Calle ${this.address.street = "Nuñez de balboa"}, ${this.address.number=105} piso ${this.address.floor = 6}`
// }
// console.log(megaTeacher.setDireccion());

/*
6.Modifica el metodo anterior para poder añadir una segunda dirección.
 */

// const addDirecciontwo = function() {
//     megaTeacher.addresstwo = {
//         street: "sol",
//         number: 44,
//         floor: 6
//     }
//  }
// addDireccion2(megaTeacher);
// console.log(megaTeacher);

/*
7.Escribe un método que en el array de libros, verifique si un libro existe en el array.
Si existe, imprima el libro en mayusculas. Si no existe agregar a la lista de libros.
*/


// const verificarLibro = function(libro){
//   libro = prompt("ingrese el nombre del libro:");
//   if (megaTeacher.books.includes(libro)) {
//         console.log(`Si esta el libro ${libro.toUpperCase()}`);
//   }else{
//     megaTeacher.books.push(libro);
//     console.log(`No esta el libro. pero se ha agregado a la lista`);
//     console.log(megaTeacher.books);
//   }
// }
// verificarLibro();

/*
8.Escribe una función que te permita añadir películas.
Y si no tiene parámetro de entrada te retorne la película de en medio.
 */

// const addFilms = (add) => {
// add = prompt("Agrege una pelicula:")
// megaTeacher.films.push(add);
// if (megaTeacher.films.includes(undefined)|| megaTeacher.films.includes(null) || megaTeacher.films.includes("")){
//     return megaTeacher.films[1];
// }else{
//     return "Se añadio la pelicula con exito";
// }
//  }
// console.log(addFilms());

