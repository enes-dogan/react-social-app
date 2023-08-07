import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

interface CustomRequest extends Request {
  postId: () => Promise<FormData>;
}

interface PostTypes {
  author: string;
  body: string;
}

function PostDetails() {
  const post = useLoaderData() as PostTypes;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

/* eslint-disable react-refresh/only-export-components */
export async function loader({ params }: { params: CustomRequest }) { // data.params is the params object from the route.
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}
