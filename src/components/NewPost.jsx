import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {

    // const stateData = useState(''); //always exactly 2 elements
    // stateData[0] //current value
    // stateData[1] //state updating function //when called, not just store a new value, react will also reexecute the function in which the state is registered

    const [enteredBody, setEnteredBody] = useState('');   // [ current value, state updating function]

    function changeBodyHandler(event){
        setEnteredBody(event.target.value)
    }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;