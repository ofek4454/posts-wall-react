import classes from "./Modal.module.css";
import { CSSTransition } from "react-transition-group";

const Modal: React.FC<{
  children: React.ReactNode;
  show: boolean;
  close: () => void;
}> = (props) => {
  return (
    <>
      {props.show && <div className={classes.backdrop} onClick={props.close} />}
      <CSSTransition
        in={props.show}
        timeout={400}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: classes.ModalOpen,
          exitActive: classes.ModalClose,
        }}
      >
        <dialog open className={classes.modal}>
          {props.children}
        </dialog>
      </CSSTransition>
    </>
  );
};

export default Modal;
