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
      // getPostbyId(id)
      // console.log(getPostbyId(id))
      // let categoryName = this.props.match.params.category
      // console.log(categoryName, getAllPostfilterbycategory(categoryName))
      // getAllPostfilterbycategory(categoryName)
    
    }


  	render(){
      console.log(this)
      let {id, post, posts, posts2, getPostbyId, upVote, downVote, getAllPosts} = this.props
      let index=['id: ', 'timestamp: ', 'title: ', 'body: ', 'author: ', 'VoteScore: ', 'category: ']
      let k=0

      function utwin(id){
        upVote(id);
        getAllPosts();
      }

      function dtwin(id){
        downVote(id);
        getAllPosts();
      }

  		return(
  			<div>

          {posts2.filter(function(post){return post[0]===id}).map((i,j) => (
            <div key={i}>
              <ul key={i[2]+1}><h2>{i[2]}</h2></ul>
              <ul key={i[4]+2}>author: {i[4]}</ul>
              <ul key={i[1]+3}>timestamp: {getFormattedDate(i[1])}</ul>
              <ul key={i[5]+4}>voteScore: {i[5]}</ul>
            </div>))}


          <ul>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => utwin(id)}>
              upVote
            </button>
            <button type='button'
              className={ `btn btn-primary` }
              onClick={() => dtwin(id)}>
              downVote
            </button>
          </ul>
  			</div>
  			)

  	}

    }



export function mapPostDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts()),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id)),
    getPostbyId: (id) => dispatch(getPostbyId(id)),

	}

}

export function mapPostStateToProps({posts2}) {
  console.log('?????',posts2)

  return{
    posts2: posts2,

	}
}

export default connect(mapPostStateToProps, mapPostDispatchToProps)(Post)