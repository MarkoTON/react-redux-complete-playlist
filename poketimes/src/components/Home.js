import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
// preko ovoga se povezujemo sa storom koji se siba preko App-a i tako redom prema svima
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    console.log(this.props);
    const { postsTest } = this.props
    let kokoLoko = this.props.postsTest
    console.log(kokoLoko);
    console.log(postsTest);
    const postList = postsTest.length ? (
      postsTest.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

// Init the props or something like that. Ovo je govno tesko ali jbg valjda cu razumeti
const mapStateToProps = (state) => {
  console.log(state)
  return {
    postsTest: state.posts
  }
}
// console.log(mapStateToProps);
// console.log(mapStateToProps(Home));

// // Znaci samo jedna funkcija moze da to sve povuce, zanimalo me da li mogu nekako to da razgradim.
// function randomTest (state){
//   return {
//     posts: state.posts
//   }
// }

// console.log(randomTest);

export default connect(mapStateToProps)(Home)