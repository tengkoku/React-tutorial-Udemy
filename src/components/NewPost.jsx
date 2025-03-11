import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {

    // const stateData = useState(''); //always exactly 2 elements
    // stateData[0] //current value
    // stateData[1] //state updating function //when called, not just store a new value, react will also reexecute the function in which the state is registered

    const [enteredBody, setEnteredBody] = useState('');   // [current value, state updating function]
    const [enteredAuthor, setEnteredAuthor] = useState('');

    //this function is pass as value(not function) as NewPost prop
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        props.onAddPost(postData);
        props.onCancel();
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;