import React from 'react';
import * as API from '../../services/api';


const NewPostForm = () => {

  const submit = (e) => {
    e.preventDefault();
    let text = document.getElementById('text').value;
    API.CreatePost(text);
  }

  return (
    <>
      <div>
        <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input type="text" className="form-control" placeholder="I'm the best blablabla" id="text" />
          </div>
          <button type="submit" className="btn btn-primary">Share</button>
        </form>
      </div>
    </>
  )
}


export default NewPostForm;
