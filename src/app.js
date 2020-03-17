import React from '../node_modules/react';
import Post from './post.js';

class App extends React.Component {
    constructor(props){
        super(props);
    }

render(){
    return  (<div>
                <div class="row">
                    <div class="leftcolumn">
                        <Post/>
                        <Post/>
                    </div>
                    <div class="rightcolumn">
                        <div class="card">
                            <h2>About Me</h2>
                            <div class="fakeimg2">Image</div>
                            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        </div>
                        <div class="card">
                            <h3>Popular Post</h3>
                            <div class="fakeimg2">Image</div><br></br>
                            <div class="fakeimg2">Image</div><br></br>
                            <div class="fakeimg2">Image</div>
                        </div>
                        <div class="card">
                            <h3>Follow Me</h3>
                            <p>Some text..</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}
}

export default App; 

