import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

interface Posts {
  id: string;
  body: string;
  author: string;
}

function PostsList() {
  const posts = useLoaderData() as Posts[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>No Posts Yet</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
