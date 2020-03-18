import React from '../node_modules/react';
import Post from './post.js';
//import moment from 'moment';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alert: false,
            adminPost: false,
            blogs: [1,2,3]
        }
    }

    // componentDidMount(){
    //     $.get('/api/blogs')
    //     .then(docs => {
    //       console.log('response from server', docs);
    //       this.setState({blogs: docs});
    //       console.log('state:', this.state.blogs);
    //     });
    //   }

render(){
    var alertMessage = <p></p>
    var newPost = <p></p>
    if (this.state.alert === true){
        alertMessage = <p class="alert1">Only administrators can make new blog posts!</p>
    } 
    if (this.state.adminPost === true) {
        newPost = <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">New Post</button>
    }
    return  (<div>
                <div class="row">
                    <div class="leftcolumn">
                    {this.state.blogs.map(item => (
                        <Post/>
                        ))}
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
                                <input type="text" id="pword" placeholder="Admin Password..."></input><br></br><br></br>
                                <button type="button" onClick={(e) => {e.preventDefault(); var txt = e.target.previousSibling.previousSibling.previousSibling.value; if (txt!=="PVTadmin1") {this.setState({alert: true});} else{this.setState({adminPost: true, alert: false})}}}>Admin Sign in</button><br></br><br></br>
                                {newPost}
                            </form><br></br>
                            {alertMessage}
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a Post</h4>
          </div>
          <div class="modal-body">
            <form>
              <input class="create-input" type="text" placeholder="Post Title"></input><br></br><br></br>
              <input class="create-input" type="text" placeholder="Author"></input><br></br><br></br>
              <input class="create-input" type="text" placeholder="Image URL"></input><br></br><br></br>
              <textarea class="create-body-textarea" placeholder="Post Body"></textarea><br></br><br></br>
              <button class="create-submit-button" onClick={(e) => {this.handleSubmit(e)}}>Save post</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div> 
            </div>
    );
}
}

export default App; 

