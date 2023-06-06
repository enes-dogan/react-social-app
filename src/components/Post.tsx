import classes from './Post.module.css';

function Post(props: any) {
  return (
    <li className={classes.post}>
      <p>{props.body}</p>
      <hr />
      <p>{props.author}</p>
    </li>
  );
}

export default Post;
