import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

interface CustomRequest extends Request {
  formData: () => Promise<FormData>;
}

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
/* eslint-disable react-refresh/only-export-components */
export async function action({ request }: { request: CustomRequest }) {// data.request is the incoming request object from the client.]
  const formData = await request.formData();
  // formData.get('body');
  // formData.get('author');
  // OR
  const postData = Object.fromEntries(formData); // { body: ... , author: ... }
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
