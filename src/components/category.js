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
  getAllPostsortbyvote } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index'
import CommentsList from './CommentsList'

class category extends Component {

	  componentDidMount() {
      console.log(this)
      let categoryName = this.props.match.params.category

      // let categoryName = this.props.match.params.category
      // console.log('categoryName',categoryName, this)
      
      // let {post} = this.props
      // this.props.getCommente(post)
      // console.log('this',this.props.posts)
      // this.props.getAllPosts();
        // this.props.getCommente('8xf0y6ziyjabvozdd253nd');
      // console.log('root3', getCommente())
    
    }


  	render(){
      console.log(this)
      let {posts, getAllPostsortbytime, getAllPostsortbyvote} = this.props
      // console.log(getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd'))
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      // this.getall('8xf0y6ziyjabvozdd253nd')
      let k=0
  		return(
  			<div>
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
          {posts.map((i) => (
            <ul key={i}>
              {i.map((x,j) => (<ul key={j}>{index[j]}{ x }</ul>))}
                <ul><CommentsList id={i[0]} /></ul>
            </ul>
          ))}
  			</div>
  			)

  	}

    }

// <CommentList post={i[0]} getCommente={getCommente}/>

export function mapDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts()),
    getCommente: (id) => dispatch(getCommente(id)),
    getAllPostsortbytime: () => dispatch(getAllPostsortbytime()),
    getAllPostsortbyvote: () => dispatch(getAllPostsortbyvote()),
    // sortvoteScore: (posts) => posts.sort(function(a,b) {return a[5] - b[5]}),
    // sorttimestamp: (posts) => posts.sort(function(a,b) {return a[1] - b[1]})
	}

}

export function mapStateToProps({posts}) {
  // console.log(posts)
	return{
    posts: posts,
    // comments: comments
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(category)