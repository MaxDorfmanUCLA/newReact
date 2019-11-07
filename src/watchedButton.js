import React from '../node_modules/react';

var WatchedButton = (props) => {
    return  (  <button onClick={(e) => {props.watchedFn(e)}}>Watched</button>
    )     
}

export default WatchedButton; 