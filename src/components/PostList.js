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
  newPost_ } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index'
import CommentsList from './CommentsList'
import Post from './Post'
import NewPost from './NewPost'
import * as api from '../api/index'



var identifier = require('identifier');


    function getFormattedDate(_date) {
      var date = new Date(_date)
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();

      month = (month < 10 ? "0" : "") + month;
      day = (day < 10 ? "0" : "") + day;
      hour = (hour < 10 ? "0" : "") + hour;
      min = (min < 10 ? "0" : "") + min;
      sec = (sec < 10 ? "0" : "") + sec;

      var str = date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec;

      return str;
    }


    function postCreator(body, author, title, category) {
    return {
        id: identifier(21), 
        timestamp: Date.now(),
        body,
        author,
        title,
        category,
        voteScore: 1,
        deleted: false,
    }
}


class PostList extends Component {
    constructor(props, context){
      super(props);
      this.state = {
        sort: 'None',
        insert: false,
        category: 'None',
        title: 'None',
        body: 'None',
        author: 'None'
    }

  };



	  componentDidMount() {
      let {posts, getAllPostsortbytime, getAllPostsortbyvote, getAllPosts} = this.props
      getAllPosts()
      let PostName = this
      // console.log('LinkToId', PostName)
      // let {post} = this.props
      // this.props.getCommente(post)
      // console.log('this',this.props.posts)
      // this.props.getAllPosts();
        // this.props.getCommente('8xf0y6ziyjabvozdd253nd');
      // console.log('root3', getCommente())
    
    }

    updatetitle(event){
        this.setState({title: event.target.value})
    }

    updatebody(event){
        this.setState({body: event.target.value})
    }

    updateauthor(event){
        this.setState({author: event.target.value})
    }

  	render(){

      // console.log('########',this)
      let {posts, getAllPostsortbytime, getAllPostsortbyvote, newPost_} = this.props

      // console.log(getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd'))

  
      // let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      // this.getall('8xf0y6ziyjabvozdd253nd')
      let k=0
      // this.props.getAllPosts();
      // console.log('????', this)


      if(this.state.insert===false){  
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
    
                <button type='button'
                  className={ `btn btn-primary` }
                  onClick={(event) => {this.setState({insert: true})}}>
                  new post
                </button>
    
              </ul> 
    
              {Object.keys(posts).map((i) => (
                
                    <Post key={posts[i].timestamp} id={posts[i].id} />
              
              ))}
            </div>
            )} else {
          return(
            <div key='1'>
              <ul key='1.1.1'>
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
    
                <button type='button'
                  className={ `btn btn-primary` }
                  onClick={(event) => {this.setState({insert: true})}}>
                  new post
                </button>
                <ul key='2'>───────────────────────────────────────</ul> 
                <ul key='3'>Categories: {this.state.category}</ul>
                <ul key='4'>Title: {this.state.title}</ul>
                <ul key='5'>Body: {this.state.body}</ul>
                <ul key='6'>Author: {this.state.author}</ul>
                <ul>────────────────  new Post  ────────────────</ul>
                  <ul>
                        <label htmlFor="category">Category: </label>
                        <select name="category" id="caterogy"
                            value={this.state.category}
                            onChange={(event) => this.setState({category: event.target.value})}>
                            <option value="category" disabled>category is</option>
                            <option value={'react'}>React</option>
                            <option value={'redux'}>Redux</option>
                            <option value={'udacity'}>Udacity</option>
                        </select>
                  </ul>
              
             <ul>Title: <input value={this.state.title} onChange={(event) => (this.updatetitle(event))} /></ul>
             <ul>Body: <textarea value={this.state.body} onChange={(event) => (this.updatebody(event))} /></ul>
             <ul>Author: <input value={this.state.author} onChange={(event) => (this.updateauthor(event))} /></ul>

             <ul><button type='button'
                  className={ `btn btn-primary1` }
                  onClick={(event) => {newPost_(postCreator(this.state.body, this.state.author, this.state.title, this.state.category)); this.setState({insert: false})}}>
                  submit
                </button>
                <button type='button'
                  className={ `btn btn-primary1` }
                  onClick={(event) => {this.setState({insert: false})}}>
                  Cancel
                </button></ul>


              </ul> 
    
              {Object.keys(posts).map((i) => (
                
                    <Post id={posts[i].id} />
              
              ))}
            </div>
            )
    }
  	}

    }

// onClick={(event) => {newPost_(identifier(21), getFormattedDate(Date.now()), this.state.title, this.state.body, this.state.author, this.state.category); this.setState({insert: false})}}>    

// onClick={newPost_(identifier(21), Date.now(), this.state.title, this.state.body, this.state.author, this.state.category)}>



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
    newPost_: (body) => dispatch(newPost_(body))
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