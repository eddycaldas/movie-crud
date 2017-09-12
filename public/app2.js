console.log("i am online");

const movieApi = 'https://whispering-lake-29230.herokuapp.com/movie'

$(document).ready(function() {
  $.get(movieApi)
    .then(showMovie)
});

var $eachItems = "#movie-items li";
var $movieItem;

function showMovie(data) {
data.forEach(function(items) {
    // console.log(items)
    $movieItem = $(`<tr> 
      <td>${items.title}</td>
      <td>${items.director}</td>
      <td>${items.year}</td>
      <td>${items.rating}</td>
      <td><button>Delete Movie</button></td>
      <td><button>Edit</button></td>

    </tr>`)  
      $movieItem.attr('data-title',items.title)
      $movieItem.attr('data-director', items.director)
      $movieItem.attr('data-year', items.year)
      $movieItem.attr('data-rating', items.rating)
      $(".movie-list").append($movieItem)
  })
}










// $.get("https://whispering-lake-29230.herokuapp.com/movie")
// .then (function(data) {
//   var array = []
//   for (var i=0; i < data.length; i++) {
//    console.log(data[i])
//      array.push(data[i])
//   }
//     console.log(array);
// })