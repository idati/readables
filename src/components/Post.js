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
  getAllPostfilterbycategory,
  getPostbyId } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index'
import CommentsList from './CommentsList'

class Post extends Component {

	  componentDidMount() {
      let {id, post, posts, getAllPostsortbytime, getAllPostsortbyvote, getAllPostfilterbycategory, getPostbyId} = this.props
      console.log(id)
      getPostbyId(id)
      // console.log(getPostbyId(id))
      // let categoryName = this.props.match.params.category
      // console.log(categoryName, getAllPostfilterbycategory(categoryName))
      // getAllPostfilterbycategory(categoryName)
    
    }


  	render(){
      console.log(this)
      let {id, post, posts, getAllPostsortbytime, getAllPostsortbyvote, getPostbyId, upVote, downVote} = this.props
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      let k=0

  
  		return(
  			<div>
          {posts[0].map((i,j) => (
            <ul key={i}>
              {index[j]}{i}
            </ul>))}
          <ul>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => upVote(id)}>
              upVote
            </button>
          </ul>
  			</div>
  			)

  	}

    }


        // <ul>
        //   <ul>
        //       <button type='button'
        //       className={ `btn btn-primary` }
        //       onClick={() => this.props.history.goBack()}>
        //       Go Back
        //     </button>
        //   </ul>
        //   </ul>
        //   <ul>
        //     <button type='button'
        //       className={ `btn btn-primary` }
        //       onClick={() => getAllPostsortbytime()}>
        //       sort by time
        //     </button>
        //     <button type='button'
        //       className={ `btn btn-primary` }
        //       onClick={() => getAllPostsortbyvote()}>
        //       sort by vote
        //     </button>
        //   </ul>

export function mapDispatchToProps(dispatch) {

	return{
		// getAllPosts: () => dispatch(getAllPosts()),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),
  //   getCommente: (id) => dispatch(getCommente(id)),
  //   getAllPostsortbytime: () => dispatch(getAllPostsortbytime()),
  //   getAllPostsortbyvote: () => dispatch(getAllPostsortbyvote()),
    getPostbyId: (id) => dispatch(getPostbyId(id)),

	}

}

export function mapStateToProps({posts}) {
  console.log('??',posts)
	return{
    posts: posts,

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)