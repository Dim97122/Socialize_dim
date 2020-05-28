import React, { useEffect, useState } from 'react';
import Post from 'components/Post';
import {useSelector} from 'react-redux';
import * as PostsAPI from 'services/Posts';


const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    PostsAPI.HomePostsRequest()
    .then(response => {
      let tmp = response.map(el => <Post text={el.text} />);
      setPosts(tmp.reverse())
    })
  }

  useEffect(getPosts, [])

const token = useSelector(state => state.token);

if (token !== undefined) {
  return (
    <>
      <h1>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</h1>
      <ul>
        {posts}
      </ul>
    </>
  )
}

return (
  <>
    <h1>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</h1>
    
  </>
)

}

export default Home;
