import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';

export class PostList extends Component {

	  componentDidMount() {
        this.props.getAllPosts();
    }


  	render(){
      let {posts, getCommente} = this.props

      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
  
  		console.log('root3', this)
      let k=0
  		return(
  			<div>
          {posts.map((i) => (
            <ul key={i}>
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
    getCommente: (id) => dispatch(getCommente(id))
	}

}

export function mapStateToProps({posts, comments}) {

	return{
    posts: posts,
    comments: comments
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)