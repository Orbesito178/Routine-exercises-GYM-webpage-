// ===== FUNCIÓN MOSTRAR SECCIONES =====
function mostrar(id) {
  document.querySelectorAll('.grid-section').forEach(sec => {
    sec.style.display = 'none'
    sec.classList.remove('visible')
  })
  const seccion = document.getElementById(id)
  if (seccion) {
    seccion.style.display = 'block'
    void seccion.offsetWidth
    seccion.classList.add('visible')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// ===== DICCIONARIOS =====
const diasNombres = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const partesCuerpo = {
  'Cuádriceps':  'indicesCuadriceps',
  'Piernas':     'indicesPiernas',
  'Glúteos':     'indicesGluteos',
  'Espalda':     'indicesEspalda',
  'Pectoral':    'indicesPectoral',
  'Hombros':     'indicesHombros',
  'Bíceps':      'indicesBiceps',
  'Tríceps':     'indicesTriceps',
  'Cardio':      'indicesCardio'
}

// Link al html de ejercicios por grupo
const linksGrupo = {
  'indicesCuadriceps': 'ejercicios.html#cuadriceps',
  'indicesPiernas':    'ejercicios.html#piernas',
  'indicesGluteos':    'ejercicios.html#gluteos',
  'indicesEspalda':    'ejercicios.html#espalda',
  'indicesPectoral':   'ejercicios.html#pecho',
  'indicesHombros':    'ejercicios.html#hombros',
  'indicesBiceps':     'ejercicios.html#biceps',
  'indicesTriceps':    'ejercicios.html#triceps',
  'indicesCardio':     'ejercicios.html#cardio'
}

const indiceEjercicios = {
  indicesCuadriceps: {
    sentadillaLibre:    { titulo: "Sentadilla libre",               descripcion: "4 series x 12 repeticiones (Descanso: 3 min).",                                              tips: ["Bajar mínimo hasta 90°.", "Llegar al fallo muscular en la última serie."],                                    video: "https://www.youtube.com/shorts/vuMU7-BKIZA?feature=share", link: "https://www.youtube.com/shorts/vuMU7-BKIZA?feature=share", imagen: "src/sentadilla libre.png" },
    sentadillaSmith:    { titulo: "Sentadilla Smith",               descripcion: "2 series x 20 + 4 series x 10 repeticiones (Descanso: 2-3 min).",                            tips: ["Mantener la espalda recta.", "Controlar el descenso."],                                                       video: "https://www.youtube.com/shorts/rQw8GUzpj1I?feature=share", link: "https://www.youtube.com/shorts/rQw8GUzpj1I?feature=share", imagen: "src/sentadilla smith.jpeg" },
    prensa45:           { titulo: "Prensa 45°",                     descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",                                            tips: ["Pies en posición media.", "Bajar profundo sin despegar la espalda."],                                          video: "https://www.youtube.com/shorts/8gPJfr-2aRM?feature=share", link: "https://www.youtube.com/shorts/8gPJfr-2aRM?feature=share", imagen: "src/prensa 45.jpeg" },
    extensionRodillas:  { titulo: "Extensión de rodillas",          descripcion: "2 series x 20 + 5 series x 12 repeticiones (Descanso: 2 min).",                              tips: ["Realizar una contracción de 2 segundos arriba.", "Controlar el descenso."],                                    video: "https://www.youtube.com/shorts/FtXooCm3wdQ?feature=share", link: "https://www.youtube.com/shorts/FtXooCm3wdQ?feature=share", imagen: "src/extension rodillas.png" },
    zancadasBarra:      { titulo: "Zancadas con barra",             descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",                                              tips: ["Mantener el torso erguido.", "La rodilla delantera no debe superar la punta del pie."],                         video: "https://youtu.be/fPWs1u4KW1A", link: "https://youtu.be/fPWs1u4KW1A", imagen: "src/zancadas barra.jpeg" },
    haka:               { titulo: "Haka",                           descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",                                              tips: ["Mantener el core activo.", "Movimiento controlado."],                                                         video: "https://www.youtube.com/shorts/itmlCUc0P3k?feature=share", link: "https://www.youtube.com/shorts/itmlCUc0P3k?feature=share", imagen: "src/haka.jpeg" },
  },
  indicesPiernas: {
    pesoMuertoBarra:      { titulo: "Peso muerto con barra",              descripcion: "4 series x 8-12 repeticiones (Descanso: 3 min).",          tips: ["Mantener la espalda neutra.", "Empujar el suelo, no tirar de la barra."],                     video: "https://youtu.be/0XL4cZR2Ink", link: "https://youtu.be/0XL4cZR2Ink", imagen: "src/peso muerto barra.png" },
    curlAcostado:         { titulo: "Curl acostado (femoral)",            descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",         tips: ["Contraer el glúteo durante el movimiento.", "No balancear las caderas."],                     video: "https://www.youtube.com/shorts/6JQflLWhKfg?feature=share", link: "https://www.youtube.com/shorts/6JQflLWhKfg?feature=share", imagen: "src/curl acostado.png" },
    zancadasEstaticas:    { titulo: "Zancadas estáticas",                 descripcion: "4 series x 12 repeticiones por pierna (Descanso: 2 min).", tips: ["Mantener el torso erguido.", "La rodilla trasera casi toca el suelo."],                      video: "https://www.youtube.com/shorts/FO5KJzV2qb8?feature=share", link: "https://www.youtube.com/shorts/FO5KJzV2qb8?feature=share", imagen: "src/zancadas estaticas.png" },
    bulgaras:             { titulo: "Búlgaras",                           descripcion: "4 series x 12 repeticiones por pierna (Descanso: 2 min).", tips: ["Apoyar el pie trasero en un banco.", "Llegar al fallo muscular en la última serie."],          video: "https://www.youtube.com/shorts/ba0-WEYVEpk?feature=share", link: "https://www.youtube.com/shorts/ba0-WEYVEpk?feature=share", imagen: "src/bulgaras.jpeg" },
  },
  indicesGluteos: {
    hipThrust:            { titulo: "Hip thrust",                         descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Apretar los glúteos al máximo arriba.", "Mantener la barbilla pegada al pecho."],             video: "https://www.youtube.com/shorts/OSOP3JAApGk?feature=share", link: "https://www.youtube.com/shorts/OSOP3JAApGk?feature=share", imagen: "src/hip thrust.jpeg" },
    gluteoPatada:         { titulo: "Glúteo patada en máquina",           descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).", tips: ["Contraer el glúteo en el punto más alto.", "Movimiento controlado."],                        video: "https://www.youtube.com/shorts/B9Fqo0KqeWc?feature=share", link: "https://www.youtube.com/shorts/B9Fqo0KqeWc?feature=share", imagen: "src/gluteo patada maquina.jpeg" },
    gluteoMaquinaLumbar:  { titulo: "Glúteo en máquina lumbar",           descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Ajustar bien el pad.", "No usar impulso."],                                                   video: "https://www.youtube.com/shorts/vHKx7t3RwUM?feature=share", link: "https://www.youtube.com/shorts/vHKx7t3RwUM?feature=share", imagen: "src/gluteo maquina lumbar.jpeg" },
    puentePelvisBarra:    { titulo: "Puente de pelvis con barra",         descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",            tips: ["Apoyar la barra con protección.", "Subir hasta alinear caderas con torso."],                  video: "https://www.youtube.com/shorts/eecT-JzxxVE?feature=share", link: "https://www.youtube.com/shorts/eecT-JzxxVE?feature=share", imagen: "src/puente pelvis barra.png" },
    puentePelvisMaquina:  { titulo: "Puente de pelvis en máquina",        descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",            tips: ["Controlar el descenso.", "Pausa de 1 segundo en la contracción."],                           video: "https://www.youtube.com/shorts/HCuDBzeh0F8?feature=share", link: "https://www.youtube.com/shorts/HCuDBzeh0F8?feature=share", imagen: "src/puente pelvis maquina.png" },
    jalonInvertido:       { titulo: "Jalón invertido polea baja",         descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Mantener el core activo.", "Controlar el movimiento."],                                       video: "https://www.youtube.com/shorts/QkMZfCtBJm4?feature=share", link: "https://www.youtube.com/shorts/QkMZfCtBJm4?feature=share", imagen: "src/jalon inverido polea baja.png" },
    aductor:              { titulo: "Aductor en máquina",                 descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",          tips: ["Movimiento lento y controlado.", "No dejar caer el peso."],                                   video: "https://www.youtube.com/shorts/76uNT_VMhPI?feature=share", link: "https://www.youtube.com/shorts/76uNT_VMhPI?feature=share", imagen: "src/aductor maquina.jpeg" },
    abductor:             { titulo: "Abductor en máquina",                descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",          tips: ["Abrir hasta el rango máximo cómodo.", "Mantener la espalda apoyada."],                       video: "https://www.youtube.com/shorts/lwiuET0ZKno?feature=share", link: "https://www.youtube.com/shorts/lwiuET0ZKno?feature=share", imagen: "src/abductor maquina.jpeg" },
    sentadillaSumo:       { titulo: "Sentadilla sumo",                    descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",          tips: ["Pies bien abiertos y puntas hacia afuera.", "Bajar mínimo hasta 90°."],                       video: "https://www.youtube.com/shorts/6N38tqZ-6F4?feature=share", link: "https://www.youtube.com/shorts/6N38tqZ-6F4?feature=share", imagen: "src/sentadilla sumo.jpeg" },
    pesoMuertoUnilateral: { titulo: "Peso muerto unilateral en banco",    descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).", tips: ["Mantener la cadera nivelada.", "Controlar el movimiento de bajada."],                        video: "https://www.youtube.com/shorts/FAdf_rGP6rA?feature=share", link: "https://www.youtube.com/shorts/FAdf_rGP6rA?feature=share", imagen: "src/peso muerto unilateral.png" },
  },
  indicesEspalda: {
    jalonAltoCerrado:   { titulo: "Jalón alto al pecho",                  descripcion: "4 series x 12-25 repeticiones (Descanso: 2 min).", tips: ["Llevar la barra hasta el pecho.", "Codos hacia abajo y atrás."],                   video: "https://www.youtube.com/shorts/DXkatWVCmbc?feature=share", link: "https://www.youtube.com/shorts/DXkatWVCmbc?feature=share", imagen: "src/jalon cerrado.png" },
    jalonSentadoPolea:  { titulo: "Jalón sentado polea",                  descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",    tips: ["Tirar con los codos.", "Torso ligeramente inclinado hacia atrás."],               video: "https://www.youtube.com/shorts/iyOM6y5ADAQ?feature=share", link: "https://www.youtube.com/shorts/iyOM6y5ADAQ?feature=share", imagen: "src/remo polea baja.jpeg" },
    jalonMaquinaHammer: { titulo: "Jalón máquina Hammer",                 descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",    tips: ["Agarre neutro para mayor activación.", "Contraer la espalda al final."],          video: "https://youtu.be/9KUgSrLOGvs", link: "https://youtu.be/9KUgSrLOGvs", imagen: "src/jalon maquina hammer.jpeg" },
    remoMancuerna:      { titulo: "Remo con mancuerna",                   descripcion: "4 series x 15 repeticiones por brazo (Descanso: 2 min).", tips: ["Apoyar rodilla y mano en el banco.", "Subir el codo lo más alto posible."],  video: "https://www.youtube.com/shorts/ge0lRNxSMNk?feature=share", link: "https://www.youtube.com/shorts/ge0lRNxSMNk?feature=share", imagen: "src/remo mancuerna.png" },
    bancoLumbar:        { titulo: "Banco lumbar",                         descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",  tips: ["Bajar controlado hasta 90°.", "No hiperextender en la subida."],                  video: "https://www.youtube.com/shorts/5beOj4cx1oc?feature=share", link: "https://www.youtube.com/shorts/5beOj4cx1oc?feature=share", imagen: "src/banco lumbar.jpeg" },
  },
  indicesPectoral: {
    pressAltoBarra:       { titulo: "Press alto con barra",               descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).", tips: ["Agarre ligeramente más ancho que hombros.", "Bajar controlado hasta el pecho."],  video: "https://www.youtube.com/shorts/54XscRwUyz4?feature=share", link: "https://www.youtube.com/shorts/54XscRwUyz4?feature=share", imagen: "src/press alto con barra.jpeg" },
    aperturasMancuernas:  { titulo: "Aperturas con mancuernas plano",     descripcion: "4 series x 10 repeticiones (Descanso: 2 min).",    tips: ["Ligera flexión en codos.", "Sentir el estiramiento en la bajada."],              video: "https://youtu.be/OrlXQdNwNwM", link: "https://youtu.be/OrlXQdNwNwM", imagen: "src/aperturas mancuernas.png" },
  },
  indicesHombros: {
    elevacionLateral:       { titulo: "Elevación lateral con mancuernas",   descripcion: "4 series x 25 repeticiones (Descanso: 1-2 min).",   tips: ["Levantar hasta la altura del hombro.", "Ligera inclinación del torso."],          video: "https://www.youtube.com/shorts/Vh_Kjw3O-DQ?feature=share", link: "https://www.youtube.com/shorts/Vh_Kjw3O-DQ?feature=share", imagen: "src/elevacion lateral.png" },
    elevacionFrontal:       { titulo: "Elevación frontal con mancuernas",   descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).",   tips: ["Subir hasta la altura de los ojos.", "No usar impulso del torso."],              video: "https://www.youtube.com/shorts/jk7YrK79ciA?feature=share", link: "https://www.youtube.com/shorts/jk7YrK79ciA?feature=share", imagen: "src/elevacion frontal.png" },
    pressMilitarMaquina:    { titulo: "Press militar en máquina",           descripcion: "4 series x 12-15 repeticiones (Descanso: 2 min).",  tips: ["Asiento a altura correcta.", "No bloquear los codos arriba."],                   video: "https://youtu.be/Wz8ifiRefB0", link: "https://youtu.be/Wz8ifiRefB0", imagen: "src/press militar.jpeg" },
    pressMilitarMancuernas: { titulo: "Press militar con mancuernas",       descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",    tips: ["Codos a 90° al inicio.", "Mantener el core activo."],                           video: "https://www.youtube.com/shorts/IuR427toLXE?feature=share", link: "https://www.youtube.com/shorts/IuR427toLXE?feature=share", imagen: "src/press militar mancuernas.jpeg" },
    pecdekInvertido:        { titulo: "Pecdek invertido",                   descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",    tips: ["Brazos a altura de hombros.", "Contraer deltoides posteriores al final."],       video: "https://www.youtube.com/shorts/20Y8lrIe68o?feature=share", link: "https://www.youtube.com/shorts/20Y8lrIe68o?feature=share", imagen: "src/pecdeck invertido.jpeg" },
  },
  indicesBiceps: {
    curlBarraPolea:    { titulo: "Curl barra en polea baja",               descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Codos pegados al cuerpo.", "Contracción completa arriba."],                      video: "https://youtu.be/BNxez0L-9LQ", link: "https://youtu.be/BNxez0L-9LQ", imagen: "src/curl barra polea baja.jpeg" },
    curlMartillo:      { titulo: "Curl con mancuernas martillo",           descripcion: "4 series x 12 repeticiones (Descanso: 1-2 min).", tips: ["Agarre neutro (pulgares arriba).", "No balancear el torso."],                    video: "https://www.youtube.com/shorts/07D2fR_0iro?feature=share", link: "https://www.youtube.com/shorts/07D2fR_0iro?feature=share", imagen: "src/curl mancuernas martillo.jpeg" },
    curlPieBarra:      { titulo: "Curl de pie con barra",                  descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",   tips: ["Codos fijos a los costados.", "Bajar de forma controlada."],                    video: "https://www.youtube.com/shorts/l-BPupny6cM?feature=share", link: "https://www.youtube.com/shorts/l-BPupny6cM?feature=share", imagen: "src/curl de pie barra.png" },
    curlPieMancuernas: { titulo: "Curl de pie con mancuernas",             descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).", tips: ["Alternar brazos o simultáneo.", "Girar la muñeca en la subida."],               video: "https://youtu.be/LAO7HuppUm0", link: "https://youtu.be/LAO7HuppUm0", imagen: "src/curl de pie mancuernas.png" },
    curlPiePoleaBaja:  { titulo: "Curl de pie polea baja",                 descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Tensión constante.", "Codos fijos, solo mover el antebrazo."],                   video: "https://www.youtube.com/shorts/0ABFQEui-Ik?feature=share", link: "https://www.youtube.com/shorts/0ABFQEui-Ik?feature=share", imagen: "src/curl de pie polea baja.jpeg" },
  },
  indicesTriceps: {
    extensionPoleaSoga:  { titulo: "Extensión polea alta soga",            descripcion: "3 series x 20 repeticiones (Descanso: 1-2 min).",        tips: ["Separar la soga al final.", "Codos fijos y pegados al cuerpo."],                 video: "https://youtu.be/OlZnLb3S8pk", link: "https://youtu.be/OlZnLb3S8pk", imagen: "src/extension polea alta.jpeg" },
    patadaMulaMancuerna: { titulo: "Patada de mula con mancuerna",         descripcion: "3 series x 15 repeticiones por brazo (Descanso: 1-2 min).", tips: ["Codo fijo a 90° al inicio.", "Extender completamente el brazo atrás."], video: "https://www.youtube.com/shorts/sYk-67UhxJk?feature=share", link: "https://www.youtube.com/shorts/sYk-67UhxJk?feature=share", imagen: "src/patada mula mancuerna.jpeg" },
  },
  indicesCardio: {
    saltossentadilla: { titulo: "Saltos de sentadilla",  descripcion: "4 series al fallo (Descanso: 2 min).",        tips: ["Aterrizar suavemente con las rodillas semiflexionadas.", "Mantener el core activo."],   video: "https://www.youtube.com/shorts/LLB7iwq3IG8?feature=share", link: "https://www.youtube.com/shorts/LLB7iwq3IG8?feature=share", imagen: "src/saltos sentadilla.png" },
    polichilenos:     { titulo: "Polichilenos",          descripcion: "4 series x 25 repeticiones (Descanso: 1 min).", tips: ["Movimiento explosivo.", "Mantener el ritmo constante."],                              video: "https://www.youtube.com/shorts/V8gqMGPfAQY?feature=share", link: "https://www.youtube.com/shorts/V8gqMGPfAQY?feature=share", imagen: "src/polichilenos.jpeg" },
    burpees:          { titulo: "Burpees",               descripcion: "4 series x 10 repeticiones (Descanso: 1-2 min).", tips: ["Movimiento fluido y continuo.", "Saltar con brazos extendidos arriba."],          video: "https://www.youtube.com/shorts/7xWbUkbm23g?feature=share", link: "https://www.youtube.com/shorts/7xWbUkbm23g?feature=share", imagen: "src/burpees.jpeg" },
    trote:            { titulo: "Trote",                 descripcion: "20-30 minutos a ritmo moderado (Descanso: según necesidad).", tips: ["Mantener una cadencia constante.", "Respiración rítmica y controlada."],    video: "https://www.youtube.com/shorts/PFo2afxqzHI?feature=share", link: "https://www.youtube.com/shorts/PFo2afxqzHI?feature=share", imagen: "src/trote.jpeg" },
  }
}

// ===== MODAL =====
function abrirModal(id) {
  let e = null
  for (const grupo of Object.values(indiceEjercicios)) {
    if (id in grupo) { e = grupo[id]; break }
  }
  if (!e) return

  document.getElementById("modal-titulo").textContent = e.titulo
  document.getElementById("modal-descripcion").textContent = e.descripcion

  let listaTips = '<ul class="modal-tips">'
  e.tips.forEach(tip => { listaTips += `<li>${tip}</li>` })
  listaTips += '</ul>'
  document.getElementById('modal-tips').innerHTML = listaTips

  const embedUrl = e.video
  .replace("https://youtu.be/", "https://www.youtube.com/embed/")
  .replace("https://www.youtube.com/shorts/", "https://www.youtube.com/embed/")
  .split("?")[0]  // elimina ?feature=share y cualquier parámetro extra
  document.getElementById("modal-iframe").src = embedUrl
  document.getElementById('modal-link').href = e.link
  document.getElementById("modal").classList.add("activo")
  document.body.style.overflow = "hidden"
}

function cerrarModal(event) {
  if (event && event.target !== document.getElementById("modal")) return
  document.getElementById("modal-iframe").src = ""
  document.getElementById("modal").classList.remove("activo")
  document.body.style.overflow = ''
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarModal()
})

// ===== RUTINAS =====

function cambiarDias(valor) {
  const span = document.getElementById('numDias')
  span.textContent = Math.min(7, Math.max(1, parseInt(span.textContent) + valor))
}

function crearSelect(contenedor, opciones, placeholder = '-- Selecciona --') {
  const select = document.createElement('select')

  const opcionVacia = document.createElement('option')
  opcionVacia.textContent = placeholder
  opcionVacia.value = ''
  opcionVacia.disabled = true   // no se puede seleccionar
  opcionVacia.selected = true   // aparece por defecto
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

function crearSelectEjercicios(contenedor, claveGrupo) {
  const grupoData = indiceEjercicios[claveGrupo]
  const select = document.createElement('select')

  const opcionVacia = document.createElement('option')
  opcionVacia.textContent = '-- Selecciona ejercicio --'
  opcionVacia.value = ''
  opcionVacia.disabled = true
  opcionVacia.selected = true
  select.appendChild(opcionVacia)

  Object.entries(grupoData).forEach(([clave, datos]) => {
    const opcion = document.createElement('option')
    opcion.value = clave
    opcion.textContent = datos.titulo
    select.appendChild(opcion)
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

  // Cabecera del día con X para eliminar
  const cabecera = document.createElement('div')
  cabecera.className = 'dia-cabecera'
  divDia.appendChild(cabecera)

  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = '✕'
  btnEliminar.className = 'btn-eliminar-dia'
  btnEliminar.onclick = () => divDia.remove()
  cabecera.appendChild(btnEliminar)

  // Select día — va dentro de cabecera
  const selectDia = crearSelect(cabecera, diasNombres, 'Selecciona día')

  selectDia.addEventListener('change', () => {
    limpiarDespuesDe(divDia, cabecera)

    const filaGrupos = document.createElement('div')
    filaGrupos.className = 'fila-grupos'
    divDia.appendChild(filaGrupos)

    añadirGrupo(divDia, filaGrupos)
  })
}

function añadirGrupo(divDia, filaGrupos) {

  const colGrupo = document.createElement('div')
  colGrupo.className = 'col-grupo'
  filaGrupos.appendChild(colGrupo)

  // X para eliminar este grupo
  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = '✕'
  btnEliminar.className = 'btn-eliminar-dia'
  btnEliminar.onclick = () => colGrupo.remove()
  colGrupo.appendChild(btnEliminar)

  // Select de parte del cuerpo
  const selectGrupo = crearSelect(colGrupo, Object.keys(partesCuerpo), '+ Parte del cuerpo')

  selectGrupo.addEventListener('change', () => {

    // Limpiar ejercicios anteriores pero NO el select de grupo ni la X
    limpiarDespuesDe(colGrupo, selectGrupo)

    const claveGrupo = partesCuerpo[selectGrupo.value]

    // Contenedor de ejercicios
    const contenedorEjercicios = document.createElement('div')
    contenedorEjercicios.className = 'ejercicios-lista'
    colGrupo.appendChild(contenedorEjercicios)

    // Añadir primer ejercicio automáticamente
    añadirEjercicio(contenedorEjercicios, claveGrupo)

    // Botón añadir otro ejercicio
    const btnAgregarEj = document.createElement('button')
    btnAgregarEj.textContent = '+ Añadir ejercicio'
    btnAgregarEj.className = 'btn-agregar-grupo'
    btnAgregarEj.onclick = () => añadirEjercicio(contenedorEjercicios, claveGrupo)
    colGrupo.appendChild(btnAgregarEj)

    // Botón añadir otro grupo muscular al día
    let btnAgregarGrupo = divDia.querySelector('.btn-agregar-grupo-dia')
    if (!btnAgregarGrupo) {
      btnAgregarGrupo = document.createElement('button')
      btnAgregarGrupo.textContent = '+ Añadir grupo muscular'
      btnAgregarGrupo.className = 'btn-agregar-grupo btn-agregar-grupo-dia'
      btnAgregarGrupo.onclick = () => añadirGrupo(divDia, filaGrupos)
      divDia.appendChild(btnAgregarGrupo)
    }

    document.getElementById('seccion-exportar').style.display = 'block'
  })
}

function añadirEjercicio(contenedor, claveGrupo) {

  const divEj = document.createElement('div')
  divEj.className = 'ejercicio-item'
  contenedor.appendChild(divEj)

  // Fila superior: X + select ejercicio
  const filaSelect = document.createElement('div')
  filaSelect.style.cssText = 'display:flex; gap:0.5rem; align-items:center;'
  divEj.appendChild(filaSelect)

  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = '✕'
  btnEliminar.className = 'btn-eliminar-dia'
  btnEliminar.onclick = () => divEj.remove()
  filaSelect.appendChild(btnEliminar)

  const selectEjercicio = crearSelectEjercicios(filaSelect, claveGrupo)

  selectEjercicio.addEventListener('change', () => {

    const detalleAnterior = divEj.querySelector('.ejercicio-detalle')
    if (detalleAnterior) detalleAnterior.remove()

    // Quitar reps anterior si existe
    const repsAnterior = filaSelect.querySelector('.select-reps')
    if (repsAnterior) repsAnterior.remove()

    const claveEjercicio = selectEjercicio.value
    const datos = indiceEjercicios[claveGrupo][claveEjercicio]

    // Repeticiones — misma fila que el select de ejercicio
    const reps = ['Sin Repetición','2x20','4x8','4x10','4x12','4x15','4x20','5x8','5x10','5x12','5x15','5x20','5x25','10x4','15x3','20x3','25x4']
    const selectReps = crearSelect(filaSelect, reps, 'Repeticiones')
    selectReps.classList.add('select-reps')

    // Fila inferior: imagen + link
    const detalle = document.createElement('div')
    detalle.className = 'ejercicio-detalle'
    divEj.appendChild(detalle)

    const img = document.createElement('img')
    img.src = datos.imagen
    img.alt = datos.titulo
    img.className = 'rutina-img'
    detalle.appendChild(img)

    const link = document.createElement('a')
    link.href = `ejercicios.html?modal=${claveEjercicio}`
    link.textContent = 'Ver ↗'
    link.target = '_blank'
    link.className = 'rutina-link'
    detalle.appendChild(link)
    })
}

function limpiarDespuesDe(contenedor, elemento) {
  let siguiente = elemento.nextSibling
  while (siguiente) {
    const temp = siguiente.nextSibling
    contenedor.removeChild(siguiente)
    siguiente = temp
  }
}

function exportarPDF() {
  const { jsPDF } = window.jspdf
  const doc = new jsPDF()

  const verde       = [0, 255, 102]
  const verdeOscuro = [0, 80, 40]
  const gris        = [180, 190, 195]
  const blanco      = [240, 240, 240]
  const negro       = [0, 0, 0]
  const fondoFila1  = [18, 18, 18]
  const fondoFila2  = [28, 28, 28]

  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()
  let y = 0

  const fondoTotal = () => {
    doc.setFillColor(...negro)
    doc.rect(0, 0, pageW, pageH, 'F')
  }
  fondoTotal()

  // ===== TÍTULO =====
  y = 18
  doc.setFontSize(16)
  doc.setTextColor(...verde)
  doc.setFont('helvetica', 'bold')
  doc.text('Mi Rutina de Entrenamiento', pageW / 2, y, { align: 'center' })
  y += 4

  doc.setDrawColor(...verde)
  doc.setLineWidth(0.4)
  doc.line(14, y, pageW - 14, y)
  y += 8

  // ===== COLUMNAS (portrait 210mm) =====
  const col = {
    dia:       14,
    parte:     40,
    ejercicio: 72,
    reps:      138,
    img:       153,
    link:      173
  }
  const rowH    = 20
  const imgSize = 14

  // ===== FUNCIÓN ENCABEZADO =====
  const dibujarEncabezado = () => {
    doc.setFillColor(...verdeOscuro)
    doc.rect(14, y - 5, pageW - 28, 10, 'F')
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...verde)
    doc.text('DÍA',       col.dia,       y)
    doc.text('PARTE',     col.parte,     y)
    doc.text('EJERCICIO', col.ejercicio, y)
    doc.text('REPS',      col.reps,      y)
    doc.text('IMG',       col.img,       y)
    doc.text('LINK',      col.link,      y)
    y += 7
  }
  dibujarEncabezado()

  // ===== RECORRER DÍAS =====
  let filaIndex = 0

  document.querySelectorAll('.dia-bloque').forEach(divDia => {

    const selectDia = divDia.querySelector('.dia-cabecera select')
    const nombreDia = selectDia?.value || '—'
    let primerFilaDia = true

    divDia.querySelectorAll('.col-grupo').forEach(col_grupo => {

      const selectGrupo = col_grupo.querySelector('select')
      const nombreGrupo = selectGrupo?.value || '—'
      const claveGrupo  = partesCuerpo[nombreGrupo]
      let primerFilaGrupo = true

      col_grupo.querySelectorAll('.ejercicio-item').forEach(ejItem => {

        const filaSelect = ejItem.querySelector('div')
        const selects    = filaSelect ? filaSelect.querySelectorAll('select') : []
        if (selects.length < 2) return

        const claveEjercicio = selects[0].value
        const reps           = selects[1]?.value || '—'

        if (!claveEjercicio || !claveGrupo) return

        const datos = indiceEjercicios[claveGrupo]?.[claveEjercicio]
        if (!datos) return

        // ===== NUEVA PÁGINA =====
        if (y + rowH > pageH - 14) {
          doc.addPage()
          fondoTotal()
          y = 20
          dibujarEncabezado()
          primerFilaDia   = true
          primerFilaGrupo = true
        }

        // ===== FONDO ALTERNO =====
        doc.setFillColor(...(filaIndex % 2 === 0 ? fondoFila1 : fondoFila2))
        doc.rect(14, y - 3, pageW - 28, rowH, 'F')

        doc.setDrawColor(40, 40, 40)
        doc.setLineWidth(0.15)
        doc.line(14, y - 3, pageW - 14, y - 3)

        const textY = y + rowH / 2 - 2

        // DÍA — solo primera fila del día
        if (primerFilaDia) {
          doc.setFontSize(7.5)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(...verde)
          doc.text(nombreDia, col.dia, textY)
          primerFilaDia = false
        }

        // PARTE — solo primera fila del grupo
        if (primerFilaGrupo) {
          doc.setFontSize(7)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(...gris)
          doc.text(nombreGrupo, col.parte, textY)
          primerFilaGrupo = false
        }

        // EJERCICIO
        const titulo = datos.titulo.length > 26
          ? datos.titulo.substring(0, 23) + '...'
          : datos.titulo
        doc.setFontSize(7)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(...blanco)
        doc.text(titulo, col.ejercicio, textY)

        // REPS
        doc.setTextColor(...gris)
        doc.text(reps, col.reps, textY)

        // IMAGEN
        try {
          const imgEl = ejItem.querySelector('img.rutina-img')
          if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
            const canvas = document.createElement('canvas')
            canvas.width  = imgEl.naturalWidth
            canvas.height = imgEl.naturalHeight
            canvas.getContext('2d').drawImage(imgEl, 0, 0)
            const imgData = canvas.toDataURL('image/jpeg', 0.7)
            const imgY = y + (rowH - imgSize) / 2 - 3
            doc.addImage(imgData, 'JPEG', col.img, imgY, imgSize, imgSize)
          } else {
            doc.setTextColor(80, 80, 80)
            doc.setFontSize(6)
            doc.text('—', col.img, textY)
          }
        } catch (e) {
          doc.setTextColor(80, 80, 80)
          doc.setFontSize(6)
          doc.text('—', col.img, textY)
        }

        // LINK
        doc.setFontSize(7)
        doc.setTextColor(...verde)
        const urlLink = `https://Orbesito178.github.io/Routine-exercises-GYM-webpage-!/${linksGrupo[claveGrupo]}?modal=${claveEjercicio}`
        doc.textWithLink('Ver ↗', col.link, textY, { url: urlLink })

        y += rowH
        filaIndex++
      })
    })

    // Separador entre días
    if (y < pageH - 20) {
      doc.setDrawColor(...verdeOscuro)
      doc.setLineWidth(0.3)
      doc.line(14, y, pageW - 14, y)
      y += 4
    }
  })

  // ===== LÍNEA FINAL =====
  doc.setDrawColor(...verde)
  doc.setLineWidth(0.5)
  doc.line(14, y + 2, pageW - 14, y + 2)

  // ===== PIE DE PÁGINA =====
  doc.setFontSize(6)
  doc.setTextColor(...gris)
  doc.text(
    `Generado el ${new Date().toLocaleDateString('es-ES')}`,
    pageW / 2,
    pageH - 6,
    { align: 'center' }
  )

  doc.save('mi-rutina.pdf')
}

const navToggle = document.querySelector('.nav_toggle')
const navLinks = document.querySelector('.nav_links')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open')
  })
}

// ===== ABRIR MODAL DESDE URL =====
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search)
  const modalId = params.get("modal")
  if (modalId) {
    // Buscar a qué grupo pertenece el ejercicio
    let grupoId = null
    for (const [clave, grupo] of Object.entries(indiceEjercicios)) {
      if (modalId in grupo) { grupoId = clave; break }
    }

    // Mapeo de clave de índice a ID de sección HTML
    const mapaGrupos = {
      indicesCuadriceps: 'cuadriceps',
      indicesPiernas:    'piernas',
      indicesGluteos:    'gluteos',
      indicesEspalda:    'espalda',
      indicesPectoral:   'pecho',
      indicesHombros:    'hombros',
      indicesBiceps:     'biceps',
      indicesTriceps:    'triceps',
      indicesCardio:     'cardio'
    }

    if (grupoId) mostrar(mapaGrupos[grupoId])
    setTimeout(() => abrirModal(modalId), 200)
  }
})


// ===== DATOS NUTRICIÓN =====
const datosNutricion = {
  comida1: {
    titulo: 'Comida 1',
    ingredientes: [
      '4 huevos (2 completos + 2 solo claras)',
      '4 galletitas de arroz',
      '1 cucharada de mermelada dietética',
      '50 gr de sandía',
      '1 taza de café',
      'Omega 3'
    ],
    preparacion: 'Cocina los huevos a tu gusto — revueltos o pochados. Acompaña con las galletitas de arroz untadas con mermelada dietética. Sirve la sandía en trozos frescos al lado. Toma el café sin azúcar o con endulzante y el Omega 3 junto con la comida.'
  },
  comida2: {
    titulo: 'Comida 2',
    ingredientes: [
      '120 gr de pechuga de pollo',
      '100 gr de ensalada mixta (lechuga, tomate, pepino)',
      '500 ml de agua'
    ],
    preparacion: 'Cocina el pollo a la plancha con sal, pimienta y un toque de limón. Prepara la ensalada mixta con una pizca de sal y un chorrito de vinagre o aceite de oliva. Acompaña con agua y consume dentro de las 3 horas del desayuno.'
  },
  comida3: {
    titulo: 'Comida 3',
    ingredientes: [
      '120 gr de carne o pollo',
      '100 gr de arroz blanco o papa cocida',
      '50 gr de ensalada verde',
      '500 ml de agua'
    ],
    preparacion: 'Cocina la proteína a la plancha o al horno con condimentos naturales. Prepara el arroz blanco o cocina la papa entera con sal. Acompaña con la ensalada aliñada ligeramente. Esta es la comida más completa del día — no te la saltes.'
  },
  comida4: {
    titulo: 'Comida 4',
    ingredientes: [
      '1 lata de atún al natural',
      '50 gr de piña natural o en conserva (sin azúcar)',
      '1 taza de té verde o de hierbas'
    ],
    preparacion: 'Escurre bien el atún y mézclalo con la piña cortada en trozos pequeños. Puedes agregar un toque de limón para realzar el sabor. Acompaña con el té sin azúcar. Es una merienda ligera, proteica y diurética ideal para la tarde.'
  },
  comida5: {
    titulo: 'Comida 5',
    ingredientes: [
      'Atún al natural o 4 huevos (2 completos + 2 solo claras)',
      '60 gr de espárragos',
      '1 taza de té relajante (manzanilla o tilo)'
    ],
    preparacion: 'Cocina los espárragos al vapor o a la plancha con sal y ajo. Si eliges huevos, revuélvelos o cocínalos pochados. Si eliges atún, sírvelo directamente o marca ligeramente en sartén. La cena debe ser ligera — termina de comer al menos 2 horas antes de dormir.'
  }
}

// ===== FUNCIONES MODAL NUTRICIÓN =====
function abrirModalNutricion(clave) {
  const datos = datosNutricion[clave]
  if (!datos) return

  document.getElementById('modal-nutr-titulo').textContent = datos.titulo
  document.getElementById('modal-nutr-preparacion').textContent = datos.preparacion

  const lista = document.getElementById('modal-nutr-ingredientes')
  lista.innerHTML = ''
  datos.ingredientes.forEach(ing => {
    const li = document.createElement('li')
    li.textContent = ing
    lista.appendChild(li)
  })

  document.getElementById('modal-nutricion').classList.add('activo')
}

function cerrarModalNutricion(event) {
  if (!event || event.target === document.getElementById('modal-nutricion')) {
    document.getElementById('modal-nutricion').classList.remove('activo')
  }
}