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
  getPostbyId,
  getAllCommentsortbyvote,
  getAllCommentsortbytime,
  getComment_,
  editComment_,
  deleteComment_ } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';
import {getAllCommentsFromPost} from '../api/index';
// import PostList from './PostList'
import * as api from '../api/index'


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
    function gettime(){
      return Date.now()  
    }


// id, timestamp, body, author, parentId
class SingleComment extends Component {
      constructor(props, context){
      super(props);
      this.state = {
        edit: 'None',
        id: 'None',
        timestamp: 'None',
        parentId: 'None',
        body: 'None',
        author: 'None'
    }

  };





	  componentDidMount() {
      let {id,pId, post, posts, posts2, getPostbyId, upVote, downVote, getAllPosts, getCommente, getComment_, getAllComments} = this.props
      console.log(id)
      // getCommente(id)
      getAllComments(id)
      console.log('getCommente',this)
      // getAllPosts()
      // if(!id){id=this.props.match.params.id; getCommente(id)}
      // getPostbyId(id)
      // console.log(getPostbyId(id))
      // let categoryName = this.props.match.params.category
      // console.log(categoryName, getAllPostfilterbycategory(categoryName))
      // getAllPostfilterbycategory(categoryName)
    
    }
    updatetimestamp(event){
        this.setState({timestamp: Date.getDate()})
    }

    updatebody(event){
        this.setState({body: event.target.value})
    }

    updateauthor(event){
        this.setState({author: event.target.value})
    }

  	render(){
      console.log(this)
      let {id,
        pId,
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
        editComment_,
        deleteComment_
      } = this.props
      let acategory = 'notdefined'
      let check = false
      let tmp
      console.log('Watchme', comments, pId, id)
      // if(typeof comments!=='object'){comments=comments.filter(function(post){return post.id===pId})}else{comments=Object.keys(comments).filter(function(post){return post.id===pId})}
      if(pId===undefined){comments}else{comments=comments.filter(function(post){return post.id===pId})}
      
      // if(!id){id=this.props.match.params.id; check = true}
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
      // if(check===false)

      // {return(
      //   <div>

      //     {posts.filter(function(post){return post.id===id}).map((i,j) => (
      //       <div key={i}>
      //         <ul key={i[2]+1}><h2>{i.title}</h2></ul>
      //         <ul key={i[4]+2}>author: {i.author}</ul>
      //         <ul key={i[1]+3}>timestamp: {getFormattedDate(i.timestamp)}</ul>
      //         <ul key={i[5]+4}>commentCount: {i.commentCount}</ul>
      //         <ul key={i[5]+4}>voteScore: {i.voteScore}</ul>
      //       </div>))}
      //     <ul>
      //       <button type='button'
      //         className={ `btn btn-primary` }
      //         onClick={() => upVote(id)}>
      //         upVote
      //       </button>
      //       <button type='button'
      //         className={ `btn btn-primary` }
      //         onClick={() => downVote(id)}>
      //         downVote
      //       </button>
      //       <div>
      //         <Link to={`/${acategory}/${id}`}>Details</Link>
      //       </div>
      //     </ul>
      //   </div>
      //   )} else {
        console.log('checl', this.state, id, comments)
        if(this.state.edit.id!==pId)
         { return(
                 // <div>
                   // <ul>
                   //     <button type='button'
                   //     className={ `btn btn-primary` }
                   //     onClick={() => this.props.history.goBack()}>
                   //     Go Back
                   //   </button>
                   // </ul>
                   // {posts.filter(function(post){return post.id===id}).map((i,j) => (
                   //   <div key={i}>
                   //     <ul key={i[2]+1}><h2>{i.title}</h2></ul>
                   //     <ul key={i[4]+2}>author: {i.author}</ul>
                   //     <ul key={i[1]+3}>timestamp: {getFormattedDate(i.timestamp)}</ul>
                   //     <ul key={i[5]+4}>commentCount: {i.commentCount}</ul>
                   //     <ul key={i[5]+4}>voteScore: {i.voteScore}</ul>
                   //   </div>))}
                   // <ul>
                   //   <button type='button'
                   //     className={ `btn btn-primary` }
                   //     onClick={() => upVote(id)}>
                   //     upVote
                   //   </button>
                   //   <button type='button'
                   //     className={ `btn btn-primary` }
                   //     onClick={() => downVote(id)}>
                   //     downVote
                   //   </button>
                   // </ul>
                   <div>
         
                  {Object.keys(comments).map((j) => (
                   <div>
                   <ul><h2>{comments[j].body}</h2></ul>
                   <ul>author: {comments[j].author}</ul>
                   <ul>timestamp: {getFormattedDate(comments[j].timestamp)}</ul>
                   <ul>voteScore: {comments[j].voteScore}</ul>
                   <ul>
                   <button type='button'
                     className={ `btn btn-primary` }
                     onClick={() => upVoteComment(comments[j].id)}>
                     upVoteComment
                   </button>
                   <button type='button'
                     className={ `btn btn-primary` }
                     onClick={() => downVoteComment(comments[j].id)}>
                     downVoteComment
                   </button>
                   <button type='button'
                     className={ `btn btn-primary` }
                     onClick={() => (deleteComment_(comments[j]), getAllPosts())}>
                     delete
                   </button>
                    <button type='button'
                    className={ `btn btn-primary` }
                    onClick={() => (id=comments[j].id,
                              this.setState({edit: {id}}),
                              tmp = comments.filter(function(post){return post.id===comments[j].id}),
                              console.log(this.state.edit, id, tmp),
                              this.setState({timestamp: tmp[0].timestamp}),
                              this.setState({parentId: tmp[0].parentId}),
                              this.setState({body: tmp[0].body}),
                              this.setState({author: tmp[0].author})
                              )}>
                      edit
                    </button>
                   </ul>
                   </div>
                   ))}
                 </div>
                   )
                 }else{
                  return(
                  <div>

                        <ul>timestamp: {getFormattedDate(this.state.timestamp)}</ul>
                        <ul>Body: <textarea value={this.state.body} onChange={(event) => (this.updatebody(event))} /></ul>
                        <ul>Author: {this.state.author}</ul>
                        <ul><button type='button'
                        className={ `btn btn-primary` }
                        onClick={() => (this.setState({edit: {id}}), 
                              tmp = comments,
                              console.log('***',this.state.edit.id, id, tmp, comments),
                              this.setState({id: tmp[0].id}),
                              this.setState({parentId: tmp[0].parentId}),
                              this.setState({timestamp:  tmp[0].timestamp}),
                              this.setState({body: tmp[0].body}),
                              this.setState({author: tmp[0].author}),
                              // updatePost_(postUpdate(this.state.body, this.state.author, this.state.title, this.state.category)),
                              console.log('come in',this.state.id, tmp[0].id, this.state.body,this.state.timestamp),
                              editComment_({id: tmp[0].id, body: this.state.body, timestamp: gettime()}),
                              this.setState({edit: 'None', timestamp: 'None', parentId: 'None', body:'None', author: 'None'})
                              )}>
                        update
                        </button></ul>

                 </div>
                   )
                 }

                 }

  	}

    // }



        // edit: 'None',
        // timestamp: 'None',
        // parentId: 'None',
        // body: 'None',
        // author: 'None'
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
                  //   <button type='button'
                  //   className={ `btn btn-primary` }
                  //   onClick={() => (id=comments[j].id,
                  //             this.setState({edit: {id}}),
                  //             tmp = comments.filter(function(post){return post.id===comments[j].id}),
                  //             console.log(this.state.edit, id, tmp),
                  //             this.setState({timestamp: tmp[0].timestamp}),
                  //             this.setState({parentId: tmp[0].parentId}),
                  //             this.setState({body: tmp[0].body}),
                  //             this.setState({author: tmp[0].author})
                  //             )}>
                  //     edit
                  //   </button>
                  //  </ul>
                  //  </div>
                  //  ))}


 // {comments.map((i) => {i.id})}




          // {posts.filter(function(post){return post[0]===id}).map((i,j) => (
          //   <div key={i}>
          //     <ul key={i[2]+1}><h2>{i[2]}</h2></ul>
          //     <ul key={i[4]+2}>author: {i[4]}</ul>
          //     <ul key={i[1]+3}>timestamp: {getFormattedDate(i[1])}</ul>
          //     <ul key={i[5]+4}>voteScore: {i[5]}</ul>
          //   </div>))}


