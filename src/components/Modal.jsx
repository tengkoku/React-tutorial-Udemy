import classes from './Modal.module.css';

function Modal({children, onClose}){ //{children} can also use props, inside can use {props.children} instead of {children}
    return (
        <>
            <div className={classes.backdrop} onClick={onClose}/>
            <dialog open className={classes.modal}>{children}</dialog>  
        </>
    );
}

export default Modal;