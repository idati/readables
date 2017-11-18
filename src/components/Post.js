import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllComments,
  getAllCategory, 
  getAllPosts, 
  getCommente, 
  createNewComment, 
  upVotePost,  
  downVotePost, 
  getAllPostsortbytime,
  getAllPostsortbyvote,
  getAllPostfilterbycategory,
  getPostbyId,
  deletePost_,
  editPost_ } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index';
import PostList from './PostList'
import Comment from './Comment'
import * as api from '../api/index'
import getPostsById from '../api/index'

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

    function postUpdate(body, author, title, category) {
    return {
                author,
                body,
                title,
                category
          }
}


class Post extends Component {
      constructor(props, context){
      super(props);
      this.state = {
        edit: 'None',
        category: 'None',
        title: 'None',
        body: 'None',
        author: 'None',
        link: '*****',
        id: '*****',
        act: '-----'
    }

  };

	  componentWillMount() {
      let {id, post, posts, posts2, getPostsbyId, upVote, downVote, getAllPosts} = this.props
      console.log('id2',this.props.cat)
      if(!id){if(this.props.match){id=this.props.match.params.id}else{id=this.props.posts.id; posts=Object.keys(posts);}}
      // getPostsbyId(this.state.id)
      // if(!id){if(this.props.match){id=this.props.match.params.id}else{id=this.props.posts.id; posts=Object.keys(posts);}}
      // getPostbyId(id)
      // console.log(getPostbyId(id))
      // let categoryName = this.props.match.params.category
      // console.log(categoryName, getAllPostfilterbycategory(categoryName))
      // getAllPostfilterbycategory(categoryName)
      if(this.props.categoryName){console.log('NEWID',this); this.props.getAllPostfilterbycategory(this.props.categoryName)}else{getAllPosts()}
      // if(!id){if(this.props.match){id=this.props.match.params.id; check = true}else{id=this.props.posts.id; posts=Object.keys(posts); check = true}}
      
      this.setState({link: posts})
      this.setState({id: id})
      let temp = this.state.link//.filter(function(post){return post.id===this.state.id})
      this.setState({act: temp})
    console.log("W.T.F", this.props, id,  posts, this.state)
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
      // console.log(this)
      let {id, 
        post, 
        posts, 
        posts2, 
        getPostbyId, 
        upVote, 
        downVote, 
        getAllPosts, 
        state, 
        getAllPostsortbyvote, 
        getCommente,
        comments,
        upVoteComment,
        downVoteComment,
        getAllCommentsortbyvote,
        getAllCommentsortbytime,
        getAllPostfilterbycategory,
        deletePost_,
        editPost_
      } = this.props
      console.log('id',id)
      let acategory = '*****'
      let check = false
      let actual
      console.log('link',this.state.link, this.state.id)

      if(!id){if(this.props.match){id=this.props.match.params.id; check = true}else{id=this.props.posts.id; posts=Object.keys(posts); check = true}}
      if(!this.props.posts[0]){getAllPosts(); console.log("ERROR", this.props.posts[0])}
      if(typeof(posts)==='object'){actual = Object.keys(this.props.posts).filter(function(post){return post.id===id})}else{actual = this.props.posts.filter(function(post){return post.id===id})}

      // let a = this.props.getPostbyId(id)
      // if(!actual[0]){console.log("W.T.F", this.props, id, a, posts)}

      // if(!id){if(this.props.match){id=this.props.match.params.id}else{id=this.props.posts.id; posts=Object.keys(posts);}}
      // console.log('click edit in details',typeof(posts), typeof(posts)==='object')
      // actual = posts.filter(function(post){return post.id===id})
      console.log('W.T.F.2',actual)
      if(actual[0]){ acategory = posts.filter(function(post){return post.id===id})}
      // acategory = this.state.link.filter(function(post){return post.id===this.state.id})
      acategory = this.state.act
      let tmp
      console.log('Look', this, acategory, id, posts, this.props, actual,  posts.filter(function(post){return post.id===id}));
 
      // if(!id){if(this.props.match){id=this.props.match.params.id; check = true}else{id=this.props.posts.id; posts=Object.keys(posts); check = true}}
      // if(this.props.categoryName){console.log('NEWID',this); this.props.getAllPostfilterbycategory(this.props.categoryName)}
      // let actual = posts.filter(function(post){return post.id===id})
      // let commenti=comments[id]
      // console.log('##',Object.keys(comments))
      // if(actual[0]){acategory = actual[0].category}
      // if(comments[id]!==[]){console.log('C&A', comments[id][0].id)}
      // let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      // let k=0
      // console.log(state.sort)

      // function utwin(id){
      //   upVote(id);
      //   // console.log('upVote')
      //   getAllPosts();
      //   // console.log('getAllPosts')
      //   // getAllPostsortbyvote();
      //   // console.log('getAllPostsortbyvote')
      //   // state.sort();
      // }

      // function dtwin(id){
      //   downVote(id);
      //   getAllPosts();
      //   // getAllPostsortbyvote();
      //   // state.sort();
      // }
      if(this.state.edit.id!==id){
      if(check===false)

      {return(
        <div>

          {posts.filter(function(post){return post.id===id}).map((i,j) => (
            <div key={i.timestamp+10}>
              <ul key={i.timestamp+1}><h2>{i.title}</h2></ul>
              <ul key={i.timestamp+11}><h3>{i.body}</h3></ul>
              <ul key={i.timestamp+2}>author: {i.author}</ul>
              <ul key={i.timestamp+3}>timestamp: {getFormattedDate(i.timestamp)}</ul>
              <ul key={i.timestamp+4}>commentCount: {i.commentCount}</ul>
              <ul key={i.timestamp+5}>voteScore: {i.voteScore}</ul>
            </div>))}
          <ul>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => upVote(id)}>
              upVote
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => downVote(id)}>
              downVote
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => deletePost_(id)}>
              delete
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => (this.setState({edit: {id}}), 
                              tmp = posts.filter(function(post){return post.id===id}),
                              console.log(this.state.edit.id, id, tmp),
                              this.setState({category: tmp[0].category}),
                              this.setState({title: tmp[0].title}),
                              this.setState({body: tmp[0].body}),
                              this.setState({author: tmp[0].author})
                              )}>
              edit
            </button>

