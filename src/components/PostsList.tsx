import Post from './Post';
import Modal from './Modal';
import NewPost from './NewPost';

import classes from './PostsList.module.css';

import { useState } from 'react';

interface PostsListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}
interface PostData {
  author: string;
  body: string;
}

export const PostsList = ({ isPosting, onStopPosting }: PostsListProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  function addPostHandler(postData: PostData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
};

export default PostsList;
