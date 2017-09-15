const movieApi = 'https://whispering-lake-29230.herokuapp.com/movie'
$(() => {
    $('form').submit((event) => {
        event.preventDefault();
        const title = $('#title').val();
        const director = $('#director').val();
        const year = $('#year').val();
        const rating = $('#rating').val();
        const url = $('#url').val();
        const newMovie = {
            title,
            director,
            year,
            rating,
            url
        };
        $.post(movieApi, newMovie)
            .then(result => {
                console.log(result);
                window.location = `/Movies.html?id=${id}`;
                console.log(window.location);
            }).catch(error => {
                console.error(error)
            });
    });
});