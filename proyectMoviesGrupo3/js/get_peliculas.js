document.addEventListener('DOMContentLoaded', () => {
    async function traerApi() {
        try {
            const tabla = document.getElementById('tablaPeliculas');
            const response = await fetch('http://localhost:8080/apisimple/peliculas', {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            });
            const data = await response.json();
            const peliculas = data;

            tabla.innerHTML = '';

            peliculas.forEach(pelicula => {
             
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pelicula.idPelicula}</td>
                    <td>${pelicula.titulo}</td>
                    <td>${pelicula.genero}</td>
                    <td><img src="../assets/img/tendencias/${pelicula.imagen}" alt="${pelicula.titulo}" width="150"></td>
                    <td><button type="button" class="btnModificar">Modificar</button><button class="btnEliminar">Eliminar</button></td>
                `;
                tabla.appendChild(row);
                console.log(pelicula);
            });
        } catch (error) {
            console.error(error);
        }
    }

    traerApi();
});