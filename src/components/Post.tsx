import classes from './Post.module.css';

function Post({ author, body }: { author: string; body: string }) {
  return (
    <li className={classes.post}>
      <p>{body}</p>
      <hr />
      <p>{author}</p>
    </li>
  );
}

export default Post;
