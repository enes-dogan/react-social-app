import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

export const PostsList = (props: any) => {
  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} />
        </Modal>
      ) : null}
      <ul className={classes.list}>
        <Post author='Enes Dogan' body='React.js is the best js framework' />
        <Post author='Enver Usta' body='Angular.js is the best js framework' />
      </ul>
    </>
  );
};

export default PostsList;
