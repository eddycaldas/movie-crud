$(() => {
    const id = getIdFromQuery();
    getOne(id)
        .then(newMovie => {
            console.log(newMovie)
            $('#img').attr('src', newMovie.url);
            $('#url').val(newMovie.url);
            $("#title").val(newMovie.title)
            $('#director').val(newMovie.director);
            $('#year').val(newMovie.year);
            $('#rating').val(newMovie.rating);
            $("#button-update").attr("href", `movies.html?id=${newMovie.id}`)
            //   })
            // })

            $('#button-update').click((event) => {
                event.preventDefault();
                $.ajax({
                    type: 'PUT',
                    dataType: 'json',
                    url: `${movieApi}/${id}`,
                    data: newMovie,

                }).then(result => {
                    window.location = `movies.html?id=${id}`;
                })
            })

        });
})