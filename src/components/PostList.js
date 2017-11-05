import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';

class PostList extends Component {

	componentDidMount() {
        this.props.getAllPosts();
    }

  	render(){
  		// const {categories} = this.props.categories
  		console.log('root3', this)
  		return(
  			<div>			
  			</div>
  			)

  	}

}

export function mapDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts())
	}

}

export function mapStateToProps({posts}) {

	return{
    posts: posts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)