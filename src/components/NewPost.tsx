import classes from './NewPost.module.css';

export const NewPost = (props: any) => {
  function prevent(event: any) {
    event.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={prevent}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
          rows={3}
          required
          onChange={props.onBodyChange}
          className={classes.textarea}
          style={{ resize: 'none' }}
        />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          required
          onChange={props.onInputChange}
          className={classes.name}
        />
      </p>
      <button className='btn'>Add</button>
      <p>{props.body}</p>
      <p>{props.author}</p>
    </form>
  );
};

export default NewPost;
