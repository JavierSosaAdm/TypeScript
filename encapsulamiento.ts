class Sorteo<T>{
    private ticket?: T;
    
    constructor(
        private nombre: string
    ) {}

    setTicket(ticket: T) {
        this.ticket = ticket
    }

    getTicket() {
        return this.ticket
    }

    public sortear(): string {
        return `Para ${this.nombre} el tiket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<number>('Josefina de la Encina')
sorteo.setTicket(25)
let sorteo2 = new Sorteo<string>('Josefina de la Encina')
sorteo2.setTicket('25 de Julio')
console.log(sorteo2.sortear())
