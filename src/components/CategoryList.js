import { connect } from 'react-redux';
import { Route, withRouter, Link} from 'react-router-dom';
import { getAllCategory, getAllPosts, getCommente, createNewComment, upVotePost, upVoteComment, downVotePost, downVoteComment } from '../actions/index'
import React, { Component } from 'react';
import '../App.css';

class CategoryList extends Component {

	  componentDidMount() {
        this.props.getAllCategory()
    }


  	render(){
      let {categories} = this.props
  		console.log('root2', this, typeof categories)
  		return(
  			<div>
            <ul>
              {categories.map((i) => ( <li key={i}><Link to={`/${i}`}>{i}</Link></li>))}
            </ul>
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