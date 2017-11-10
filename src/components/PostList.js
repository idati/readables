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
import Post from './Post'

class PostList extends Component {
    constructor(props, context){
      super(props);
      this.state = {
        sort: 'None'
    }

  };




	  componentDidMount() {
      let {posts, getAllPostsortbytime, getAllPostsortbyvote, getAllPosts} = this.props
      getAllPosts()
      // let {post} = this.props
      // this.props.getCommente(post)
      // console.log('this',this.props.posts)
      // this.props.getAllPosts();
        // this.props.getCommente('8xf0y6ziyjabvozdd253nd');
      // console.log('root3', getCommente())
    
    }


  	render(){

      console.log('########',this)
      let {posts, getAllPostsortbytime, getAllPostsortbyvote} = this.props

      // console.log(getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd'))

  
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      // this.getall('8xf0y6ziyjabvozdd253nd')
      let k=0
      // this.props.getAllPosts();
      console.log('????', this)

  		return(
  			<div>
          <ul>
            <ul>Sort: {this.state.sort}</ul>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={(event) => {getAllPostsortbytime(); this.setState({sort: 'getAllPostsortbytime'})}}>
              sort by time
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={(event) => {getAllPostsortbyvote(); this.setState({sort: 'getAllPostsortbyvote'})}}>
              sort by vote
            </button>
          </ul> 
          {Object.keys(posts).map((i) => (
            <ul key={i}>
                <Post id={posts[i].id} />
                
            </ul>
          ))}
  			</div>
  			)
  	}

    }
// <ul><CommentsList id={i[0]} /></ul>
//<Post id={i[0]} state={this.state} />

// <CommentList post={i[0]} getCommente={getCommente}/>
// <Post id={i[0]}/>
// {i.map((x,j) => (<ul key={j}>{index[j]}{ x }</ul>))}
 // <Post id='6ni6ok3ym7mf1p33lnez'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList)