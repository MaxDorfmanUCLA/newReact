import React from '../node_modules/react';
import Search from './search.js';
var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'}
  ];
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieList: movies
        }
        this.updateState = this.updateState.bind(this);
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

