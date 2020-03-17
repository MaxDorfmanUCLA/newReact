import React from 'react';
class Post extends React.Component {
    constructor(props){
        super(props);
    }

render(){
    return  (<div class="card">
                <h2 class="blogTitle">Title of Post</h2>
                <h5>by PIVOT Agency | Author | Dec 7, 2017</h5>
                <div class="fakeimg1">Image</div>
                <p>Text..</p>
            </div>
    );
}
}

export default Post; 