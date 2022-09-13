//this will fetch the data and load it up
//const titleCards = document.querySelector(".movieCards")
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cbb53a38daad4a38723daab094adb724')
.then ((res) => res.json())
.then((movie) =>  {
    console.log(movie.results, "fetched form database");
    for(let i = 0; i < movie.results.length; i++){
        renderMovies(movie.results[i]);
    }

});

//Hello

// second page of json data 
// fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cbb53a38daad4a38723daab094adb724c ')
// .then ((res) => res.json())
// .then((movie) =>  {
//     console.log(movie.results, "fetched form database");
//     for(let i = 0; i < movie.results.length; i++){
//         renderMovies(movie.results[i]);
//     }

// });
//makes the movie images load 
function renderMovies(movie) {
    let panel = document.querySelector(".genreButton")
    let image = document.createElement("img")
    image.src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    panel.append(image)
// for the search bar, this displays the images 
    // let titleCard = document.createElement("li")
    // titleCard.id = ("movieList")
    // titleCard.innerText = movie.title
    // titleCards.append(titleCard)

image.addEventListener("click", () => {
    console.log("clicked movie")
    renderDetails(movie)

image.addEventListener("mouseover", () => {

})
})
}
// display when we click the movie images
function renderDetails(movie) {

let movieTitle = document.querySelector("#title")
movieTitle.textContent = movie.title
let language = document.querySelector("#language")
language.innerText =`Original Language: ${movie.original_language}`
let releaseDate = document.querySelector("#release_date")
releaseDate.innerText =  movie.release_date
let voteAverage = document.querySelector("#vote_average")
voteAverage.innerText = movie.vote_average
let description = document.querySelector("#overview")
description.innerText = movie.overview
console.log(movie.title)
let image = document.querySelector("#movieImage")
image.src = image.src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
}





