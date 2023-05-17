const goodOrBad = ['worst', 'best'];
function Post(params: any) {
  const chosen = Math.random() > 0.5 ? goodOrBad[0] : goodOrBad[1];
  return (
    <div>
      <p>React.js is the {chosen} JavaScript Library </p>
      <p>Enes Dogan</p>
    </div>
  );
}

export default Post;
