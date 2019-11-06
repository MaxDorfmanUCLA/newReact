import React from '../node_modules/react';
var Search = (props) => {
    console.log(props)
    return  (<div>
            <form>
                <input type="text"></input>
                
            </form>
            <button onClick={(e) => {props.updateFn(e)}}>Go!</button>
            </div>
    )
            
}

export default Search; 

// onClick={() => {this.props.updateFn()}

// never use this.props with functional component
// if class component use this