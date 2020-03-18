import React from 'react';
class Post extends React.Component {
    constructor(props){
        super(props);
    }

render(){
    return  (<div class="card">
                <h2 class="blogTitle">Title of Post</h2>
                <h5>by PIVOT Agency | Author </h5><h5 class="dates"> Dec 7, 2017</h5>
                <div class="fakeimg1">Image</div>
                <p class="blogText">American pro sports came to a screeching halt on Thursday, with the NBA, NHL and Major League Soccer each suspending season play, and the MLB pushing back spring training and opening day games. The ATP, the US pro tennis organization, cancelled all tournaments for the next six weeks. The cascade of postponements started Wednesday night</p>
            </div>
    );
}
}

export default Post; 