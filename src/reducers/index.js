

import { combineReducers } from 'redux'
import { GET_ALL_CATEGORY, GET_ALL_POSTS, GET_ALL_COMMENTS, CREATE_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, UP_VOTE_POST, DOWN_VOTE_POST } from '../actions/index'

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


export function posts(state = {}, action){
  switch (action.type) {
    
    case GET_ALL_POSTS:
      return action.posts.reduce((posts, post) => {
        posts[post.id] = [
                            post.id, 
                            post.timestamp,
                            post.title,
                            post.body,
                            post.author, 
                            post.voteScore,
                            post.category,
                            post.deleted
                          ] 
        return posts
      }, {})
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

const rootReducer = combineReducers({categories, posts})

export default rootReducer