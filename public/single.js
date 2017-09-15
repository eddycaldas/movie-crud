$(() => {
    const id = getIdFromQuery();
    getOne(id)
        .then(newMovie => {
            $('#title').text(newMovie.title);
            $('#director').text(newMovie.director);
            $('#year').text(newMovie.year);
            $('#rating').text(newMovie.rating);
            $('#editButton').attr('href', `/edit.html?id=${newMovie.id}`)
            $('#image').attr('src', newMovie.url)

        });
});