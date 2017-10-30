const api="http://localhost:3001"

let token = localStorage.token

//used it from udacity code
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

export const fetchAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () =>
    fetch(`${api}/posts/`,{headers})
    .then(res => res.json())


// For Testing
export const newPost = (id, timestamp, title, body, author, category) =>
    fetch(`${api}/posts/`,{
      method:'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({id, timestamp, title,body,author,category}),

    }).then(res=>res.json())
      .then(res=>console.log(res))



export const getAllCommentsFromPost = (id) =>
  fetch(`${api}/posts/${id}/comments/`, {headers})
  .then(res => res.json())
  .then( value => { return value })



export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`,{
    method:'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },

    deleted: JSON.stringify(true),

  }).then(getAllCommentsFromPost(id).then(
    value =>{
    for(let j=0; j<value.length; j++){
        value[j].parentDeleted=true
    }
    console.log(value)
  }
  ))


export const editPost = (id, title, body) =>
    fetch(`${api}/posts/${id}`,{
    method:'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({id, title, body}),

  }).then(res=>res.json())
    .then(res=>console.log(res))


export const editComment = (id, timestamp, body) =>
    fetch(`${api}/comments/${id}`,{
    method:'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
   
    body: JSON.stringify({id, timestamp, body}),

  }).then(res=>res.json())
    .then(res=>console.log(res))


export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`,{
    method:'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },

    deleted: JSON.stringify(true),

  }).then(res=>res.json())
    .then(res=>console.log(res))


export const newComment = (id, timestamp, body, author, parentId) =>
    fetch(`${api}/comments/`,{
    method:'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({id, timestamp, body, author, parentId}),

  }).then(res=>res.json())
    .then(res=>console.log('insert new comment',res))


export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option
        })
    }).then(res => res.json())




export const voteComment = (id, option) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option
        })
    }).then(res => res.json())