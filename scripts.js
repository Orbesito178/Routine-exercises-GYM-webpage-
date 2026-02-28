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
  'Femoral':     'indicesFemoral',
  'Glúteos':     'indicesGluteos',
  'Dorsal':      'indicesDorsal',
  'Pectoral':    'indicesPectoral',
  'Hombros':     'indicesHombros',
  'Bíceps':      'indicesBiceps',
  'Tríceps':     'indicesTriceps'
}

// Link al html de ejercicios por grupo
const linksGrupo = {
  'indicesCuadriceps': 'ejercicios.html#cuadriceps',
  'indicesFemoral':    'ejercicios.html#femoral',
  'indicesGluteos':    'ejercicios.html#gluteos',
  'indicesDorsal':     'ejercicios.html#dorsal',
  'indicesPectoral':   'ejercicios.html#pectoral',
  'indicesHombros':    'ejercicios.html#hombros',
  'indicesBiceps':     'ejercicios.html#biceps',
  'indicesTriceps':    'ejercicios.html#triceps'
}

const indiceEjercicios = {
  indicesCuadriceps: {
    sentadillaLibre:    { titulo: "Sentadilla libre",               descripcion: "4 series x 12 repeticiones (Descanso: 3 min).",                                              tips: ["Bajar mínimo hasta 90°.", "Llegar al fallo muscular en la última serie."],                                    video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/sentadilla-libre.jpg" },
    sentadillaSmith:    { titulo: "Sentadilla Smith",               descripcion: "2 series x 20 + 4 series x 10 repeticiones (Descanso: 2-3 min).",                            tips: ["Mantener la espalda recta.", "Controlar el descenso."],                                                       video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/sentadilla-smith.jpg" },
    prensa45:           { titulo: "Prensa 45°",                     descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",                                            tips: ["Pies en posición media.", "Bajar profundo sin despegar la espalda."],                                          video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/prensa45.jpg" },
    extensionRodillas:  { titulo: "Extensión de rodillas",          descripcion: "2 series x 20 + 5 series x 12 repeticiones (Descanso: 2 min).",                              tips: ["Realizar una contracción de 2 segundos arriba.", "Controlar el descenso."],                                    video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/extension-rodillas.jpg" },
    zancadas:           { titulo: "Zancadas con barra",             descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",                                              tips: ["Mantener el torso erguido.", "La rodilla delantera no debe superar la punta del pie."],                         video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/zancadas.jpg" },
    lungesBulgaros:     { titulo: "Lunges búlgaros",                descripcion: "4 series x 12 repeticiones por pierna (Descanso: 2 min).",                                   tips: ["Apoyar el pie trasero en un banco.", "Llegar al fallo muscular en la última serie."],                          video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/lunges-bulgaros.jpg" },
    sentadillaSumo:     { titulo: "Sentadilla sumo con mancuerna",  descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).",                                            tips: ["Pies bien abiertos y puntas hacia afuera.", "Bajar mínimo hasta 90°."],                                        video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/sentadilla-sumo.jpg" },
    saltossentadilla:   { titulo: "Saltos de sentadilla",           descripcion: "4 series al fallo (Descanso: 2 min).",                                                       tips: ["Aterrizar suavemente con las rodillas semiflexionadas.", "Mantener el core activo."],                           video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/saltos-sentadilla.jpg" },
  },
  indicesFemoral: {
    pesoMuertoBarra:      { titulo: "Peso muerto con barra",              descripcion: "4 series x 8-12 repeticiones (Descanso: 3 min).",          tips: ["Mantener la espalda neutra.", "Empujar el suelo, no tirar de la barra."],                     video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/peso-muerto.jpg" },
    pesoMuertoUnilateral: { titulo: "Peso muerto unilateral en banco",    descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).", tips: ["Mantener la cadera nivelada.", "Controlar el movimiento de bajada."],                        video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/peso-muerto-unilateral.jpg" },
    curlAcostado:         { titulo: "Curl acostado (femoral)",            descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",         tips: ["Contraer el glúteo durante el movimiento.", "No balancear las caderas."],                     video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/curl-acostado.jpg" },
  },
  indicesGluteos: {
    hipThrust:            { titulo: "Hip thrust",                         descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Apretar los glúteos al máximo arriba.", "Mantener la barbilla pegada al pecho."],             video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/hip-thrust.jpg" },
    gluteoPatada:         { titulo: "Glúteo patada en máquina",           descripcion: "4 series x 15 repeticiones por pierna (Descanso: 2 min).", tips: ["Contraer el glúteo en el punto más alto.", "Movimiento controlado."],                        video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/gluteo-patada.jpg" },
    gluteoMaquinaLumbar:  { titulo: "Glúteo en máquina lumbar",           descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Ajustar bien el pad.", "No usar impulso."],                                                   video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/gluteo-lumbar.jpg" },
    puentePelvisBarra:    { titulo: "Puente de pelvis con barra",         descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",            tips: ["Apoyar la barra con protección.", "Subir hasta alinear caderas con torso."],                  video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/puente-pelvis.jpg" },
    puentePelvisMaquina:  { titulo: "Puente de pelvis en máquina",        descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",            tips: ["Controlar el descenso.", "Pausa de 1 segundo en la contracción."],                           video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/puente-maquina.jpg" },
    jalonInvertido:       { titulo: "Jalón invertido polea baja",         descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",            tips: ["Mantener el core activo.", "Controlar el movimiento."],                                       video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/jalon-invertido.jpg" },
    aductor:              { titulo: "Aductor en máquina",                 descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",          tips: ["Movimiento lento y controlado.", "No dejar caer el peso."],                                   video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/aductor.jpg" },
    abductor:             { titulo: "Abductor en máquina",                descripcion: "5 series x 20 repeticiones (Descanso: 1-2 min).",          tips: ["Abrir hasta el rango máximo cómodo.", "Mantener la espalda apoyada."],                       video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/abductor.jpg" },
  },
  indicesDorsal: {
    jalonAltoCerrado:   { titulo: "Jalón alto agarre cerrado",            descripcion: "4 series x 12-25 repeticiones (Descanso: 2 min).", tips: ["Llevar la barra hasta el pecho.", "Codos hacia abajo y atrás."],                   video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/jalon-alto.jpg" },
    jalonSentadoPolea:  { titulo: "Jalón sentado polea baja",             descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",    tips: ["Tirar con los codos.", "Torso ligeramente inclinado hacia atrás."],               video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/jalon-sentado.jpg" },
    jalonMaquinaHammer: { titulo: "Jalón máquina Hammer agarre neutro",   descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",    tips: ["Agarre neutro para mayor activación.", "Contraer la espalda al final."],          video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/jalon-hammer.jpg" },
    remoMancuerna:      { titulo: "Remo con mancuerna",                   descripcion: "4 series x 15 repeticiones por brazo (Descanso: 2 min).", tips: ["Apoyar rodilla y mano en el banco.", "Subir el codo lo más alto posible."],  video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/remo-mancuerna.jpg" },
    polichilenos:       { titulo: "Polichilenos",                         descripcion: "4 series x 25 repeticiones (Descanso: 1 min).",     tips: ["Movimiento explosivo.", "Mantener el ritmo constante."],                          video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/polichilenos.jpg" },
    jalonPieBrazos:     { titulo: "Jalón de pie brazos extendidos polea", descripcion: "4 series x 15 repeticiones (Descanso: 2 min).",    tips: ["Brazos casi extendidos.", "Contraer la espalda al bajar."],                       video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/jalon-pie.jpg" },
    bancoLumbar:        { titulo: "Banco lumbar",                         descripcion: "4 series x 10-12 repeticiones (Descanso: 2 min).",  tips: ["Bajar controlado hasta 90°.", "No hiperextender en la subida."],                  video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/banco-lumbar.jpg" },
  },
  indicesPectoral: {
    pressAltoBarra:       { titulo: "Press alto con barra",               descripcion: "4 series x 12 repeticiones (Descanso: 2-3 min).", tips: ["Agarre ligeramente más ancho que hombros.", "Bajar controlado hasta el pecho."],  video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/press-alto.jpg" },
    aperturasMancuernas:  { titulo: "Aperturas con mancuernas plano",     descripcion: "4 series x 10 repeticiones (Descanso: 2 min).",    tips: ["Ligera flexión en codos.", "Sentir el estiramiento en la bajada."],              video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/aperturas.jpg" },
    burpees:              { titulo: "Burpees",                            descripcion: "4 series x 10 repeticiones (Descanso: 1-2 min).",  tips: ["Movimiento fluido y continuo.", "Saltar con brazos extendidos arriba."],         video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/burpees.jpg" },
  },
  indicesHombros: {
    elevacionLateral:     { titulo: "Elevación lateral con mancuernas",   descripcion: "4 series x 25 repeticiones (Descanso: 1-2 min).", tips: ["Levantar hasta la altura del hombro.", "Ligera inclinación del torso."],          video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/elevacion-lateral.jpg" },
    elevacionFrontal:     { titulo: "Elevación frontal con mancuernas",   descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).", tips: ["Subir hasta la altura de los ojos.", "No usar impulso del torso."],              video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/elevacion-frontal.jpg" },
    pressMilitarMaquina:  { titulo: "Press militar en máquina",           descripcion: "4 series x 12-15 repeticiones (Descanso: 2 min).", tips: ["Asiento a altura correcta.", "No bloquear los codos arriba."],                   video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/press-militar-maquina.jpg" },
    pressMilitarMancuernas:{ titulo: "Press militar con mancuernas",      descripcion: "4 series x 20 repeticiones (Descanso: 2 min).",   tips: ["Codos a 90° al inicio.", "Mantener el core activo."],                           video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/press-militar-mancuernas.jpg" },
    pecdekInvertido:      { titulo: "Pecdek invertido",                   descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",   tips: ["Brazos a altura de hombros.", "Contraer deltoides posteriores al final."],       video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/pecdek.jpg" },
  },
  indicesBiceps: {
    curlBarraPolea:   { titulo: "Curl barra en polea baja",               descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Codos pegados al cuerpo.", "Contracción completa arriba."],                      video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/curl-barra-polea.jpg" },
    curlMartillo:     { titulo: "Curl con mancuernas martillo",           descripcion: "4 series x 12 repeticiones (Descanso: 1-2 min).", tips: ["Agarre neutro (pulgares arriba).", "No balancear el torso."],                    video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/curl-martillo.jpg" },
    curlPieBarra:     { titulo: "Curl de pie con barra",                  descripcion: "4 series x 12 repeticiones (Descanso: 2 min).",   tips: ["Codos fijos a los costados.", "Bajar de forma controlada."],                    video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/curl-pie-barra.jpg" },
    curlPieMancuernas:{ titulo: "Curl de pie con mancuernas",             descripcion: "4 series x 30 repeticiones (Descanso: 1-2 min).", tips: ["Alternar brazos o simultáneo.", "Girar la muñeca en la subida."],               video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/curl-pie-mancuernas.jpg" },
    curlPiePoleaBaja: { titulo: "Curl de pie polea baja",                 descripcion: "4 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Tensión constante.", "Codos fijos, solo mover el antebrazo."],                   video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/curl-polea-baja.jpg" },
  },
  indicesTriceps: {
    extensionPoleaSoga:   { titulo: "Extensión polea alta soga",          descripcion: "3 series x 20 repeticiones (Descanso: 1-2 min).", tips: ["Separar la soga al final.", "Codos fijos y pegados al cuerpo."],                 video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/extension-soga.jpg" },
    patadaMulaMancuerna:  { titulo: "Patada de mula con mancuerna",       descripcion: "3 series x 15 repeticiones por brazo (Descanso: 1-2 min).", tips: ["Codo fijo a 90° al inicio.", "Extender completamente el brazo atrás."], video: "https://youtu.be/MnQ6MsoPHks", link: "https://youtu.be/MnQ6MsoPHks", imagen: "img/patada-mula.jpg" },
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

  const embedUrl = e.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")
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

    // Limpiar lo que había después del select de grupo en esta columna
    limpiarDespuesDe(colGrupo, selectGrupo)

    const claveGrupo = partesCuerpo[selectGrupo.value]

    // Select de ejercicio con títulos bonitos
    const selectEjercicio = crearSelectEjercicios(colGrupo, claveGrupo)

    selectEjercicio.addEventListener('change', () => {

      // Limpiar imagen y link anterior
      limpiarDespuesDe(colGrupo, selectEjercicio)

      const claveEjercicio = selectEjercicio.value
      const datos = indiceEjercicios[claveGrupo][claveEjercicio]

      // Imagen automática
      const img = document.createElement('img')
      img.src = datos.imagen
      img.alt = datos.titulo
      img.className = 'rutina-img'
      colGrupo.appendChild(img)

      // Link automático al html de ejercicios
      const link = document.createElement('a')
      link.href = linksGrupo[claveGrupo]
      link.textContent = 'Ver ejercicio ↗'
      link.target = '_blank'
      link.className = 'rutina-link'
      colGrupo.appendChild(link)

      // Select de repeticiones
      const reps = ['Sin Repetición','2x20','4x8','4x10','4x12','4x15','4x20','5x8','5x10','5x12','5x15','5x20','5x25','10x4','15x3','20x3','25x4']
      crearSelect(colGrupo, reps, 'Repeticiones')

      // Botón añadir otro grupo al mismo día
      let btnAgregar = divDia.querySelector('.btn-agregar-grupo')
      if (!btnAgregar) {
        btnAgregar = document.createElement('button')
        btnAgregar.textContent = '+ Añadir grupo muscular'
        btnAgregar.className = 'btn-agregar-grupo'
        btnAgregar.onclick = () => añadirGrupo(divDia, filaGrupos)
        divDia.appendChild(btnAgregar)
      }

      // Mostrar exportar
      document.getElementById('seccion-exportar').style.display = 'block'
    })
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