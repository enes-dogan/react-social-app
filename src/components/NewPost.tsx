import classes from './NewPost.module.css';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NewPost = (props: any) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
};

export default NewPost;
