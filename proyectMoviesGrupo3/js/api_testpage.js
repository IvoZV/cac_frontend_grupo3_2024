
//codigo para el consumo de API

//funcion para crear las tarjetas de las peliculas
function crearTarjetPelicula(pelicula){
    const card = document.createElement('div');
    card.classList.add('card-Pelicula');
    
    const cardContenedor = document.createElement('div');
    cardContenedor.classList.add('card-Cont');

    const cardImg = document.createElement('img');
    cardImg.classList.add('stylecardImg');
    cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    cardImg.alt = pelicula.title;
    cardImg.loading = "lazy";

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-Body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-Title');
    cardTitle.textContent = pelicula.title;

    cardBody.appendChild(cardTitle);
    cardContenedor.appendChild(cardImg);
    cardContenedor.appendChild(cardBody);
    
    card.appendChild(cardContenedor);

    return card;
}

//datos de la API
const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method : 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
};

//funcion para cargar las peliculas en la section de la pagina
const cargarPeliculas = async (page = 1) => {
    try{
        const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
        const data = await response.json();
        const movies = data.results;
        const sectionApi = document.getElementById('sectionApi');
        sectionApi.innerHTML = '';
        movies.forEach(movie => {
            const cardPelicula = crearTarjetPelicula(movie);
            sectionApi.appendChild(cardPelicula);
        });
    } catch (error){
        console.error(error);
    }
};

document.addEventListener("DOMContentLoaded", () => { cargarPeliculas(1)});