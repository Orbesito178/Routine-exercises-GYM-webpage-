//Ocultar elementos anteriores y mostrar los que se dan click

function mostrar(id) {

    //Ocultar los 5 ejercicios y su menú "planes"

    document.querySelectorAll("#cuadriceps, #pecho, #femoral, #espalda, #gluteos, #planes-ejercicios").forEach(e => {
        e.style.display = "none"
    });

    document.getElementById(id).style.display = "block"

}

indiceEjercicios = {

    //Cuadriceps

    sentadillaLibre : {
        titulo : "Sentadilla Libre",
        descripcion : "4 series x 8-10 repeticiones (Descanso: 3 min).",
        tips : ["Bajar mínimo hasta 90°.",
                "Llegar al fallo muscular en la última serie."
        ],
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    sentadillaSumo : {
        titulo : "Sentadilla Sumo",
        descripcion : "4 series x 8-10 repeticiones (Descanso: 3 min).",
        tips : ["Bajar mínimo hasta 90°.",
                "Llegar al fallo muscular en la última serie."
        ],
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    prensaPiernas : {
        titulo : "Prensa de piernas",
        descripcion : "4 series x 12-15 repeticiones (Descanso: 2-3 min).",
        tips : ["Pies en posición media y bajar profundo.",
                "Llegar al fallo muscular en la última serie."
        ],
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    extensionCuadriceps : {
        titulo : "Extensión de cuádriceps",
        descripcion : "4 series x 15-20 repeticiones (Descanso: 2 min).",
        tips : ["Realizar una contracción de 2 segundos arriba.",
                "Llegar al fallo muscular en la última serie."
        ],
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    lungesBulgaros : {
        titulo : "Lunges búlgaros",
        descripcion : "3 series x 12 repeticiones por pierna (Descanso: 2 min).",
        tips : ["Llegar al fallo muscular en la última serie."
        ],
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    wallSit : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    //Pecho, hombro y tríceps

    pressBanca : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    pressInclinado : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    pechoBajo : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    elevacionesLaterales : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    pressMilitar : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    hombroPosterior : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    triceps : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    rompeCraneos : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    //Femoral y glúteos

    smith : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    prensaPiernasAbiertas : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    prensaPiernasCerradas : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    abductores : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    hipThrust : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    pesoMuerto : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    crab : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    //Espalda, bíceps y antebrazos

    jalonPecho : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    remo : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    espaldaMaquinaT : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    jalonPechoAgarreCerrado : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    curlBranquial : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    curlBiceps : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    extensionMuñeca : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    extensionMuñecaBarra : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    //Glúteos enfocados

    bulgaras : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    hipThrustBarra : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    abductoresMaquina : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

    sentadillaLibreGluteo : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    },

}

function abrirModal(id) {

    const e = indiceEjercicios[id]
    document.getElementById("modal-titulo").textContent = e.titulo
    document.getElementById("modal-descripcion").textContent = e.descripcion
    
    let listaTips = '<ul class="modal-tips">';

    e.tips.forEach(tip => {
    listaTips += `<li>${tip}</li>`;
    });

    listaTips += '</ul>';

    document.getElementById('modal-tips').innerHTML = listaTips;

    document.getElementById("modal-iframe").src = e.video
    document.getElementById('modal-link').href = e.link;
    document.getElementById("modal").classList.add("activo");
    document.body.style.overflow = "hidden";

}

function cerrarModal(event) {

  if (event && event.target !== document.getElementById("modal")) return;
  document.getElementById("modal-iframe").src = "";
  document.getElementById("modal").classList.remove("activo");
  document.body.style.overflow = '';

}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarModal();
});
