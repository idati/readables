import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllComments, getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index'
import {CommentsList} from './CommentsList'

export class PostList extends Component {

	  componentDidMount() {
      // let {post} = this.props
      // this.props.getCommente(post)
      // console.log('this',this.props.posts)
      this.props.getAllPosts();
        // this.props.getCommente('8xf0y6ziyjabvozdd253nd');
      // console.log('root3', getCommente())
    
    }

  	render(){
      console.log(this)
      let {posts} = this.props
      // console.log(getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd'))
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      // this.getall('8xf0y6ziyjabvozdd253nd')
      let k=0
  		return(
  			<div>
          {posts.map((i) => (
            <ul key={i}>
            <CommentsList/>
            {i.map((x,j) => (<ul key={j}>{index[j]}{ x }</ul>))}
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
    // getAllComments: () => dispatch(getAllComments())
	}

}

export function mapStateToProps({posts}) {

	return{
    posts: posts,
    // comments: comments
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)