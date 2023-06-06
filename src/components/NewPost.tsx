import { useState } from 'react';

import classes from './NewPost.module.css';

export const NewPost = (props: any) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event: any) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: any) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event: any) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
          rows={3}
          required
          onChange={bodyChangeHandler}
          className={classes.textarea}
          style={{ resize: 'none' }}
        />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          required
          onChange={authorChangeHandler}
          className={classes.name}
        />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
