import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import * as API from '../services/api';


const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    API.HomeRequest()
    .then(response => {
      let tmp = response.map(el => <Post text={el.text} />);
      setPosts(tmp)
    })
  }

  useEffect(getPosts, [])

  return (
    <>
      <h1>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</h1>
      <ul>
        {posts}
      </ul>
    </>
  )
}

export default Home;
