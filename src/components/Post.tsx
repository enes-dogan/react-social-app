function Post(props: any) {
  return (
    <div className="post" style={{ color: 'blue', textAlign: 'right' }}>
      <p>{props.body}</p>
      <hr />
      <p>{props.author}</p>
    </div>
  );
}

export default Post;
