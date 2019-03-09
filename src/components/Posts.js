import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPostsAndUsers } from '../actions';
import Header from './Header';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  showList() {
    return this.props.posts.map( ({id, userId}) => {
      return(
        <div>
          <div key={id}>{userId}</div>
          <Header id={userId}/>
        </div>
      ) 
    })
  }
  render() {
    return <div>Posts: {this.showList()}</div>
  }
}
const mapStateToProps = state =>  {
  return { posts : state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(Posts);