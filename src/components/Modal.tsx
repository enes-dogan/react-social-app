import classes from './Modal.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Modal = ({ children, onClose }:{children:any, onClose:any}) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
