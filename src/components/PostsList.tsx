import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

export const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHandler(event: any) {
    console.log(event.target.value);
    setEnteredBody(event.target.value);
    console.log(enteredBody);
  }

  function changeInputHandler(event: any) {
    console.log(event.target.value);
    setEnteredAuthor(event.target.value);
    console.log(enteredAuthor);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onInputChange={changeInputHandler}
          body={enteredBody}
          author={enteredAuthor}
        />
      </Modal>
      <ul className={classes.list}>
        <Post author='Enes Dogan' body='React.js is the best js framework' />
        <Post author='Enver Usta' body='Angular.js is the best js framework' />
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
};

export default PostsList;
