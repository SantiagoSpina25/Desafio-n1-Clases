

class Usuario{

    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log( ` ${this.nombre} ${this.apellido}`) 
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
        console.log(`Se añadio ${mascota} a la lista de mascotas`)
    }

    countMascotas(){
        console.log(`El usuario tiene ${this.mascotas.length} mascotas`)
    }

    addBook(libro){
        this.libros.push(libro)
        console.log(`Se añadio ${libro.titulo} a la lista de libros`)
    }

    getBookNames(){
        let nombresLibros = this.libros.map((libro)=>libro.titulo)
        console.log(nombresLibros)
    }

}

let libro1 = {
    titulo: "Padre rico padre pobre",
    autor: "Robert Kiyosaki y Sharon Lechter",
}

let libro2 = {
    titulo: "Eloquent JavaScript",
    autor: "Marijn Haverbeke",
}

let usuario1 = new Usuario("Santiago", "Spina",[libro1], ["perro"])


// EJEMPLO -->

// console.log(usuario1)

// usuario1.getFullName()

// usuario1.addMascota("perro2")
// usuario1.addMascota("gato")

// usuario1.countMascotas()

// usuario1.addBook(libro2)

// usuario1.getBookNames()