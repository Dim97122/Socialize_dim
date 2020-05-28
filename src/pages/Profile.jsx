import React, { useEffect, useState } from 'react';
import * as API from '../services/api';

const Profile = () => {
  const [userName, setUserName] = useState()

  useEffect(() => {
    API.MyProfileRequest()
    .then(response => setUserName(response.username))
  }, [])

  return (
    <>
      <div>
        <h1>YO WELCOME {userName} ON YA PROFILE !</h1>
        
      </div>
    </>
  )
}
export default Profile
