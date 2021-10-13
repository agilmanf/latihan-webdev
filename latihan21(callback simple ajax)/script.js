// $('.search-button').on('click', function(){
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=6b3dd1fe&s=" + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach( m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);  
//             console.log(movies);
    
//             // tombol di klik
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=6b3dd1fe&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                     $('.modal-body').html(movieDetail);
//                     },
//                     error: e => {
//                         console.log(e.responseText); }
//                 });
//             });
    
//         },
//         error: e => {
//             console.log(e.responseText);
//         }
//     });  
// })

const movieContainer = document.querySelector('.movie-container');
const searchButton = document.querySelector('.search-button');
const detailContainer = document.querySelector('.modal-body');

searchButton.addEventListener('click', async function(){
    try {
        const inputKeyword = document.querySelector('.input-keyword').value;
        const movies = await getMovies(inputKeyword);
        //console.log(movies);
        updateMoviesUI(movies);
    }
    catch (err) {
        alert(err);
    }
    
})

document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
        try {
            const imdbid = e.target.dataset.imdbid;
            const movieDetails = await getMovieDetails(imdbid);
            updateMovieDetailsUI(movieDetails);
        }
        catch (err) {
            alert(err);
        }
    }    
})

function getMovies (keyword) {
    return fetch("http://www.omdbapi.com/?apikey=6b3dd1fe&s=" + keyword)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if(data.Response === 'False') {
            throw new Error(data.Error);
        }
        return data.Search;
    });
}

function getMovieDetails(imdbid) {
    return fetch("http://www.omdbapi.com/?apikey=6b3dd1fe&i=" + imdbid)
    .then(response => response.json());
}

function updateMoviesUI(movies) {
    let cards = '';
    movies.forEach(movie => {
        cards += showCards(movie);
    });
    movieContainer.innerHTML = cards;
}

function updateMovieDetailsUI(movie) {
    detailContainer.innerHTML = showMovieDetail(movie);
}


function showCards(m) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-success modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class='img-fluid' alt="">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                    <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                    <li class="list-group-item"><strong>Writer : ${m.Writer}</strong></li>
                    <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                    </ul>
                </div>
                </div>
            </div>`
}