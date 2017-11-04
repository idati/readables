import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';

class CategoryList extends Component {

	componentDidMount() {
        this.props.getAllCategory();
    }

  	render(){
  		const {cat} = this.props.categories
  		console.log('root2', cat)
  		console.log('root2', this)
  		return(
  			<div>
  			{cat.map((i) => ({i}))}  			
  			</div>
  			)

  	}

}

export function mapDispatchToProps(dispatch) {

	return{
		getAllCategory: dispatch(getAllCategory())
	}

}

export function mapStateToProps(categories) {

	return{
		cat: categories
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)