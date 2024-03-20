function verificarNombreElegante(amigos) {
    let nombresElegantes = [];
    for (let i = 0; i < amigos.length; i++) {
        if (NomElegant(amigos[i])) {
            nombresElegantes.push(amigos[i]);
        }
    }
    return nombresElegantes;
}

function NomElegant(nombre) {
    nombre = nombre.toLowerCase();
    
    if (nombre.charAt(0) === nombre.charAt(nombre.length - 1)) {
        console.log(nombre,":\n Es elegante")
        return true;
    } else {
        console.log( nombre, "\n No es elegante")
        return false;
    }
}


let amigos =  ["Ana", "Leonel","gabriel", "María", "Sandra", "Alberto", "Alicia"];
let nombresElegantes = verificarNombreElegante(amigos);