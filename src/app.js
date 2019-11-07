import React from '../node_modules/react';
import Search from './search.js';
import Add from './add.js';
import WatchedButton from './watchedButton.js';
var movies = [];
var watchedMovies = [];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieList: movies,
            watchedMovieList: watchedMovies
        }
        this.updateState = this.updateState.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.watched = this.watched.bind(this);
    }
addMovie(e){
    e.preventDefault();
    console.log("movie added");
    var str = e.target.previousSibling.firstChild.value;
    movies.push({title: str})
    this.setState({
        movieList: movies
    });
}

watched(e){
    //24
    //console.log(e.target.previousSibling.innerHTML);
    //var str = e.target.previousSibling.innerHTML;
    console.log(e.target.parentNode.innerHTML);
    var str = e.target.parentNode.innerHTML;
    str = str.slice(0,(str.length-24))
   console.log(typeof str);
    for (var i=0; i<movies.length; i++){
        console.log('in for loop');
        console.log(movies[i].title);
        console.log(str);
        if (movies[i].title === str){
            console.log('in if statement');
            watchedMovies.push(movies[i]);
            movies.splice(i, 1);  
             
        }
    }
    this.setState({
        movieList: movies
    });
}

updateState(e){
    e.preventDefault();
    console.log("i got clicked");
    console.log(e.target.previousSibling.firstChild.value);
    var str = e.target.previousSibling.firstChild.value;
    var movieMatch = [];
    for (var m of movies){
        console.log('m', m);
        if (m.title.includes(str)){
            movieMatch.push(m);
        }
    }
    this.setState({
        movieList: movieMatch
    });
}

render(){
    return  (<div>
                <Add addFn={this.addMovie}/>
                <Search updateFn={this.updateState}/>
                <div><button>Watched</button><button>Unwatched</button></div>
                <ul>
                    {this.state.movieList.map((item, i) => {
                        return (<div>
                        <li key={i}>{item.title}<WatchedButton watchedFn={this.watched}/></li>
                        </div>
                        );
                    })}
                </ul>
            </div>
    );
}
}

export default App; 

