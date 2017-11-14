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
  getPostbyId, } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index';
import PostList from './PostList'
import Comment from './Comment'



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


class Post extends Component {

	  componentDidMount() {
      let {id, post, posts, posts2, getPostbyId, upVote, downVote, getAllPosts} = this.props
      console.log(id)
      getAllPosts()
      if(!id){id=this.props.match.params.id}
      // getPostbyId(id)
      // console.log(getPostbyId(id))
      // let categoryName = this.props.match.params.category
      // console.log(categoryName, getAllPostfilterbycategory(categoryName))
      // getAllPostfilterbycategory(categoryName)
    
    }


  	render(){
      console.log(this)
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
        getAllCommentsortbytime
      } = this.props
      let acategory = 'notdefined'
      let check = false
      if(!id){id=this.props.match.params.id; check = true}
      let actual = posts.filter(function(post){return post.id===id})
      // let commenti=comments[id]
      // console.log('##',Object.keys(comments))
      if(actual[0]){acategory = actual[0].category}
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
      if(check===false)

      {return(
        <div>

          {posts.filter(function(post){return post.id===id}).map((i,j) => (
            <div key={i}>
              <ul key={i[2]+1}><h2>{i.title}</h2></ul>
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
            <div>
              <Link to={`/${acategory}/${id}`}>Details</Link>
            </div>
          </ul>
        </div>
        )} else {
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
          </ul>
          <ul>────────────────  Comments  ────────────────</ul>
          <Comment id={id}/>
        </div>
          )
        }

  	}

    }

 // {comments.map((i) => {i.id})}




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
         // {Object.keys(comments).map((j) => (
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

    getPostbyId: (id) => dispatch(getPostbyId(id)),
    getAllPostsortbytime: () => dispatch(getAllPostsortbytime()),
    getAllPostsortbyvote: () => dispatch(getAllPostsortbyvote()),
    getCommente: (id) => dispatch(getCommente(id)),

    // getAllCommentsortbyvote: (id) => dispatch(getAllCommentsortbyvote(id)),
    // getAllCommentsortbytime: (id) => dispatch(getAllCommentsortbytime(id)),

	}

}

export function mapPostStateToProps({posts}) {
  console.log('Ausgabe?',this)
  // console.log('actual posts', PostList)
  // console.log('Commentss', comments)
  if(posts===1){}
  return{
    posts: posts,

	}
}

export default connect(mapPostStateToProps, mapPostDispatchToProps)(Post)