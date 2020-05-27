import React from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const Logout = () => {
  Cookies.remove('token');
  console.log("Déconnecté(e)");
}

export const HomeRequest = () => {
  return fetch('https://api-minireseausocial.mathis-dyk.fr/posts')
    .then(response => response.json())
    .then(response => {
      return response
    })
}

export const SignInRequest = (identifier, password) => {
  const data = {
    identifier: identifier,
    password: password
  }

  var user_token = Cookies.get('token')

  fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => {
    Cookies.set('token', response.jwt, {sameSite: 'lax'});
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
  .then(response => console.log(response))
  .then(response => Cookies.set('token', response.jwt, {sameSite: 'lax'}))
  .then(console.log(Cookies.get('token')))
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
    console.log(response);
    return response
  })
}
