let contenedor = document.getElementById("contenedorProyectos")

proyectos.forEach((proyecto)=>{
    contenedor.innerHTML += `
    <div class="card" style="color: black;">
    <div class="card-header">
        <img src="${proyecto.imagen}" alt="Gag en Gug Proyecto">
    </div>
    <div class="card-body">
        <h5 class="card-title">${proyecto.titulo}</h5>
        <p class="card-text">${proyecto.texto}</p>
        <a target="_blank" href="${proyecto.repositorio}"
            class="btn btn-primary bg-black"><i class='bx bxl-github'></i></a>
        <a target="_blank" href="${proyecto.link}"
            class="btn btn-primary"><i class='bx bx-link-external'></i></a>

    </div>
</div>
    `
})

