import React from 'react';
import {useSelector} from 'react-redux';
import SignInForm from '../components/SignInForm'

const SignIn = () => {
  const user = useSelector(state => state.user);
  if (user === "authenticated") {

  }

  return (
    <>
      <h1>Veuillez vous connecter svp</h1>
      < SignInForm />
    </>
  )
}

export default SignIn;
