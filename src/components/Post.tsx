import { Link } from 'react-router-dom';

import classes from './Post.module.css';

interface PostProps {
  id: string, author: string; body: string
}

function Post({ id, author, body }: PostProps) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <hr />
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
