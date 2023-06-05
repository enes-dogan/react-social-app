import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

export const PostsList = ({ isPosting: any }) => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [modalIsVisible2, setModalIsVisible2] = useState(false);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler2() {
    setModalIsVisible2(true);
    hideModalHandler();
  }

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

  let modalContent;

  if (modalIsVisible2) {
    modalContent = <p>hello</p>;
  }
  return (
    <>
      {isPosting ? (
        <Modal onClose={hideModalHandler} testing={hideModalHandler2}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onInputChange={changeInputHandler}
            body={enteredBody}
            author={enteredAuthor}
          />
        </Modal>
      ) : null}

      <ul className={classes.list}>
        <Post author='Enes Dogan' body='React.js is the best js framework' />
        <Post author='Enver Usta' body='Angular.js is the best js framework' />
        <Post author={enteredAuthor} body={enteredBody} />
        {modalContent}
      </ul>
    </>
  );
};

export default PostsList;
