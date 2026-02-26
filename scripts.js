//Ocultar elementos anteriores y mostrar los que se dan click

function mostrar(id) {

    //Ocultar los 5 ejercicios y su menú "planes"

    document.querySelectorAll("#cuadriceps, #pecho, #femoral, #espalda, #gluteos, #planes-ejercicios")
    array.forEach(e => {
        e.style.display = "none"
    });

    document.getElementById(id).style.display = "block"

}
