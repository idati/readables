import { connect } from 'react-redux';
import { Route, withRouter, Link, Switch} from 'react-router-dom';

import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from './actions/index'
import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import PostList from './components/PostList';
import Category from './components/Category';
import Post from './components/Post';
import P404 from './components/P404';
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
        <Switch>
          <Route exact path="/" render=
          {() =>
            <CategoryList />
          }/>
          <Route exact path="/:category" render={(props) =>
          <Category {...props}/>
          }
          />
          <Route exact path="/:category/:id" render={(props) =>
          <Post {...props}/>
          }
          />
          <Route path="*" render={(props) =>
          <P404 />
          }
          />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return {

    getAllCategory: () => dispatch(getAllCategory())
  }
}

function mapStateToProps({categories}) {


    return {
      categories: categories,

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

