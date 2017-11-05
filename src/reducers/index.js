

import { combineReducers } from 'redux'
import { GET_ALL_CATEGORY, GET_ALL_POSTS, GET_ALL_COMMENTS, CREATE_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, UP_VOTE_POST, DOWN_VOTE_POST } from '../actions/index'

export function categories(state = {}, action){
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return action.categories.reduce((categories, category) => {
        categories[category.name] = category.path
        return categories
      }, {})
    default:
      return state
  }
}


const rootReducer = combineReducers({categories})

export default rootReducer