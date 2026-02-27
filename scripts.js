//Ocultar elementos anteriores y mostrar los que se dan click

function mostrar(id) {

    //Ocultar los 5 ejercicios y su menú "planes"

    document.querySelectorAll("#cuadriceps, #pecho, #femoral, #espalda, #gluteos, #planes-ejercicios").forEach(e => {
        e.style.display = "none"
    });

    document.getElementById(id).style.display = "block"

}

indiceEjercicios = {

    sentadilla : {
        titulo : "Sentadilla libre",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tips : "Bajar mínimo hasta 90°.",
        video : "https://youtu.be/MnQ6MsoPHks",
        link : "https://youtu.be/MnQ6MsoPHks"
    }



}

function abrirModal(id) {

    const e = indiceEjercicios[id]
    document.getElementById("modal-titulo").textContent = e.titulo
    document.getElementById("modal-descripcion").textContent = e.descripcion
    document.getElementById("modal-tips").textContent = e.tips
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
