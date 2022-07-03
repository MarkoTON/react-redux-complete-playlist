import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.postTest.id);
    this.props.history.push('/');
  }
  render() {

    const post = this.props.postTest ? (
      <div className="post">
        <h4 className="center">{this.props.postTest.title}</h4>
        <p>{this.props.postTest.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(ownProps.match);
  console.log(ownProps.match.params);
  console.log(ownProps.match.params.post_id);
  // post_id - tako je nazvan u ramom ruteru
  let id = ownProps.match.params.post_id;
  return {
    postTest: state.posts.find(post => post.id === id)
  }
}

// Ovo moze da se nazove kako god zelimo
const mapDispatchToPropsTest = (dispatch) => {
  console.log(dispatch);
  // Test 'id' dodat da vidim sta ce konzola da izbaci
  console.log(dispatch({type: 'DELETE_POST', id: 1}));

  return {
    // Ovde deletePost dobija 'id' koji potom siba dalje. 
    deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToPropsTest)(Post)