            <div>
              <Link to={`/${this.props.cat}/${id}`}>Details</Link>
            </div>
          </ul>
        </div>
        )} else {
          console.log('fresh',posts)
          return(
        <div>
          <ul>
              <button type='button'
              className={ `btn btn-primary` }
              onClick={() => this.props.history.goBack()}>
              Go Back
            </button>
          </ul>
          {posts.filter(function(post){return post.id===id}).map((i,j) => (
            <div key={i}>
              <ul key={i[2]+1}><h2>{i.title}</h2></ul>
              <ul key={i.timestamp+11}><h3>{i.body}</h3></ul>
              <ul key={i[4]+2}>author: {i.author}</ul>
              <ul key={i[1]+3}>timestamp: {getFormattedDate(i.timestamp)}</ul>
              <ul key={i[5]+4}>commentCount: {i.commentCount}</ul>
              <ul key={i[5]+4}>voteScore: {i.voteScore}</ul>
            </div>))}
          <ul>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => upVote(id)}>
              upVote
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => downVote(id)}>
              downVote
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => deletePost_(id)}>
              delete
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => (this.setState({edit: {id}}), 
                              tmp = posts.filter(function(post){return post.id===id}),
                              // console.log(this.state.edit.id, id, tmp),
                              this.setState({category: tmp[0].category}),
                              this.setState({title: tmp[0].title}),
                              this.setState({body: tmp[0].body}),
                              this.setState({author: tmp[0].author})
                              )}>
              edit
            </button>
          </ul>
          <ul>────────────────  Comments  ────────────────</ul>
          <Comment id={id}/>
        </div>
          )
        }
      } else {
        return(<div>



                
              <ul>Category: {this.state.category} </ul>
             <ul>Title: <input value={this.state.title} onChange={(event) => (this.updatetitle(event))} /></ul>
             <ul>Body: <textarea value={this.state.body} onChange={(event) => (this.updatebody(event))} /></ul>
             <ul>Author: {this.state.author} </ul>
            
             <ul>
             <button type='button'
              className={ `btn btn-primary` }
              onClick={() => (this.setState({edit: {id}}), 
                              tmp = posts.filter(function(post){return post.id===id}),
                              // console.log(this.state.edit.id, id, tmp),
                              this.setState({category: tmp[0].category}),
                              this.setState({title: tmp[0].title}),
                              this.setState({body: tmp[0].body}),
                              this.setState({author: tmp[0].author}),
                              // updatePost_(postUpdate(this.state.body, this.state.author, this.state.title, this.state.category)),
                              editPost_({id: id, body: this.state.body, title: this.state.title}),
                              this.setState({edit: 'None', category: 'None', title: 'None', body:'None', author: 'None'})
                              )}>
              update
            </button>
            </ul>

        </div>
        )

      }

  	}

    }                        

