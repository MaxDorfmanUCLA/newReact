import React from '../node_modules/react';
import Post from './post.js';
//import moment from 'moment';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alert: false,
            adminPost: false,
            blogs: [1]
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
        alertMessage = <h5 class="alert1">Only administrators can make new blog posts!</h5>
    } 
    if (this.state.adminPost === true) {
        newPost = <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal2">New Post</button>
    }
    return  (<div>
                <div class="row">
                    <div class="leftcolumn">
                    {this.state.blogs.map(item => (
                        <Post/>
                        ))}
                    </div>
                    <div class="rightcolumn">
                        <div class="card2">
                            <h3 class="subscribe">Subscribe to our Blog to Join the Discussion</h3><br></br>
                            <form action="/action_page.php">
                                <input type="text" id="fname" placeholder="First Name"></input><br></br><br></br>
                                <input type="text" id="lname" placeholder="Last Name"></input><br></br><br></br>
                                <input type="text" id="email" placeholder="Email"></input><br></br><br></br><br></br>
                                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Subscribe</button>
                            </form><br></br>
                        </div>
                        <div class="card2">
                        <h3 class="adminSignIn">Sign in as a Pivot Administrator to Create a New Blog Posts</h3><br></br>
                            <form action="/action_page.php">
                                <input type="text" id="pword" placeholder="Admin Password..."></input><br></br><br></br><br></br>
                                <button id="sub1" type="button" class="btn btn-info" onClick={(e) => {e.preventDefault(); var txt = e.target.previousSibling.previousSibling.previousSibling.previousSibling.value; console.log(txt); if (txt!=="PVTadmin1") {this.setState({alert: true, adminPost: false});} else{this.setState({adminPost: true, alert: false})}}}>Sign In To Make a Post</button><br></br><br></br>
                                {newPost}
                            </form><br></br>
                            {alertMessage}
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a Post</h4>
          </div>
          <div class="modal-body">
            <form>
              <h5>Email: johndoe@gmail.com</h5><br></br><br></br>
              <input class="create-input" type="text" placeholder="Username"></input><br></br><br></br>
              <input class="create-input" type="text" placeholder="Password"></input><br></br><br></br>
              <input class="create-input" type="text" placeholder="Confirm Password"></input><br></br><br></br>
              <button class="create-submit-button" onClick={(e) => {this.handleSubmit(e)}}>Sign Up</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div> 
    <div class="modal fade" id="myModal2" role="dialog">
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

