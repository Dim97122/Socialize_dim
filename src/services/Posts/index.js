import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const HomePostsRequest = () => {
  return fetch('https://api-minireseausocial.mathis-dyk.fr/posts')
    .then(response => response.json())
    .then(response => {
      return response
    })
}

export const CreatePost = (text, id) => {
  var user_token = Cookies.get('token')

  const data = {
    text: text,
    id: jwt_decode(user_token).id
  }

  fetch('https://api-minireseausocial.mathis-dyk.fr/posts', {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${user_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(console.log("Post sent"))
}