// <label htmlFor="category">Category: </label>
// <select name="category" id="caterogy"
//     value={this.state.category}
//     onChange={(event) => this.setState({category: event.target.value})}>
//     <option value="category" disabled>category is</option>
//     <option value={'react'}>React</option>
//     <option value={'redux'}>Redux</option>
//     <option value={'udacity'}>Udacity</option>
// </select>
                // <ul key='2'>───────────────────────────────────────</ul> 
                // <ul key='3'>Categories: {this.state.category}</ul>
                // <ul key='4'>Title: {this.state.title}</ul>
                // <ul key='5'>Body: {this.state.body}</ul>
                // <ul key='6'>Author: {this.state.author}</ul>
 // {comments.map((i) => {i.id})}
 // <ul>Author: <input value={this.state.author} onChange={(event) => (this.updateauthor(event))} /></ul>





          // {posts.filter(function(post){return post[0]===id}).map((i,j) => (
          //   <div key={i}>
          //     <ul key={i[2]+1}><h2>{i[2]}</h2></ul>
          //     <ul key={i[4]+2}>author: {i[4]}</ul>
          //     <ul key={i[1]+3}>timestamp: {getFormattedDate(i[1])}</ul>
          //     <ul key={i[5]+4}>voteScore: {i[5]}</ul>
          //   </div>))}

         // <ul><h2>Comments</h2></ul>
         //    <button type='button'
         //      className={ `btn btn-primary` }
         //      onClick={(event) => {getAllCommentsortbytime(id)}}>
         //      sort by time
         //    </button>
         //    <button type='button'
         //      className={ `btn btn-primary` }
         //      onClick={(event) => {getAllCommentsortbyvote(id)}}>
         //      sort by vote
         //    </button>
         // {comments.map((j) => (
         //  <div>
         //  <ul><h2>{comments[j].body}</h2></ul>
         //  <ul>author: {comments[j].author}</ul>
         //  <ul>timestamp: {getFormattedDate(comments[j].timestamp)}</ul>
         //  <ul>voteScore: {comments[j].voteScore}</ul>
         //  <ul>
         //  <button type='button'
         //    className={ `btn btn-primary` }
         //    onClick={() => upVoteComment(comments[j].id)}>
         //    upVoteComment
         //  </button>
         //  <button type='button'
         //    className={ `btn btn-primary` }
         //    onClick={() => downVoteComment(comments[j].id)}>
         //    downVoteComment
         //  </button>
         //  </ul>
         //  </div>
         //  ))}
export function mapPostDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts()),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),


    // upVoteComment: (id) => dispatch(upVoteComment(id)),
    // downVoteComment: (id) => dispatch(downVoteComment(id)),

    getPostsbyId: (id) => dispatch(getPostbyId(id)),
    getAllPostsortbytime: () => dispatch(getAllPostsortbytime()),
    getAllPostsortbyvote: () => dispatch(getAllPostsortbyvote()),
    getCommente: (id) => dispatch(getCommente(id)),
    getAllPostfilterbycategory: (categoryName) => dispatch(getAllPostfilterbycategory(categoryName)),
    deletePost_: (id) => dispatch(deletePost_(id)),
    editPost_: (body) => dispatch(editPost_(body))

    // getAllCommentsortbyvote: (id) => dispatch(getAllCommentsortbyvote(id)),
    // getAllCommentsortbytime: (id) => dispatch(getAllCommentsortbytime(id)),

	}

}

export function mapPostStateToProps({posts}) {
  // console.log('Ausgabe?',this)
  // console.log('actual posts', PostList)
  // console.log('Commentss', comments)
  // if(posts===1){}
  return{
    posts: posts,

	}
}

export default connect(mapPostStateToProps, mapPostDispatchToProps)(Post)