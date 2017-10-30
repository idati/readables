import {categories, posts, comments} from './reducers/index'
// import {posts, postSort} from './post/reducer'
// import {comments, commentSort, commentOnEdit} from './comment/reducer'

import { combineReducers } from 'redux'

export default combineReducers({
  categories,
  // comments,
  posts,
  comments,
  // postSort,
  // commentSort,
  // commentOnEdit
})