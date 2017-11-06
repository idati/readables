import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllComments, getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index'

export class PostList extends Component {

	  componentDidMount() {
      console.log('this',this.props.posts)
        this.props.getAllPosts();
        // this.props.getCommente('8xf0y6ziyjabvozdd253nd');
    }

    getall(id) {
      this.props.getCommente(id)
    }


  	render(){
      let {posts, getCommente} = this.props
      // console.log(getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd'))
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      // this.getall('8xf0y6ziyjabvozdd253nd')
  		console.log('root3', this)
      let k=0
  		return(
  			<div>
          {posts.map((i) => (
            <ul key={i}>
            {this.getall(i[0])}
            {i.map((x,j) => (<ul key={j}>{index[j]}{ x }</ul>))}
            </ul>
            ))}
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

export function mapStateToProps({posts, comments}) {

	return{
    posts: posts,
    comments: comments
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)