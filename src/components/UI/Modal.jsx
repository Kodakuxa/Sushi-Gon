import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const EstadoInicial = (props) => {
    return <div className = {classes.backdrop} onClick={props.onClose}>
        
    </div>
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
    {createPortal(<EstadoInicial onClose={props.onClose} />, portalElement)}
    {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;