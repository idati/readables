import { connect } from 'react-redux';
import { Route, withRouter, Link, Switch} from 'react-router-dom';

import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from './actions/index'
import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.getAllCategory();
  }

  render() {
    const {categories} = this.props
    console.log('root',this)
    return (
      <div>
        <Route exact path="/" render=
        {() =>
          <CategoryList/>
        }/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return {

    getAllCategory: () => dispatch(getAllCategory())
  }
}

function mapStateToProps({categories, posts, comments}) {


    return {
      categories: categories,

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

