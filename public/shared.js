const movieApi = 'https://whispering-lake-29230.herokuapp.com/movie'

function getIdFromQuery() {
    const parsedParts = window.location.search.split('=');
    const id = parsedParts[1];
    return id;
}

function getOne(id) {
    return $.get(`${movieApi}/${id}`)
}