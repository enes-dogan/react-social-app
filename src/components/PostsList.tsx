import Post from './Post';
import Modal from './Modal';
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import { useState } from 'react';

export const PostsList = (props: any) => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('React.js is the best');
  const [enteredAuthor, setEnteredAuthor] = useState('Enes Dogan');

  function hideModalHandler(event: any) {
    setModalIsVisible(false);
  }

  function changeBodyHandler(event: any) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event: any) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler} isModalOpen={modalIsVisible}>
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
