function getAllMovies() {
   return fetch(`http://localhost:3030/data/movies`)
        .then(res => res.json())
       
}
export default {
    getAllMovies,
}