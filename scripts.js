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
    sentadillaSmith:    { titulo: "Sentadilla Smith",               descripcion: "2 series x 20 + 4 series x 10 repeticiones (Descanso: 2-3 min).",                            tips: ["Mantener la espalda recta.", "Controlar el descenso."],                                                       video: "https://www.youtube.com/shorts/rQw8GUzpj1I?feature=share", link: "https://www.youtube.com/shorts/rQw8GUzpj1I?feature=share", imagen: "img/sentadilla-smith.jpg" },
    prensa45:           { titulo: "Prensa 45°",                     descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",                                            tips: ["Pies en posición media.", "Bajar profundo sin despegar la espalda."],                                          video: "https://www.youtube.com/shorts/8gPJfr-2aRM?feature=share", link: "https://www.youtube.com/shorts/8gPJfr-2aRM?feature=share", imagen: "img/prensa45.jpg" },
    extensionRodillas:  { titulo: "Extensión de rodillas",          descripcion: "2 series x 20 + 5 series x 12 repeticiones (Descanso: 2 min).",                              tips: ["Realizar una contracción de 2 segundos arriba.", "Controlar el descenso."],                                    video: "https://www.youtube.com/shorts/FtXooCm3wdQ?feature=share", link: "https://www.youtube.com/shorts/FtXooCm3wdQ?feature=share", imagen: "img/extension-rodillas.jpg" },
    zancadasBarra:      { titulo: "Zancadas con barra",             descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",                                              tips: ["Mantener el torso erguido.", "La rodilla delantera no debe superar la punta del pie."],                         video: "https://youtu.be/fPWs1u4KW1A", link: "https://youtu.be/fPWs1u4KW1A", imagen: "img/zancadas.jpg" },
    haka:               { titulo: "Haka",                           descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",                                              tips: ["Mantener el core activo.", "Movimiento controlado."],                                                         video: "https://www.youtube.com/shorts/itmlCUc0P3k?feature=share", link: "https://www.youtube.com/shorts/itmlCUc0P3k?feature=share", imagen: "img/haka.jpg" },
  },
  indicesPiernas: {
    pesoMuertoBarra:      { titulo: "Peso muerto con barra",              descripcion: "4 series x 8-12 repeticiones (Descanso: 3 min).",          tips: ["Mantener la espalda neutra.", "Empujar el suelo, no tirar de la barra."],                     video: "https://youtu.be/0XL4cZR2Ink", link: "https://youtu.be/0XL4cZR2Ink", imagen: "img/peso-muerto.jpg" },
    curlAcostado:         { titulo: "Curl acostado (femoral)",            descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",         tips: ["Contraer el glúteo durante el movimiento.", "No balancear las caderas."],                     video: "https://www.youtube.com/shorts/6JQflLWhKfg?feature=share", link: "https://www.youtube.com/shorts/6JQflLWhKfg?feature=share", imagen: "img/curl-acostado.jpg" },
    zancadasEstaticas:    { titulo: "Zancadas estáticas",                 descripcion: "4 series x 12 repeticiones por pierna (Descanso: 2 min).", tips: ["Mantener el torso erguido.", "La rodilla trasera casi toca el suelo."],                      video: "https://www.youtube.com/shorts/FO5KJzV2qb8?feature=share", link: "https://www.youtube.com/shorts/FO5KJzV2qb8?feature=share", imagen: "img/zancadas-estaticas.jpg" },
    bulgaras:             { titulo: "Búlgaras",                           descripcion: "4 series x 12 repeticiones por pierna (Descanso: 2 min).", tips: ["Apoyar el pie trasero en un banco.", "Llegar al fallo muscular en la última serie."],          video: "https://www.youtube.com/shorts/ba0-WEYVEpk?feature=share", link: "https://www.youtube.com/shorts/ba0-WEYVEpk?feature=share", imagen: "img/bulgaras.jpg" },
  },
  indicesGluteos: {
    hipThrust:            { titulo: "Hip thrust",                         descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Apretar los glúteos al máximo arriba.", "Mantener la barbilla pegada al pecho."],             video: "https://www.youtube.com/shorts/OSOP3JAApGk?feature=share", link: "https://www.youtube.com/shorts/OSOP3JAApGk?feature=share", imagen: "img/hip-thrust.jpg" },
    gluteoPatada:         { titulo: "Glúteo patada en máquina",           descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).", tips: ["Contraer el glúteo en el punto más alto.", "Movimiento controlado."],                        video: "https://www.youtube.com/shorts/B9Fqo0KqeWc?feature=share", link: "https://www.youtube.com/shorts/B9Fqo0KqeWc?feature=share", imagen: "img/gluteo-patada.jpg" },
    gluteoMaquinaLumbar:  { titulo: "Glúteo en máquina lumbar",           descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Ajustar bien el pad.", "No usar impulso."],                                                   video: "https://www.youtube.com/shorts/vHKx7t3RwUM?feature=share", link: "https://www.youtube.com/shorts/vHKx7t3RwUM?feature=share", imagen: "img/gluteo-lumbar.jpg" },
    puentePelvisBarra:    { titulo: "Puente de pelvis con barra",         descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",            tips: ["Apoyar la barra con protección.", "Subir hasta alinear caderas con torso."],                  video: "https://www.youtube.com/shorts/eecT-JzxxVE?feature=share", link: "https://www.youtube.com/shorts/eecT-JzxxVE?feature=share", imagen: "img/puente-pelvis.jpg" },
    puentePelvisMaquina:  { titulo: "Puente de pelvis en máquina",        descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",            tips: ["Controlar el descenso.", "Pausa de 1 segundo en la contracción."],                           video: "https://www.youtube.com/shorts/HCuDBzeh0F8?feature=share", link: "https://www.youtube.com/shorts/HCuDBzeh0F8?feature=share", imagen: "img/puente-maquina.jpg" },
    jalonInvertido:       { titulo: "Jalón invertido polea baja",         descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Mantener el core activo.", "Controlar el movimiento."],                                       video: "https://www.youtube.com/shorts/QkMZfCtBJm4?feature=share", link: "https://www.youtube.com/shorts/QkMZfCtBJm4?feature=share", imagen: "img/jalon-invertido.jpg" },
    aductor:              { titulo: "Aductor en máquina",                 descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",          tips: ["Movimiento lento y controlado.", "No dejar caer el peso."],                                   video: "https://www.youtube.com/shorts/76uNT_VMhPI?feature=share", link: "https://www.youtube.com/shorts/76uNT_VMhPI?feature=share", imagen: "img/aductor.jpg" },
    abductor:             { titulo: "Abductor en máquina",                descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",          tips: ["Abrir hasta el rango máximo cómodo.", "Mantener la espalda apoyada."],                       video: "https://www.youtube.com/shorts/lwiuET0ZKno?feature=share", link: "https://www.youtube.com/shorts/lwiuET0ZKno?feature=share", imagen: "img/abductor.jpg" },
    sentadillaSumo:       { titulo: "Sentadilla sumo",                    descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",          tips: ["Pies bien abiertos y puntas hacia afuera.", "Bajar mínimo hasta 90°."],                       video: "https://www.youtube.com/shorts/6N38tqZ-6F4?feature=share", link: "https://www.youtube.com/shorts/6N38tqZ-6F4?feature=share", imagen: "img/sentadilla-sumo.jpg" },
    pesoMuertoUnilateral: { titulo: "Peso muerto unilateral en banco",    descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).", tips: ["Mantener la cadera nivelada.", "Controlar el movimiento de bajada."],                        video: "https://www.youtube.com/shorts/FAdf_rGP6rA?feature=share", link: "https://www.youtube.com/shorts/FAdf_rGP6rA?feature=share", imagen: "img/peso-muerto-unilateral.jpg" },
  },
  indicesEspalda: {
    jalonAltoCerrado:   { titulo: "Jalón alto al pecho",                  descripcion: "4 series x 12-25 repeticiones (Descanso: 2 min).", tips: ["Llevar la barra hasta el pecho.", "Codos hacia abajo y atrás."],                   video: "https://www.youtube.com/shorts/DXkatWVCmbc?feature=share", link: "https://www.youtube.com/shorts/DXkatWVCmbc?feature=share", imagen: "img/jalon-alto.jpg" },
    jalonSentadoPolea:  { titulo: "Jalón sentado polea",                  descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",    tips: ["Tirar con los codos.", "Torso ligeramente inclinado hacia atrás."],               video: "https://www.youtube.com/shorts/iyOM6y5ADAQ?feature=share", link: "https://www.youtube.com/shorts/iyOM6y5ADAQ?feature=share", imagen: "img/jalon-sentado.jpg" },
    jalonMaquinaHammer: { titulo: "Jalón máquina Hammer",                 descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",    tips: ["Agarre neutro para mayor activación.", "Contraer la espalda al final."],          video: "https://youtu.be/9KUgSrLOGvs", link: "https://youtu.be/9KUgSrLOGvs", imagen: "img/jalon-hammer.jpg" },
    remoMancuerna:      { titulo: "Remo con mancuerna",                   descripcion: "4 series x 15 repeticiones por brazo (Descanso: 2 min).", tips: ["Apoyar rodilla y mano en el banco.", "Subir el codo lo más alto posible."],  video: "https://www.youtube.com/shorts/ge0lRNxSMNk?feature=share", link: "https://www.youtube.com/shorts/ge0lRNxSMNk?feature=share", imagen: "img/remo-mancuerna.jpg" },
    jalonPieBrazos:     { titulo: "Jalón de pie brazos extendidos",       descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",    tips: ["Brazos casi extendidos.", "Contraer la espalda al bajar."],                       video: "https://www.youtube.com/shorts/ZN9QVESZUkE?feature=share", link: "https://www.youtube.com/shorts/ZN9QVESZUkE?feature=share", imagen: "img/jalon-pie.jpg" },
    bancoLumbar:        { titulo: "Banco lumbar",                         descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",  tips: ["Bajar controlado hasta 90°.", "No hiperextender en la subida."],                  video: "https://www.youtube.com/shorts/5beOj4cx1oc?feature=share", link: "https://www.youtube.com/shorts/5beOj4cx1oc?feature=share", imagen: "img/banco-lumbar.jpg" },
  },
  indicesPectoral: {
    pressAltoBarra:       { titulo: "Press alto con barra",               descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).", tips: ["Agarre ligeramente más ancho que hombros.", "Bajar controlado hasta el pecho."],  video: "https://www.youtube.com/shorts/54XscRwUyz4?feature=share", link: "https://www.youtube.com/shorts/54XscRwUyz4?feature=share", imagen: "img/press-alto.jpg" },
    aperturasMancuernas:  { titulo: "Aperturas con mancuernas plano",     descripcion: "4 series x 10 repeticiones (Descanso: 2 min).",    tips: ["Ligera flexión en codos.", "Sentir el estiramiento en la bajada."],              video: "https://youtu.be/OrlXQdNwNwM", link: "https://youtu.be/OrlXQdNwNwM", imagen: "img/aperturas.jpg" },
  },
  indicesHombros: {
    elevacionLateral:       { titulo: "Elevación lateral con mancuernas",   descripcion: "4 series x 25 repeticiones (Descanso: 1-2 min).",   tips: ["Levantar hasta la altura del hombro.", "Ligera inclinación del torso."],          video: "https://www.youtube.com/shorts/Vh_Kjw3O-DQ?feature=share", link: "https://www.youtube.com/shorts/Vh_Kjw3O-DQ?feature=share", imagen: "img/elevacion-lateral.jpg" },
    elevacionFrontal:       { titulo: "Elevación frontal con mancuernas",   descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).",   tips: ["Subir hasta la altura de los ojos.", "No usar impulso del torso."],              video: "https://www.youtube.com/shorts/jk7YrK79ciA?feature=share", link: "https://www.youtube.com/shorts/jk7YrK79ciA?feature=share", imagen: "img/elevacion-frontal.jpg" },
    pressMilitarMaquina:    { titulo: "Press militar en máquina",           descripcion: "4 series x 12-15 repeticiones (Descanso: 2 min).",  tips: ["Asiento a altura correcta.", "No bloquear los codos arriba."],                   video: "https://youtu.be/Wz8ifiRefB0", link: "https://youtu.be/Wz8ifiRefB0", imagen: "img/press-militar-maquina.jpg" },
    pressMilitarMancuernas: { titulo: "Press militar con mancuernas",       descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",    tips: ["Codos a 90° al inicio.", "Mantener el core activo."],                           video: "https://www.youtube.com/shorts/IuR427toLXE?feature=share", link: "https://www.youtube.com/shorts/IuR427toLXE?feature=share", imagen: "img/press-militar-mancuernas.jpg" },
    pecdekInvertido:        { titulo: "Pecdek invertido",                   descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",    tips: ["Brazos a altura de hombros.", "Contraer deltoides posteriores al final."],       video: "https://www.youtube.com/shorts/20Y8lrIe68o?feature=share", link: "https://www.youtube.com/shorts/20Y8lrIe68o?feature=share", imagen: "img/pecdek.jpg" },
  },
  indicesBiceps: {
    curlBarraPolea:    { titulo: "Curl barra en polea baja",               descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Codos pegados al cuerpo.", "Contracción completa arriba."],                      video: "https://youtu.be/BNxez0L-9LQ", link: "https://youtu.be/BNxez0L-9LQ", imagen: "img/curl-barra-polea.jpg" },
    curlMartillo:      { titulo: "Curl con mancuernas martillo",           descripcion: "4 series x 12 repeticiones (Descanso: 1-2 min).", tips: ["Agarre neutro (pulgares arriba).", "No balancear el torso."],                    video: "https://www.youtube.com/shorts/07D2fR_0iro?feature=share", link: "https://www.youtube.com/shorts/07D2fR_0iro?feature=share", imagen: "img/curl-martillo.jpg" },
    curlPieBarra:      { titulo: "Curl de pie con barra",                  descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",   tips: ["Codos fijos a los costados.", "Bajar de forma controlada."],                    video: "https://www.youtube.com/shorts/l-BPupny6cM?feature=share", link: "https://www.youtube.com/shorts/l-BPupny6cM?feature=share", imagen: "img/curl-pie-barra.jpg" },
    curlPieMancuernas: { titulo: "Curl de pie con mancuernas",             descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).", tips: ["Alternar brazos o simultáneo.", "Girar la muñeca en la subida."],               video: "https://youtu.be/LAO7HuppUm0", link: "https://youtu.be/LAO7HuppUm0", imagen: "img/curl-pie-mancuernas.jpg" },
    curlPiePoleaBaja:  { titulo: "Curl de pie polea baja",                 descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Tensión constante.", "Codos fijos, solo mover el antebrazo."],                   video: "https://www.youtube.com/shorts/0ABFQEui-Ik?feature=share", link: "https://www.youtube.com/shorts/0ABFQEui-Ik?feature=share", imagen: "img/curl-polea-baja.jpg" },
  },
  indicesTriceps: {
    extensionPoleaSoga:  { titulo: "Extensión polea alta soga",            descripcion: "3 series x 20 repeticiones (Descanso: 1-2 min).",        tips: ["Separar la soga al final.", "Codos fijos y pegados al cuerpo."],                 video: "https://youtu.be/OlZnLb3S8pk", link: "https://youtu.be/OlZnLb3S8pk", imagen: "img/extension-soga.jpg" },
    patadaMulaMancuerna: { titulo: "Patada de mula con mancuerna",         descripcion: "3 series x 15 repeticiones por brazo (Descanso: 1-2 min).", tips: ["Codo fijo a 90° al inicio.", "Extender completamente el brazo atrás."], video: "https://www.youtube.com/shorts/sYk-67UhxJk?feature=share", link: "https://www.youtube.com/shorts/sYk-67UhxJk?feature=share", imagen: "img/patada-mula.jpg" },
  },
  indicesCardio: {
    saltossentadilla: { titulo: "Saltos de sentadilla",  descripcion: "4 series al fallo (Descanso: 2 min).",        tips: ["Aterrizar suavemente con las rodillas semiflexionadas.", "Mantener el core activo."],   video: "https://www.youtube.com/shorts/LLB7iwq3IG8?feature=share", link: "https://www.youtube.com/shorts/LLB7iwq3IG8?feature=share", imagen: "img/saltos-sentadilla.jpg" },
    polichilenos:     { titulo: "Polichilenos",          descripcion: "4 series x 25 repeticiones (Descanso: 1 min).", tips: ["Movimiento explosivo.", "Mantener el ritmo constante."],                              video: "https://www.youtube.com/shorts/V8gqMGPfAQY?feature=share", link: "https://www.youtube.com/shorts/V8gqMGPfAQY?feature=share", imagen: "img/polichilenos.jpg" },
    burpees:          { titulo: "Burpees",               descripcion: "4 series x 10 repeticiones (Descanso: 1-2 min).", tips: ["Movimiento fluido y continuo.", "Saltar con brazos extendidos arriba."],          video: "https://www.youtube.com/shorts/7xWbUkbm23g?feature=share", link: "https://www.youtube.com/shorts/7xWbUkbm23g?feature=share", imagen: "img/burpees.jpg" },
    trote:            { titulo: "Trote",                 descripcion: "20-30 minutos a ritmo moderado (Descanso: según necesidad).", tips: ["Mantener una cadencia constante.", "Respiración rítmica y controlada."],    video: "https://www.youtube.com/shorts/PFo2afxqzHI?feature=share", link: "https://www.youtube.com/shorts/PFo2afxqzHI?feature=share", imagen: "img/trote.jpg" },
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

  const verde = [0, 255, 102]
  const gris = [194, 205, 213]
  const blanco = [255, 255, 255]
  const oscuro = [20, 20, 20]

  const pageW = doc.internal.pageSize.getWidth()
  let y = 20

  // ===== TÍTULO =====
  doc.setFillColor(0, 0, 0)
  doc.rect(0, 0, pageW, 300, 'F')

  doc.setFontSize(22)
  doc.setTextColor(...verde)
  doc.setFont('helvetica', 'bold')
  doc.text('Mi Rutina de Entrenamiento', pageW / 2, y, { align: 'center' })
  y += 6

  doc.setDrawColor(...verde)
  doc.setLineWidth(0.5)
  doc.line(14, y, pageW - 14, y)
  y += 10

  // ===== ENCABEZADOS DE TABLA =====
  const colDia      = 14
  const colCuerpo   = 45
  const colEjercicio= 85
  const colLink     = 155
  const colImg      = 175
  const rowH        = 28

  // Fondo encabezado
  doc.setFillColor(0, 40, 20)
  doc.rect(14, y - 5, pageW - 28, 10, 'F')

  doc.setFontSize(8)
  doc.setTextColor(...verde)
  doc.setFont('helvetica', 'bold')
  doc.text('DÍA',           colDia,       y)
  doc.text('PARTE',         colCuerpo,    y)
  doc.text('EJERCICIO',     colEjercicio, y)
  doc.text('REPS',          148,          y)
  doc.text('LINK',          colLink,      y)
  y += 8

  // ===== RECORRER DÍAS =====
  const diasBloques = document.querySelectorAll('.dia-bloque')

  diasBloques.forEach((divDia, index) => {

    const selectDia = divDia.querySelector('.dia-cabecera select')
    const nombreDia = selectDia ? selectDia.value : '—'

    const columnas = divDia.querySelectorAll('.col-grupo')

    columnas.forEach((col, i) => {
      const selects = col.querySelectorAll('select')
      if (selects.length < 3) return

      const nombreGrupo    = selects[0].value
      const claveEjercicio = selects[1].value
      const reps           = selects[2].value

      if (!claveEjercicio || !nombreGrupo) return

      const claveGrupo = partesCuerpo[nombreGrupo]
      const datos = indiceEjercicios[claveGrupo]?.[claveEjercicio]
      if (!datos) return

      // Nueva página si no hay espacio
      if (y > 260) {
        doc.addPage()
        doc.setFillColor(0, 0, 0)
        doc.rect(0, 0, pageW, 300, 'F')
        y = 20
      }

      // Fondo alterno de filas
      if ((index + i) % 2 === 0) {
        doc.setFillColor(15, 15, 15)
      } else {
        doc.setFillColor(25, 25, 25)
      }
      doc.rect(14, y - 4, pageW - 28, rowH, 'F')

      // Línea separadora
      doc.setDrawColor(40, 40, 40)
      doc.setLineWidth(0.2)
      doc.line(14, y - 4, pageW - 28 + 14, y - 4)

      // Texto — Día
      doc.setFontSize(8)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...verde)
      doc.text(nombreDia, colDia, y + 4)

      // Texto — Parte del cuerpo
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...gris)
      doc.text(nombreGrupo, colCuerpo, y + 4)

      // Texto — Ejercicio (puede ser largo, lo corta)
      const tituloCorto = datos.titulo.length > 28
        ? datos.titulo.substring(0, 25) + '...'
        : datos.titulo
      doc.setTextColor(...blanco)
      doc.text(tituloCorto, colEjercicio, y + 4)

      // Texto — Repeticiones
      doc.setTextColor(...gris)
      doc.text(reps || '—', 148, y + 4)

      // Link clickeable
      doc.setTextColor(...verde)
      doc.textWithLink('Ver ↗', colLink, y + 4, { url: linksGrupo[claveGrupo] })

      y += rowH
    })
  })

  // ===== LÍNEA FINAL =====
  doc.setDrawColor(...verde)
  doc.setLineWidth(0.5)
  doc.line(14, y, pageW - 14, y)

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