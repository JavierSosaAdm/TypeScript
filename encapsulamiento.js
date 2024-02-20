"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el tiket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Josefina de la Encina');
sorteo.setTicket(25);
let sorteo2 = new Sorteo('Josefina de la Encina');
sorteo2.setTicket('25 de Julio');
console.log(sorteo2.sortear());
