import { fetchAllCategories, 
  getPosts, 
  getAllCommentsFromPost, 
  newComment, 
  votePost, 
  voteComment, 
  getAllPostsFromCategory, 
  getPostsById, 
  newPost, 
  deletePost, 
  updatePost, 
  editPost, 
  getComment, 
  editComment, 
  deleteComment} from '../api/index'

export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const SET_LOADING = 'SET_LOADING';
export const UNSET_LOADING = 'UNSET_LOADING';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const REFRESH = 'REFRESH';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';
export const GET_ALL_COMMENTS_BY_ID='GET_ALL_COMMENTS_BY_ID';
export const GET_ALL_POSTS_SORT_BY_TIME='GET_ALL_POSTS_SORT_BY_TIME;';
export const GET_ALL_POSTS_SORT_BY_VOTE='GET_ALL_POSTS_SORT_BY_VOTE';
export const GET_ALL_POSTS_FILTER_BY_CATEGORY='GET_ALL_POSTS_FILTER_BY_CATEGORY';
export const GET_POST_BY_ID='GET_POST_BY_ID';
export const GET_ALL_COMMENT_SORT_BY_TIME='GET_ALL_COMMENT_SORT_BY_TIME';
export const GET_ALL_COMMENT_SORT_BY_VOTE='GET_ALL_COMMENT_SORT_BY_VOTE'; 
export const NEW_POST='NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const GET_COMMENT = 'GET_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';
// export const editComment = (id, timestamp, body)
// export const deleteComment = (id)
// export const newComment = (id, timestamp, body, author, parentId)
export const LOADING_CATEGORY_ENUM = {
  COMMENTS: 'COMMENTS',
  POSTS: 'POSTS',
  POST: 'POST'
};

function getAll(categories) {
  return {
    type:GET_ALL_CATEGORY,
    categories
  }
}

export function editComment_(comments){
  return dispatch => {
    return editComment(comments.id, comments.timestamp, comments.body).then(data => dispatch({type: UPDATE_COMMENT, comments}))
  }
}

export function editPost_(posts) {
    return dispatch => {
        return editPost(posts.id, posts.title, posts.body).then(data => dispatch({type: UPDATE_POST, posts}))
    }
}

export function getAllCategory() {
  return dispatch => {
    return  fetchAllCategories().then(data =>
      dispatch(getAll(data)))
  }
}

function getAllPost(posts) {
  return {
    type:GET_ALL_POSTS,
    posts
  }
}

export function getAllPosts() {
  return dispatch => {
    return  getPosts().then(data =>
      dispatch(getAllPost(data)))
      // dispatch(data))
  }
}


function getAllPostfilterbycategory_(posts) {
  return {
    type:GET_ALL_POSTS_FILTER_BY_CATEGORY,
    posts
  }
}
export function getAllPostfilterbycategory(category) {
  console.log('getAllPostfilterbycategory')
  return dispatch => {
    return  getAllPostsFromCategory(category).then(data =>
      dispatch(getAllPostfilterbycategory_(data)))
      // dispatch(data))
  }
}


function getPostbyId_(posts) {
  return {
    type:GET_POST_BY_ID,
    posts
  }
}
export function getPostbyId(posts) {
  return dispatch => {
    return  getPostsById(posts.id).then(data =>
      dispatch({type:GET_POST_BY_ID, posts}))
      // dispatch(data))
  }
}



function getAllPostsortbytime_(posts) {
  return {
    type:GET_ALL_POSTS_SORT_BY_TIME,
    posts
  }
}
export function getAllPostsortbytime() {
  console.log('getAllPostsortbytime')
  return dispatch => {
    return  getPosts().then(data =>
      dispatch(getAllPostsortbytime_(data)))
      // dispatch(data))
  }
}

function getAllPostsortbyvote_(posts) {
  return {
    type:GET_ALL_POSTS_SORT_BY_VOTE,
    posts
  }
}

export function getAllPostsortbyvote() {
  console.log('getAllPostsortbyvote')
  return dispatch => {
    return  getPosts().then(data =>
      dispatch(getAllPostsortbyvote_(data)))
      // dispatch(data))
  }
}


function getAllCommentsortbyvote_(comments) {
  return {
    type:GET_ALL_COMMENT_SORT_BY_VOTE,
    comments
  }
}

export function getAllCommentsortbyvote(id) {
  console.log('getAllCommentsortbyvote', id, getAllCommentsFromPost(id))
  return dispatch => {
    return  getAllCommentsFromPost(id).then(data =>
      dispatch(getAllCommentsortbyvote_(data)))
      // dispatch(data))
  }
}


function getAllCommentsortbytime_(comments) {
  return {
    type:GET_ALL_COMMENT_SORT_BY_TIME,
    comments
  }
}

