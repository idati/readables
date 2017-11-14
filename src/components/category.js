import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllComments, 
  getAllCategory, 
  getAllPosts, 
  getCommente, 
  createNewComment, 
  upVotePost, 
  upVoteComment, 
  downVotePost, 
  downVoteComment,
  getAllPostsortbytime,
  getAllPostsortbyvote,
  getAllPostfilterbycategory } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index'
import CommentsList from './CommentsList'
import Post from './Post'

class Category extends Component {

	  componentDidMount() {
      let {posts, getAllPostsortbytime, getAllPostsortbyvote, getAllPostfilterbycategory} = this.props
      
      console.log(this)
      let categoryName = this.props.match.params.category
      console.log(categoryName, getAllPostfilterbycategory(categoryName))
      getAllPostfilterbycategory(categoryName)
    
    }


  	render(){
      console.log(this)
      let {post, getAllPostsortbytime, getAllPostsortbyvote} = this.props
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      let k=0

  
  		return(
  			<div>
          <ul>
          <ul><h2> {this.props.match.params.category} </h2></ul>
          <ul>
              <button type='button'
              className={ `btn btn-primary` }
              onClick={() => this.props.history.goBack()}>
              Go Back
            </button>
          </ul>
          </ul>
          <ul>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => getAllPostsortbytime()}>
              sort by time
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => getAllPostsortbyvote()}>
              sort by vote
            </button>
          </ul>
          {post.map((i) => (
            <ul key={i}>
            {console.log('monster',i.id)}
            <Post id={i.id}/>
              
            </ul>
          ))}
  			</div>
  			)

  	}

    }
// <ul><CommentsList id={i[0]} /></ul>
// {i.map((x,j) => (<ul key={j}>{index[j]}{ x }</ul>))}

export function mapDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts()),
    getCommente: (id) => dispatch(getCommente(id)),
    getAllPostsortbytime: () => dispatch(getAllPostsortbytime()),
    getAllPostsortbyvote: () => dispatch(getAllPostsortbyvote()),
    getAllPostfilterbycategory: (categoryName) => dispatch(getAllPostfilterbycategory(categoryName)),

	}

}

export function mapStateToProps({posts}) {
  console.log(posts)
	return{
    post: posts,

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)