import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';

export function getFormattedDate(_date) {
    var date = new Date(_date)
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec;

    return str;
}

class App extends Component {
  render() {
    const {categories, posts, comments} = this.props
    console.log('root',this)
    return (
      <div>
      </div>

    );
  }
}

export function mapDispatchToProps(dispatch) {

  return {
    // posts: dispatch(getAllPosts()),
    // categories: dispatch(getAllCategory()),


    getCommente: (id) => dispatch(getCommente(id)),
    createNewComment: (comments) => dispatch(createNewComment(comments)),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),

    upVoteComment: (id) => dispatch(upVoteComment(id)),
    downVoteComment: (id) => dispatch(downVoteComment(id)),
    
  }
}

export function mapStateToProps(state, ownProps, dispatch) {

  const {categories, posts, comments} = state
    console.log(state)
    return {
    categories: categories,
    posts: posts,
    // comments: comments
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
