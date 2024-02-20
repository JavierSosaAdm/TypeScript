"use strict";
let Lakers = 11;
let Celtic = 10;
let Kobe = 1;
let juegaKobe = true;
let palabras = 'Me emocioné al verlo a Kobe';
function jugar(equipo1, equipo2, juegaKobe) {
    let motivo = '';
    if (juegaKobe) {
        equipo1 += Kobe;
        motivo = 'Porque juega Kobe';
    }
    if (equipo1 > equipo2)
        console.log(`ganan Los Angeles Lakers ${motivo}`);
    if (equipo1 < equipo2)
        console.log('ganan los Boston Celtic');
    if (equipo1 == equipo2)
        console.log('partido suspendido por quilombo');
}
jugar(Lakers, Celtic, juegaKobe);