export function mapPostDispatchToProps(dispatch) {

	return{
		getAllPosts: () => dispatch(getAllPosts()),
    // upVote: (id) => dispatch(upVotePost(id)),
    // downVote: (id) => dispatch(downVotePost(id)),


    upVoteComment: (id) => dispatch(upVoteComment(id)),
    downVoteComment: (id) => dispatch(downVoteComment(id)),

    getPostbyId: (id) => dispatch(getPostbyId(id)),
    getAllPostsortbytime: () => dispatch(getAllPostsortbytime()),
    getAllPostsortbyvote: () => dispatch(getAllPostsortbyvote()),
    getCommente: (id) => dispatch(getCommente(id)),

    getAllCommentsortbyvote: (id) => dispatch(getAllCommentsortbyvote(id)),
    getAllCommentsortbytime: (id) => dispatch(getAllCommentsortbytime(id)),

    getComment_: (id) => dispatch(getComment_(id)),
    editComment_: (comments) => dispatch(editComment_(comments)),
    deleteComment_: (comments) => dispatch(deleteComment_(comments)),
    getAllComments: (id) => dispatch(getAllComments(id))

	}

}

export function mapPostStateToProps({posts,comments}) {
  // console.log('Ausgabe?',this)
  // console.log('actual posts', PostList)
  // console.log('Commentss', comments)
  if(posts===1){}
  return{
    // posts: posts,
    comments: comments
	}
}

export default connect(mapPostStateToProps, mapPostDispatchToProps)(SingleComment)