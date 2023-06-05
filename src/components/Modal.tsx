import classes from './Modal.module.css';

function Modal(props: any) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}/>

      <dialog open className={classes.modal}>
        {props.children}
        <button onClick={props.testing}>test</button>
      </dialog>
    </>
  );
}

export default Modal;
