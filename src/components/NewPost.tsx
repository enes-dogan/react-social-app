import classes from './NewPost.module.css';

import { useState } from 'react';

interface PostData {
  author: string;
  body: string;
}

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (postData: PostData) => void;
}

const NewPost = ({ onCancel, onAddPost }: NewPostProps) => {
  const [enteredBody, setEnteredBody] = useState('React.js is the best');
  const [enteredAuthor, setEnteredAuthor] = useState('Enes Dogan');

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const postData = { author: enteredAuthor, body: enteredBody };

    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
