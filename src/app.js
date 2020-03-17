import React from '../node_modules/react';
import Post from './post.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alert: false
        }
    }

render(){
    var alertMessage = <p></p>
    if (this.state.alert === true){
        alertMessage = <p>Only administrators can make new blog posts</p>
    }
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
                            <form action="/action_page.php">
                                <input type="text" id="uname" value="Username..."></input><br></br><br></br>
                                <input type="text" id="pword" value="Password..."></input><br></br><br></br>
                                <button onClick={(e) => {this.setState({alert: true})}}>New Post</button>
                            </form> 
                            {alertMessage}
                        </div>
                    </div>
                </div>
            </div>
    );
}
}

export default App; 

