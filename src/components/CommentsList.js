import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllComments, getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
// import {getAllCommentsFromPost} from '../api/index'
// import {CommentList} from './CommentList'

export class CommentsList extends Component {

	  componentDidMount() {
      let {comments} = this.props
      // this.props.getCommente(post)
      // console.log('this',this.props.posts)
      // this.props.getAllPosts();
        // this.props.getCommente('8xf0y6ziyjabvozdd253nd');
      // console.log('root3', getCommente())
    
    }
    render(){
      console.log(this)
      return (
        <div>
        Test
        </div>
        )
    }

  }


export function mapDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts()),
    getCommente: (id) => dispatch(getCommente(id)),
    // getAllComments: () => dispatch(getAllComments())
	}

}

export function mapStateToProps({posts}) {

	return{
    posts: posts,
    // comments: comments
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)