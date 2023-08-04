import Post from './Post';
import classes from './PostsList.module.css';

import { useState, useEffect } from 'react';

interface PostsListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}
interface PostData {
  author: string;
  body: string;
}

export const PostsList = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts()
  }, [])

  function addPostHandler(postData: PostData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    );
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      ;
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>No Posts Yet</h2>
        </div>
      )}
      {isFetching && <div style={{ textAlign: 'center', color: 'white' }}>
        <p>Loading...</p>
      </div>}
    </>
  );
};

export default PostsList;
