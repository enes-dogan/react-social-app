import Post from './Post';
import Modal from './Modal';
import NewPost from './NewPost';

import classes from './PostsList.module.css';

import { useState } from 'react';

interface PostsListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

export const PostsList = ({ isPosting, onStopPosting }: PostsListProps) => {
  const [enteredBody, setEnteredBody] = useState('React.js is the best');
  const [enteredAuthor, setEnteredAuthor] = useState('Enes Dogan');

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Enver Usta' body='Angular.js is the best js framework' />
      </ul>
    </>
  );
};

export default PostsList;
