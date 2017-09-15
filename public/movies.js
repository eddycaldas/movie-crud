console.log("i am online");

const movieApi = 'https://whispering-lake-29230.herokuapp.com/movie'

$(document).ready(function() {
    $.get(movieApi)
        .then(showMovie)
});

// var $eachItems = "#movie-items li";
var $movieItem;

function showMovie(data) {
    data.forEach(function(items) {
        // console.log(items)
        $movieItem = $(`<tr> 
      <td>${items.title}</td>
      <td>${items.director}</td>
      <td>${items.year}</td>
      <td>${items.rating}</td>
      <td><button data-id="${items.id}" class="delete-movie">Delete Movie</button></td>
      <td><button data-id="${items.id}"class="edit">Edit Movie</button></td>
    </tr>`)



        $movieItem.attr('data-title', items.title)
        $movieItem.attr('data-director', items.director)
        $movieItem.attr('data-year', items.year)
        $movieItem.attr('data-rating', items.rating)
        $(".movie-list").append($movieItem)
    })
}

$(document).on("click", '.delete-movie', deleteMovie);
$(document).on("click", '.edit', editMovie);

function deleteMovie(event) {
    const id = event.target.dataset.id;
    $.ajax({
        type: 'DELETE',
        dataType: 'json',
        url: `${movieApi}/${id}`,
    }).then(result => {
        window.location = `movies.html?id=${id}`;
    });
}

function editMovie(event) {
    const id = event.target.dataset.id;
    window.location = `edit.html?id=${id}`;
}