"use strict";
let dev1 = {
    name: 'Josefina de la Encina',
    tech: ['Angular', 'C#'],
    tomarCafe: true,
    recibida: true
};
let dev2 = {
    name: 'Evelin Damato',
    tech: [],
    tomarCafe: null,
    recibida: false,
    language: ['English', 'Spanish']
};
function sendCV(programador) {
    console.log(`Este CV pertenece a ${programador.name}`);
}
sendCV(dev1);
