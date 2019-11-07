import React from '../node_modules/react';
var Add = (props) => {
    console.log(props)
    return  (<div>
            <form>
                <input type="text" placeholder="Add movie titles here"></input>
                <input type="reset" value="Reset"></input>    
            </form>
            <button onClick={(e) => {props.addFn(e)}}>Add</button>
            </div>
    )
            
}

export default Add; 