function mostrar(id) {

  // Ocultar las secciones

  document.querySelectorAll('.grid-section').forEach(sec => {
    sec.style.display = 'none';
    sec.classList.remove('visible');

  });

  // Mostrar solo la que se pidió

  const seccion = document.getElementById(id);
  if (seccion) {

    seccion.style.display = 'block';
    void seccion.offsetWidth; // forzar reflow para que la animación se dispare
    seccion.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // volver arriba con un efecto de scroll

  }
}

//==============DICCIONARIOS============

const indiceEjercicios = {

    //=================TREN INFERIOR===============

    indicesCuadriceps : {

        sentadillaLibre: {
            titulo: "Sentadilla libre",
            descripcion: "4 series x 12 repeticiones (Descanso: 3 min).",
            tips: [
                "Bajar mínimo hasta 90°.",
                "Llegar al fallo muscular en la última serie."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        sentadillaSmith: {
            titulo: "Sentadilla Smith",
            descripcion: "2 series x 20 repeticiones + 4 series x 10 repeticiones (Descanso: 2-3 min).",
            tips: [
                "Mantener la espalda recta.",
                "Controlar el descenso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        prensa45: {
            titulo: "Prensa 45°",
            descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",
            tips: [
                "Pies en posición media.",
                "Bajar profundo sin despegar la espalda."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        extensionRodillas: {
            titulo: "Extensión de rodillas",
            descripcion: "2 series x 20 repeticiones + 5 series x 12 repeticiones (Descanso: 2 min).",
            tips: [
                "Realizar una contracción de 2 segundos arriba.",
                "Controlar el descenso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        zancadas: {
            titulo: "Zancadas con barra",
            descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",
            tips: [
                "Mantener el torso erguido.",
                "La rodilla delantera no debe superar la punta del pie."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        lungesBulgaros: {
            titulo: "Lunges búlgaros",
            descripcion: "4 series x 12 repeticiones por pierna (Descanso: 2 min).",
            tips: [
                "Apoyar el pie trasero en un banco.",
                "Llegar al fallo muscular en la última serie."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        sentadillaSumo: {
            titulo: "Sentadilla sumo con mancuerna",
            descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",
            tips: [
                "Pies bien abiertos y puntas hacia afuera.",
                "Bajar mínimo hasta 90°."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        saltossentadilla: {
            titulo: "Saltos de sentadilla",
            descripcion: "4 series al fallo (Descanso: 2 min).",
            tips: [
                "Aterrizar suavemente con las rodillas semiflexionadas.",
                "Mantener el core activo."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    indicesFemoral : {

        pesoMuertoBarra: {
            titulo: "Peso muerto con barra",
            descripcion: "4 series x 8-12 repeticiones (Descanso: 3 min).",
            tips: [
                "Mantener la espalda neutra durante todo el movimiento.",
                "Empujar el suelo, no tirar de la barra."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        pesoMuertoUnilateral: {
            titulo: "Peso muerto unilateral en banco",
            descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).",
            tips: [
                "Mantener la cadera nivelada.",
                "Controlar el movimiento de bajada."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        curlAcostado: {
            titulo: "Curl acostado (femoral)",
            descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",
            tips: [
                "Contraer el glúteo durante el movimiento.",
                "No balancear las caderas."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    indicesGluteos : {

        hipThrust: {
            titulo: "Hip thrust",
            descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",
            tips: [
                "Apretar los glúteos al máximo arriba.",
                "Mantener la barbilla pegada al pecho."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        gluteoPatada: {
            titulo: "Glúteo patada en máquina",
            descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).",
            tips: [
                "Contraer el glúteo en el punto más alto.",
                "Movimiento controlado."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        gluteoMaquinaLumbar: {
            titulo: "Glúteo en máquina lumbar",
            descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",
            tips: [
                "Ajustar bien el pad a la altura del glúteo.",
                "No usar impulso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        puentePelvisBarra: {
            titulo: "Puente de pelvis con barra",
            descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",
            tips: [
                "Apoyar la barra sobre las caderas con protección.",
                "Subir hasta que las caderas queden alineadas con el torso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        puentePelvisMaquina: {
            titulo: "Puente de pelvis en máquina",
            descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",
            tips: [
                "Controlar el descenso.",
                "Pausa de 1 segundo en la contracción."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        jalonInvertido: {
            titulo: "Jalón invertido polea baja",
            descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",
            tips: [
                "Mantener el core activo.",
                "Controlar el movimiento."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        aductor: {
            titulo: "Aductor en máquina",
            descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Movimiento lento y controlado.",
                "No dejar caer el peso bruscamente."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        abductor: {
            titulo: "Abductor en máquina",
            descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Abrir hasta el rango máximo cómodo.",
                "Mantener la espalda apoyada."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    // ===================== TREN SUPERIOR =====================

    indicesDorsal : {

        jalonAltoCerrado: {
            titulo: "Jalón alto agarre cerrado",
            descripcion: "4 series x 12-25 repeticiones (Descanso: 2 min).",
            tips: [
                "Llevar la barra hasta la parte alta del pecho.",
                "Codos hacia abajo y atrás."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        jalonSentadoPolea: {
            titulo: "Jalón sentado polea baja",
            descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",
            tips: [
                "Tirar con los codos, no con las manos.",
                "Mantener el torso ligeramente inclinado hacia atrás."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        jalonMaquinaHammer: {
            titulo: "Jalón máquina Hammer agarre neutro",
            descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",
            tips: [
                "Agarre neutro para mayor activación de espalda.",
                "Contraer la espalda al final del movimiento."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        remoMancuerna: {
            titulo: "Remo con mancuerna",
            descripcion: "4 series x 15 repeticiones por brazo (Descanso: 2 min).",
            tips: [
                "Apoyar la rodilla y la mano en el banco.",
                "Subir el codo lo más alto posible."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        polichilenos: {
            titulo: "Polichilenos",
            descripcion: "4 series x 25 repeticiones (Descanso: 1 min).",
            tips: [
                "Movimiento explosivo.",
                "Mantener el ritmo constante."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        jalonPieBrazos: {
            titulo: "Jalón de pie brazos extendidos polea",
            descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",
            tips: [
                "Mantener los brazos casi extendidos durante el movimiento.",
                "Contraer la espalda al bajar la barra."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        bancoLumbar: {
            titulo: "Banco lumbar",
            descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",
            tips: [
                "Bajar controlado hasta aproximadamente 90°.",
                "No hiperextender en la subida."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    indicesPectoral : {

        pressAltoBarra: {
            titulo: "Press alto con barra",
            descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",
            tips: [
                "Agarre ligeramente más ancho que los hombros.",
                "Bajar la barra de forma controlada hasta el pecho."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        aperturasMancuernas: {
            titulo: "Aperturas con mancuernas plano",
            descripcion: "4 series x 10 repeticiones (Descanso: 2 min).",
            tips: [
                "Ligera flexión en los codos durante todo el movimiento.",
                "Sentir el estiramiento en el pecho en la bajada."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        burpees: {
            titulo: "Burpees",
            descripcion: "4 series x 10 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Movimiento fluido y continuo.",
                "Saltar con los brazos extendidos arriba."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    indicesHombros : {

        elevacionLateral: {
            titulo: "Elevación lateral con mancuernas",
            descripcion: "4 series x 25 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Levantar hasta la altura del hombro.",
                "Ligera inclinación hacia adelante del torso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        elevacionFrontal: {
            titulo: "Elevación frontal con mancuernas",
            descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Subir hasta la altura de los ojos.",
                "No usar impulso del torso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        pressMilitarMaquina: {
            titulo: "Press militar en máquina",
            descripcion: "4 series x 12-15 repeticiones (Descanso: 2 min).",
            tips: [
                "Asiento a la altura correcta para que los codos queden a 90°.",
                "No bloquear los codos arriba del todo."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        pressMilitarMancuernas: {
            titulo: "Press militar con mancuernas",
            descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",
            tips: [
                "Codos a 90° en el punto de inicio.",
                "Mantener el core activo para proteger la zona lumbar."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        pecdekInvertido: {
            titulo: "Pecdek invertido",
            descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",
            tips: [
                "Ajustar los brazos a la altura de los hombros.",
                "Contraer los deltoides posteriores en el punto final."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    indicesBiceps : {

        curlBarraPolea: {
            titulo: "Curl barra en polea baja",
            descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Codos pegados al cuerpo.",
                "Contracción completa arriba."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        curlMartillo: {
            titulo: "Curl con mancuernas martillo",
            descripcion: "4 series x 12 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Agarre neutro (pulgares hacia arriba).",
                "No balancear el torso."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        curlPieBarra: {
            titulo: "Curl de pie con barra",
            descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",
            tips: [
                "Codos fijos a los costados.",
                "Bajar de forma controlada."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        curlPieMancuernas: {
            titulo: "Curl de pie con mancuernas",
            descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Alternar brazos o trabajar simultáneamente.",
                "Girar la muñeca en la subida (supinación)."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        curlPiePoleaBaja: {
            titulo: "Curl de pie polea baja",
            descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Tensión constante gracias a la polea.",
                "Codos fijos, solo mover el antebrazo."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    },

    indicesTriceps : {

        extensionPoleaSoga: {
            titulo: "Extensión polea alta soga",
            descripcion: "3 series x 20 repeticiones (Descanso: 1-2 min).",
            tips: [
                "Separar la soga al final del movimiento.",
                "Codos fijos y pegados al cuerpo."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

        patadaMulaMancuerna: {
            titulo: "Patada de mula con mancuerna",
            descripcion: "3 series x 15 repeticiones por brazo (Descanso: 1-2 min).",
            tips: [
                "Codo fijo a 90° en el inicio.",
                "Extender completamente el brazo atrás."
            ],
            video: "https://youtu.be/MnQ6MsoPHks",
            link: "https://youtu.be/MnQ6MsoPHks"
        },

    }

}

function abrirModal(id) {

    let e = null;
    for (const grupo of Object.values(indiceEjercicios)) {
        if (id in grupo) { e = grupo[id]; break; }
    }

    if (!e) return;

    document.getElementById("modal-titulo").textContent = e.titulo;
    document.getElementById("modal-descripcion").textContent = e.descripcion;

    let listaTips = '<ul class="modal-tips">';
    e.tips.forEach(tip => { listaTips += `<li>${tip}</li>`; });
    listaTips += '</ul>';

    document.getElementById('modal-tips').innerHTML = listaTips;

    const embedUrl = e.video.replace("https://youtu.be/", "https://www.youtube.com/embed/");
    document.getElementById("modal-iframe").src = embedUrl;
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

//Cambiar el número de dias de rutinas.html

let numDiasActual = 3;

function cambiarDias(valor) {
  numDiasActual = Math.min(7, Math.max(1, numDiasActual + valor));
  document.getElementById('numDias').textContent = numDiasActual;
}



function crearSelect(contenedor, opciones) {

  const select = document.createElement('select')

  // Opción vacía por defecto
  const opcionVacia = document.createElement('option')
  opcionVacia.textContent = '-- Selecciona --'
  opcionVacia.value = ''
  select.appendChild(opcionVacia)

  opciones.forEach(opcion => {
    const elemento = document.createElement('option')
    elemento.value = opcion
    elemento.textContent = opcion
    select.appendChild(elemento)
  })

  contenedor.appendChild(select)

  return select

}

function añadirDia() {
  const contenedor = document.getElementById('contenedor-dias')
  if (contenedor.children.length >= 7) return

  const divDia = document.createElement('div')
  divDia.className = 'dia-bloque'
  contenedor.appendChild(divDia)

  // Select de días
  const selectDia = crearSelect(divDia, diasNombres)

  // Al elegir día → aparece select de parte del cuerpo
  selectDia.addEventListener('change', () => {
    const selectCuerpo = crearSelect(divDia, Object.keys(ejerciciosPorGrupo))

    // Al elegir parte del cuerpo → aparece select de ejercicios
    selectCuerpo.addEventListener('change', () => {
      const ejercicios = Object.keys(ejerciciosPorGrupo[selectCuerpo.value])
      const selectEjercicio = crearSelect(divDia, ejercicios)

      // Al elegir ejercicio → aparece select de repeticiones
      selectEjercicio.addEventListener('change', () => {
        const reps = ['3x8', '3x10', '3x12', '4x8', '4x10', '4x12', '4x15', '5x8', '5x10', '5x12']
        crearSelect(divDia, reps)
      })
    })
  })
}