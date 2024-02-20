"use strict";
class Pelicula {
    proyectarCine() {
        console.log(`${this.name} esta siendo proyectada en los mejores cines`);
    }
    constructor(name, protagonistas, actores) {
        this.name = name,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
}
const pelicula1 = new Pelicula('The Wolf of Wall Strit', ['Jordan Belfort', 'Dannie Azoff'], ['Leonardo Di Caprio', 'Jonah Hill', 'Margot Robbie', 'Matthew McConaughey', 'Kyle Chandler', 'Jon Bernthal']);
const pelicula2 = new Pelicula('Hannibal', ['Hannibal Lecter', 'Clarice Starling'], ['Anthony Hopkins', 'Julianne Moore', 'Gary Oldman', 'Ray Liotta']);
pelicula2.proyectarCine();
console.log(pelicula2.protagonistas);
