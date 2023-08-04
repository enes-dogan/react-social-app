import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const navigate = useNavigate();
  function closeHandler(params: any) {
    navigate(-1);
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
