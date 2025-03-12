import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({children}){ //{children} can also use props, inside can use {props.children} instead of {children}
    const navigate = useNavigate();
    
    function closeHandler(){
        navigate('..'); //go up one level like cd ../
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>  
        </>
    );
}

export default Modal;