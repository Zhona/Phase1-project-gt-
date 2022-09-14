//this will fetch the data and load it up
//const titleCards = document.querySelector(".movieCards")
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cbb53a38daad4a38723daab094adb724')
.then ((res) => res.json())
.then((movie) =>  {
    console.log(movie.results, "fetched form database, top rated");
    //added data to variable
    //const topRated = movie.results
    //console.log(topRated, "topRated")
    for(let i = 0; i < movie.results.length; i++){
        renderMovies(movie.results[i]);
    }

});

// second page of json data 
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cbb53a38daad4a38723daab094adb724')
.then ((res) => res.json())
.then((movie) =>  {
    console.log(movie.results, "fetched form database, now playing");
    //added data to a variable
    //const nowPlaying = movie.results 
    //console.log(nowPlaying, "nowPlaying")
    for(let i = 0; i < movie.results.length; i++){
        renderNowPlaying(movie.results[i]);
    }
});

function clickFunction () {
    let container = document.querySelector('#container');
    let button = document.querySelector('#toggleMovies');
    let h1 = document.querySelector('h1')
    let navOne = document.querySelector('#popularMovies');
    let navTwo = document.querySelector('#nowPlaying');

    if(button.innerText === 'Now playing') {
        
        h1.innerText = 'Now Playing'
        navOne.style.display = 'none';
        navTwo.style.display = 'flex'
        button.innerText = 'Popular Movies'

    } else if(button.innerText === 'Popular Movies') {

        h1.innerText = 'Popular Movies'
        navOne.style.display = 'flex';
        navTwo.style.display = 'none';
        button.innerText = 'Now Playing'

    }
    container.append(button, navOne, navTwo);
}


////////////////////////  MAKES NOW PLAYING LOAD  ////////////////////////// 
function renderNowPlaying(movie) {
    let panel = document.querySelector("#nowPlaying")
    let image = document.createElement("img")
    image.src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    panel.append(image)
// for the search bar, this displays the images 
    // let titleCard = document.createElement("li")
    // titleCard.id = ("movieList")
    // titleCard.innerText = movie.title
    // titleCards.append(titleCard)

image.addEventListener("click", () => {
    
    renderDetails(movie)
})
image.addEventListener("mouseover" , () => {
    image.style.filter = "grayscale(0%)"
})
image.addEventListener("mouseout" , () => {
    image.style.filter = "grayscale(100%)"
})
}



////////////////////////  MAKES POPULAR MOVIES LOAD  ////////////////////////// 
function renderMovies(movie) {
    let panel = document.querySelector("#popularMovies")
    let image = document.createElement("img")
    image.src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    panel.append(image)
// for the search bar, this displays the images 
    // let titleCard = document.createElement("li")
    // titleCard.id = ("movieList")
    // titleCard.innerText = movie.title
    // titleCards.append(titleCard)

image.addEventListener("click", () => {
    renderDetails(movie)
})
image.addEventListener("mouseover" , () => {
    image.style.filter = "grayscale(0%)"
})
image.addEventListener("mouseout" , () => {
    image.style.filter = "grayscale(100%)"
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

//button that toggle night and light mode 
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () =>{
    //change theme of website
    document.body.classList.toggle("dark")
})

//make movie toggle




