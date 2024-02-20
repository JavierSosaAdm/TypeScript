interface Programadora {
    name: string,
    tech: string[],
    tomarCafe: boolean | null
    recibida: boolean | null
}

let dev1: Programadora = {
    name: 'Josefina de la Encina',
    tech: ['Angular', 'C#'],
    tomarCafe: true,
    recibida: true
}

let dev2 = {
    name: 'Evelin Damato',
    tech: [],
    tomarCafe: null,
    recibida: false,
    language: ['English', 'Spanish']
}

function sendCV (programador: Programadora) {
    console.log(`Este CV pertenece a ${programador.name}`)    
}

sendCV(dev1)
