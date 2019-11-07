import React from '../node_modules/react';
import Search from './search.js';
import Add from './add.js';
var movies = [];
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieList: movies
        }
        this.updateState = this.updateState.bind(this);
        this.addMovie = this.addMovie.bind(this);
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
                <ol>
                    {this.state.movieList.map((item, i) => {
                        return <li key={i}>{item.title}</li>
                    })}
                </ol>
            </div>
    );
}
}

export default App; 

