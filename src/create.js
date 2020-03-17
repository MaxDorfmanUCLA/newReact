import React from 'react';
//import $ from "jquery";

class Create extends React.Component{
  constructor(props){
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   $.post('/api/blogs')
  //   .then(() => {
  //     console.log('sending created blog post to server');
  //   });
  // }

  render(){
    return (
<div class="create">
  <div class="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input class="create-input" type="text"  placeholder="Post Title"></input><br></br>
      <input class="create-input" type="text"  placeholder="Author"></input><br></br>
      <input class="create-input" type="text"  placeholder="Image URL"></input><br></br>
      <textarea class="create-body-textarea"  placeholder="Post Body"></textarea><br></br>
      <button class="create-submit-button" onClick={(e) => {this.handleSubmit(e)}}>Save post</button>
    </form>
  </div>
  <div class="create-preview">
    <h2>PREVIEW</h2>
  </div>
</div>
    )
  }
}
export default Create;