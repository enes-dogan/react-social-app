import Post from './Post';
import Modal from './Modal';
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PostsList = ({
  isPosting,
  onStopPosting,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isPosting: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onStopPosting: any;
}) => {
  const [enteredBody, setEnteredBody] = useState('React.js is the best');
  const [enteredAuthor, setEnteredAuthor] = useState('Enes Dogan');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeBodyHandler(event: any) {
    setEnteredBody(event.target.value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeAuthorHandler(event: any) {
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
