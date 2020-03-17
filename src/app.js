import React from '../node_modules/react';
import Post from './post.js';
//import moment from 'moment';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alert: false,
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
    if (this.state.alert === true){
        alertMessage = <p>Only administrators can make new blog posts</p>
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
                                <input type="text" id="uname" placeholder="Username..."></input><br></br><br></br>
                                <input type="text" id="pword" placeholder="Password..."></input><br></br><br></br>
                                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal" onClick={(e) => {e.preventDefault(); this.setState({alert: true});}}>New Post</button><br></br>
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

