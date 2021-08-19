let baseUrl = 'http://localhost:3030/data';
let movieListElement = document.getElementById('movie-list');
document.getElementById('load-movies').addEventListener("click", () => {
    fetch(`${baseUrl}/movies`)
        .then(res => res.json())
        .then(movies => {
            movies.forEach(movie => {
                let liElement = document.createElement('li');
                liElement.textContent = movie.title;

                movieListElement.appendChild(liElement);
            });
        })
});