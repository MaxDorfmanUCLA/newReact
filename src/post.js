import React from 'react';
class Post extends React.Component {
    constructor(props){
        super(props);
    }

render(){
    return  (<div class="card">
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div class="fakeimg1">Image</div>
                <p>React text..</p>
            </div>
    );
}
}

export default Post; 