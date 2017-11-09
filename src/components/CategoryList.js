import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import PostList from './PostList'
import '../App.css';

class CategoryList extends Component {

	  componentDidMount() {
        this.props.getAllCategory()
    }


  	render(){
      let {categories} = this.props
  		console.log('root2', this, typeof categories)
  		return(
  			<div key='1'>
          <div key='1.1'>
            <ul><h2> Categories </h2></ul>
            <ul>{categories.map((i) => ( <ul key={i}><Link to={`/${i}`}>{i}</Link></ul>))}</ul>       
          </div>
  			   <ul><h2> Post's </h2></ul>
          <PostList />
        </div>

  			)

  	}

}

export function mapDispatchToProps(dispatch) {

	return{
		 getAllCategory: () => dispatch(getAllCategory())
	}

}

export function mapStateToProps({categories}) {

	return{
		categories: categories,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)