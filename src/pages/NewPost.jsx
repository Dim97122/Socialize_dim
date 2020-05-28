import React from 'react';
import {useSelector} from 'react-redux';
import NewPostForm from '../components/NewPostForm'

const NewPost = () => {
  const user = useSelector(state => state.user);
  if (user === "authenticated") {
    return (
      <>
        <h1>Nouveau Post</h1>
        < NewPostForm />
      </>
    )
  }

  return (
    <>
      <h1>Retourne chez ta soeur !</h1>
    </>
  )
}

export default NewPost;
