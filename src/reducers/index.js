

import { combineReducers } from 'redux'
import { GET_ALL_CATEGORY, 
	GET_ALL_POSTS, 
	GET_ALL_COMMENTS, 
	CREATE_COMMENT, 
	UP_VOTE_COMMENT, 
	DOWN_VOTE_COMMENT, 
	UP_VOTE_POST, 
	DOWN_VOTE_POST, 
	GET_ALL_COMMENTS_BY_ID,
	GET_ALL_POSTS_SORT_BY_TIME,
	GET_ALL_POSTS_SORT_BY_VOTE,
	GET_ALL_POSTS_FILTER_BY_CATEGORY,
	GET_POST_BY_ID } from '../actions/index'

export function categories(state = [], action){
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return action.categories.reduce((categories, category) => {
        categories.push(category.path)
        return categories
      }, [])
    default:
      return state
  }
}


export function posts(state = [], action){
  switch (action.type) {
    
    case GET_ALL_POSTS:
      return action.posts.reduce((posts, post) => {
        posts.push([
                            post.id, 
                            post.timestamp,
                            post.title,
                            post.body,
                            post.author, 
                            post.voteScore,
                            post.category,
                            post.deleted
                          ] )
        return posts.sort()
      }, [])
    case GET_ALL_POSTS_SORT_BY_TIME:
    	return state.slice().sort(function(a,b){return b[1] - a[1]})
  
    case GET_ALL_POSTS_SORT_BY_VOTE:
    	return state.slice().sort(function(a,b){return b[5] - a[5]})

    case GET_POST_BY_ID:
      return {
        ...state,
        posts: action.posts
      }
     

    case GET_ALL_POSTS_FILTER_BY_CATEGORY:
      return action.posts.reduce((posts, post) => {
        posts.push([
                            post.id, 
                            post.timestamp,
                            post.title,
                            post.body,
                            post.author, 
                            post.voteScore,
                            post.category,
                            post.deleted
                          ] )
        return posts.sort()
      }, [])

    case UP_VOTE_POST:
      return {
        ...state,
        posts: action.posts
      }
        case DOWN_VOTE_POST:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}


export function comments(state = {}, action){
  switch(action.type){
  	case GET_ALL_COMMENTS_BY_ID:
          return {
              ...state,
              [action.id]: action.comments
          }

    case GET_ALL_COMMENTS:
    	console.log('comment', action)
          return {
              ...state,
              [action.id]: action.comments
          }

      case CREATE_COMMENT:
        let existingComments = state[action.comments.parentId] || [];
          return {
            ...state,
           [action.comments.parentId]: existingComments.concat(action.comments)
          }
      case DOWN_VOTE_COMMENT:
      case UP_VOTE_COMMENT:
            let existingComments2 = state[action.comments.parentId] || [];
            for(var i in existingComments2){
                if (existingComments2[i].id===action.comments.id){
                    existingComments2[i]=action.comments

      }
    }
      return {
        ...state,
        [action.comments.parentId]: existingComments2
      }

      default:
        return state
  }
}


const rootReducer = combineReducers({categories, posts, comments})

export default rootReducer