export function getAllCommentsortbytime(id) {
  console.log('getAllCommentsortbytime', id, getAllCommentsFromPost(id))
  return dispatch => {
    return  getAllCommentsFromPost(id).then(data =>
      dispatch(getAllCommentsortbytime_(data)))
      // dispatch(data))
  }
}


function getAllComment(comments,id) {
  console.log('cctop',comments, id)
  return {
    type:GET_ALL_COMMENTS,
    id,
    comments
  }
}
// export function getAllComments() {
//   return dispatch => {
//     //return getAllCommentsFromPost('8xf0y6ziyjabvozdd253nd')
//     return getPosts()
//       .then((data)=> data
//         .map((d)=> getAllCommentsFromPost(d.id)
//           .then(data => dispatch(getAllComment(data)))))
//       // dispatch(data))
//   }
// }

export function getAllComments(post) {
    return dispatch => {
        return getAllCommentsFromPost(post).then(data =>
            dispatch(getAllComment(data, post)))
    }
}

function getAllCommentById(comments,id) {
  console.log('cctop',comments)
  return {
    type:GET_ALL_COMMENTS_BY_ID,
    id,
    comments
  }
}


export function deletePost_(posts) {
    return dispatch => {
        return deletePost(posts).then(data => {
            dispatch({type: DELETE_POST, posts})
        })
    }
}


export function deleteComment_(comments) {
    return dispatch => {
        return deleteComment(comments.id).then(data => {
            dispatch({type: DELETE_COMMENTS, comments})
        })
    }
}


export const getCommente = (id) => dispatch =>(
    getAllCommentsFromPost(id)
    .then(data => dispatch(getAllCommentById(data,id)))
  )


export const getComment_ = (id) => dispatch => (
    getComment(id)
    .then(data => dispatch({type: GET_COMMENT, data}))
  )


export function setLoadingAction(type, unitId) {
  return {
    type: SET_LOADING,
    payload: {
      type,
      unitId
    }
  }
}

// export const createNewComment = (comments) => dispatch => (
//     newComment(comments)
//         .then(newC => dispatch({
//             type: CREATE_COMMENT,
//             comments: newC
//         }))
// );
// identifier(21),this.state.timestamp,this.state.body, this.state.author, this.state.parentId
export function createNewComment(comments) {
    return dispatch => {
        return newComment(comments.id, comments.timestamp, comments.body, comments.author, comments.parentId).then((data) => 
          {dispatch( {type: CREATE_COMMENT,comments})})
    }
}


function create(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    }
}

export function newPost_(posts){
  return dispatch => {
      return newPost(posts).then(data => {
        dispatch(create(posts))
      })
    
  }
}


// export const newPost_ = (post) => dispatch => (
//       newPost(post),
//       getAllPosts()
//         // .then(posts => dispatch({
//         //     type: NEW_POST,
//         //     posts
//         // }))
//   )


export function unsetLoadingAction(type, unitId) {
  return {
    type: UNSET_LOADING,
    payload: {
      type,
      unitId
    }
  }
}

function loadCommentsAction(postId, comments) {
  return {
    type: LOAD_COMMENTS,
    payload: {
      postId,
      comments
    }
  }
}

export const backendLoadPostComments = (dispatch) => {
  return function (postId) {
    dispatch(setLoadingAction(LOADING_CATEGORY_ENUM.COMMENTS, postId));
    console.log('inside', postId)
    getAllCommentsFromPost(postId)
      .then(response => {
        dispatch(unsetLoadingAction(LOADING_CATEGORY_ENUM.COMMENTS, postId));
        return dispatch(loadCommentsAction(postId, response))
      })
  }
};

export const upVoteComment = (id) => dispatch => (

    voteComment(id, "upVote")
        .then(comments => dispatch({
            type: UP_VOTE_COMMENT,
            comments
        }))
);

export const downVoteComment = (id) => dispatch => (
    voteComment(id, "downVote")
        .then(comments => dispatch({
            type: DOWN_VOTE_COMMENT,
            comments
        }))
);



//--------------------------------------------------------------------------
// function getAllPost(posts) {
//   return {
//     type:GET_ALL_POSTS,
//     posts
//   }
// }

// export function getAllPosts() {
//   return dispatch => {
//     return  getPosts().then(data =>
//       dispatch(getAllPost(data)))
//       // dispatch(data))
//   }
// }



// export function upVotePost(id) {
//   votePost(id, "upVote");
// }


export const upVotePost = (id) => dispatch => (
    votePost(id, "upVote")
      .then(posts =>
      dispatch({type: UP_VOTE_POST,posts}))

        // .then(posts => 
        //   dispatch({type: UP_VOTE_POST,posts}))
);

export const downVotePost = (id) => dispatch => (
    votePost(id, "downVote")
        .then(posts => 
          dispatch({type: DOWN_VOTE_POST,posts}))
);