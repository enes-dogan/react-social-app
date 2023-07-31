import classes from './NewPost.module.css';

interface NewPostProps {
  onBodyChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onAuthorChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NewPost = ({ onBodyChange, onAuthorChange }: NewPostProps) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' required onChange={onAuthorChange} />
      </p>
    </form>
  );
};

export default NewPost;
