


import { GET_ALL_CATEGORY, GET_ALL_POSTS, GET_ALL_COMMENTS, CREATE_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, UP_VOTE_POST, DOWN_VOTE_POST } from '../actions/index'

export function categories(state = {}, action){
  console.log('#',action.type)
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

export function posts(state = {}, action){
  console.log('##',action)
  switch (action.type) {
    
    case GET_ALL_POSTS:
      console.log('posts', action)
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

export function comments(state = {}, action){
  switch(action.type){
    case GET_ALL_COMMENTS:
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