import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'

export const Logout = () => {
  Cookies.remove('token');
  console.log("Déconnecté(e)");
}

export const SignInRequest = (identifier, password) => {
  const data = {
    identifier: identifier,
    password: password
  }

  fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    let cookie = Cookies.set('token', response.jwt);
    console.log(response.user.username + " Connecté(e)" );
  })
}

export const RegisterRequest = (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password
  }

  fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => Cookies.set('token', response.jwt))
}

export const MyProfileRequest = () => {

  var user_token = Cookies.get('token')

  return fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
    headers: {
      'Authorization': `Bearer ${user_token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    return response
  })
}

export const ModifyProfileRequest = () => {

  var user_token = Cookies.get('token')

  return fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
    method: 'put',
    headers: {
      'Authorization': `Bearer ${user_token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    return response
  })
}
