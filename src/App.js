import { connect } from 'react-redux';
import { Route, withRouter, Link, Switch} from 'react-router-dom';

import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from './actions/index'
import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.categories;
  }

  render() {
    const {categories} = this.props
    console.log('root',this)
    return (
      <div></div>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return {

    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),
    
  }
}

function mapStateToProps({categories, posts, comments}) {


    return {
      categories: categories,

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

