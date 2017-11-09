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
  getAllPostsortbytime } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';


class CommentsList extends Component {

	  componentDidMount() {
      let {id, getCommente} = this.props
      console.log(this)
      getCommente(id)
      // this.props.getAllPosts();    
    }

    render(){
      let {id, comments} = this.props
      // if(comments[id]) console.log(Object.keys(comments[id]).length)
      if(comments[id])
      return (<div>Number of Comments: {Object.keys(comments[id]).length}</div>)
      else return ("")
    }

  }


function mapDispatchToProps(dispatch) {

	return{
    getCommente: (id) => dispatch(getCommente(id)),


	}

}


function mapStateToProps({comments}) {

	return{
    comments: comments,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)