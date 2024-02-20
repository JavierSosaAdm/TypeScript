let Lakers: number | null | undefined = 11
let Celtic: number = 10
let Kobe: number = 1
let juegaKobe: boolean = true

let palabras: string = 'Me emocioné al verlo a Kobe'

function jugar(equipo1: number, equipo2: number, juegaKobe: boolean):void {
    let motivo: string = ''
    if (juegaKobe) {
        equipo1 += Kobe
        motivo = 'Porque juega Kobe'
    } 
    if (equipo1 > equipo2) console.log(`ganan Los Angeles Lakers ${motivo}`)
    if (equipo1 < equipo2) console.log('ganan los Boston Celtic')
    if (equipo1 == equipo2) console.log('partido suspendido por quilombo');
    
}

jugar(Lakers, Celtic, juegaKobe)

