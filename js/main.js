// 1- Crea un array con 5 estudiantes y luego mostrarlos en el documento html

// let estudiantes= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// document.write(estudiantes)

// 2- Acceder al array y mostrar en la consola el estudiante que está en el último lugar
// let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")

// let ultimo = estudiante[estudiante.length - 1]
// document.write(ultimo)

// 3- El preceptor se confundió de un nombre por lo que debes cambiarle el nombre al tercer estudiante

// let estudiantes= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// estudiantes[2]="Antonio"
// document.write(estudiantes)

// 4- Se sumo un nuevo integrante al grupo llamado Alberto, debes añadirlo a la lista y mostrarlo

// mediante un alert
// let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// let nuevos = estudiante.push("Alberto")
// document.write(nuevos)
// 5- Ahora, escribe el método que te permita quitar el último ingresante

// let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// let ultimo = estudiante.pop()
// document.write(estudiante, "se elimino a: "+ultimo)

// 6- Vuelvelo a poner pero al inicio de la lista

// let estudiantes= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// estudiantes.unshift("Mia")
// document.write(estudiantes)

// 7- Finalmente se cambia de sección por lo que se lo debe quitar del inicio de la lista

// let estudiante= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
// let ultimo = estudiante.shift()
// document.write(estudiante, "se elimino a: "+ultimo)

// 8- Crea un nuevo array llamado ingresantes2023 que contenga 3 nombres nuevos
// Une el primer array con el segundo, en uno nuevo llamado nuevoAño. Recurriendo a .concat()

let estudiantes= Array( "Pedro" , "Paula" , "Marti", "Lola", "Mia")
let ingresantes2023 = ["Tania","Maxi","Lara","Lucas"]
nuevoAÑO = estudiantes.concat (ingresantes2023);
console.log(nuevoAÑO)

// 9- Ordena a través de un método, alfabéticamente el array nuevoAño

// 10- Crear una lista de artículos para el supermercado de 5 ítems.
// Con el método prompt pedir al usuario que ingrese un artículo para agregar a la lista.
// Si el artículo ya está en la lista (método array.includes()) avisarle al usuario que el artículo ya está
// Si no agregar el artículo a la lista y mostrarle al usuario la lista de todo lo que tiene que comprar.
let articulos=["manzana","shampoo","desodorante","helado","pan"]