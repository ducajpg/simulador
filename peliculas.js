

// 

function bienvenidx(){
    let nombre = prompt("Ingrese nombre")
    alert("Bienvenidx al Club del VHS, "+ nombre)
}


function peliculaRandom (genero){
    let x;
    switch(genero) {
        case "terror":
            x = "Get Out: Un joven va por primera vez a la casa de sus futuros suegros, una serie de descubrimientos hacen ese encuentro inquietante";
            break;
        case "comedia":
            x = "The big Lebowski: Todo empieza cuando el protagonista, un tipo común es confundido por un multi millonario";
            break;
        case "sci-fi":
            x = "Doce monos: Ocurre en un futuro post-apocalíptico, año 2035";
            break;
        case "suspenso":
            x = "Promising young woman: Cassie vive una doble vida hasta que un encuentro inesperado le da la oportunidad de corregir errores del pasado";
            break;
    default:
        x = "Podes probar con: terror, comedia, sci-fi o crimen";
    }
    return x;
}
bienvenidx();
let genero = prompt("Qué genero de pelicula querés ver?  \n ingrese % para salir");
while (genero != "&"){
    resultado = peliculaRandom(genero);
    alert("Tu peli random del día es: " + resultado)
    genero = prompt("Qué genero de pelicula querés ver?  \n ingrese % para salir");
}
