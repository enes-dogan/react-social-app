import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';

import classes from './NewPost.module.css';


interface PostData {
  author: string;
  body: string;
}

interface NewPostProps {
  onAddPost: (postData: PostData) => void;
}

const NewPost = ({  onAddPost }: NewPostProps) => {
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
    <>
      <Modal>
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
            <Link to='..' type='button'>
              Cancel
            </Link>
            <button>Submit</button>
          </p>
        </form>
      </Modal>
    </>
  )
}
export default NewPost;
