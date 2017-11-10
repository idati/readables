

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

// export function posts2(state=[], action){
// 	switch (action.type) {

// 	case DOWN_VOTE_POST:
// 		return state
//       // return [[action.posts.id, action.posts.timestamp, action.posts.title, action.posts.body, action.posts.author, action.posts.voteScore, action.posts.category, action.posts.deleted]]

// 	case UP_VOTE_POST:
// 		return state
//       // return [[action.posts.id, action.posts.timestamp, action.posts.title, action.posts.body, action.posts.author, action.posts.voteScore, action.posts.category, action.posts.deleted]]


// 	case GET_ALL_POSTS:
//       return action.posts.reduce((posts, post) => {
//         posts.push([
//                             post.id, 
//                             post.timestamp,
//                             post.title,
//                             post.body,
//                             post.author, 
//                             post.voteScore,
//                             post.category,
//                             post.deleted
//                           ] )
//         return posts.sort()
//       }, [])

// 	case GET_POST_BY_ID:
// 	return action.posts2

// 	case GET_ALL_POSTS_SORT_BY_TIME:
//     	return state.slice().sort(function(a,b){return b[1] - a[1]})
  
//     case GET_ALL_POSTS_SORT_BY_VOTE:
//     	return state.slice().sort(function(a,b){return b[5] - a[5]})
//       // return [action.posts2.id, action.post2.timestamp]

//     // case UP_VOTE_POST:
//     //   return {
//     //     ...state,
//     //     posts: action.posts
//     //   }
//     //     case DOWN_VOTE_POST:
//     //   return {
//     //     ...state,
//     //     posts: action.posts
//     //   }

// 	default:
//       return state
// 	}
// }


export function posts(state = [], action){
  switch (action.type) {
    
    case GET_ALL_POSTS:
    	return action.posts
      // return action.posts.reduce((posts, post) => {
      //   posts.push([
      //                       post.id, 
      //                       post.timestamp,
      //                       post.title,
      //                       post.body,
      //                       post.author, 
      //                       post.voteScore,
      //                       post.category,
      //                       post.deleted
      //                     ] )
      //   return posts.sort()
      // }, [])

    case GET_ALL_POSTS_SORT_BY_TIME:
    	return state.slice().sort(function(a,b){return b[1] - a[1]})
  
    case GET_ALL_POSTS_SORT_BY_VOTE:
    	return state.slice().sort(function(a,b){return b[5] - a[5]})
	// return Object.keys(state.slice()).sort(function(a,b){return b[5] - a[5]})
    // case GET_POST_BY_ID:
    //   return {posts: action.posts}
     

    case GET_ALL_POSTS_FILTER_BY_CATEGORY:
    	return action.posts
      // return action.posts.reduce((posts, post) => {
      //   posts.push([
      //                       post.id, 
      //                       post.timestamp,
      //                       post.title,
      //                       post.body,
      //                       post.author, 
      //                       post.voteScore,
      //                       post.category,
      //                       post.deleted
      //                     ] )
      //   return posts.sort()
      // }, [])
	case DOWN_VOTE_POST:
    case UP_VOTE_POST:
    	// return console.log(action, state)
    	let z = state.slice()
    	z.forEach((element, index) => {
    		console.log(element.id, index, action.posts.id);
    		if(element.id === action.posts.id) {
        	z[index] = action.posts;
    		}
		});
		return z
		// console.log(state)
		// return state
    	// return console.log(action, state)
    	// return state
    	// return action.posts
      // return {
      //   ...state,
      //   posts: action.posts
      // }
    // case DOWN_VOTE_POST:
    // 	return state
    	// return state
    	// return action.posts
      // return {
      //   ...state,
      //   posts: action.posts
      // }	
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


const rootReducer = combineReducers({categories, posts, comments })

export default rootReducer