console.log('add new movie');

const movieApi = 'https://whispering-lake-29230.herokuapp.com/movie'


$(() => {
    $('form').submit((event) => {
        event.preventDefault();
        const title = $('#title').val();
        const director = $('#director').val();
        const year = $('#year').val();
        const rating = $('#rating').val();
        const url = $('#url').val();
        // const add = $('#add').attr('href', `movies.html?id=${movie.id}`);

        const newMovie = {
            title,
            director,
            year,
            rating,
            url
        };

        // $('#add-movie-button').click((event) => {
        //   event.preventDefault();
        //   const id = event.target.dataset.id;
        // 
        //   $.ajax({
        //     type: 'PUT',
        //     dataType: 'json',
        //     url: `${movieApi}/${id}}`
        //     // data: newMovie,
        //   }).then(result => {
        //     window.location = `movies.html?id=${id}`;
        //   });
        // });

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