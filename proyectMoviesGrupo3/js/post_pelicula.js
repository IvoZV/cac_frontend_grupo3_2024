document.addEventListener('DOMContentLoaded', async () => {
    const formNuevaPelicula = document.getElementById('formAdmPeliculas');

    formNuevaPelicula.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formNuevaPelicula);
        const titulo = formData.get('admTit');
        const fechaEstreno = formData.get('admFecEstreno');
        const genero = formData.get('admGenero');
        const duracion = formData.get('admDuracion');
        const director = formData.get('admDirector');
        const reparto = formData.get('admReparto');
        const sinopsis = formData.get('admSinopsis');
        const imagen = formData.get('admImagen');

        if (titulo === '' || fechaEstreno === '' || genero === '' || duracion === '' || director === '' || reparto === '' || sinopsis === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        const imageName = imagen.name;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: titulo,
                fechaEstreno: fechaEstreno,
                genero: genero,
                duracion: duracion,
                director: director,
                reparto: reparto,
                sinopsis: sinopsis,
                imagen: imageName
            })
        };

        try {
            const response = await fetch('http://localhost:8080/apisimple/peliculas', options);

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (jsonError) {
                    errorData = { message: 'Error desconocido del servidor' };
                }
                console.error('Error en la respuesta del servidor:', errorData);
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (response.status === 201) {
                alert('Pelicula agregada correctamente');
                formNuevaPelicula.reset();
                location.reload();
            } else {
                alert('Error al agregar la pelicula');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error al agregar la pelicula');
        }
    });
});