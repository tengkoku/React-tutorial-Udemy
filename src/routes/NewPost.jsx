import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost(props) {

    // const stateData = useState(''); //always exactly 2 elements
    // stateData[0] //current value
    // stateData[1] //state updating function //when called, not just store a new value, react will also reexecute the function in which the state is registered

    // const [enteredBody, setEnteredBody] = useState('');   // [current value, state updating function]
    // const [enteredAuthor, setEnteredAuthor] = useState('');

    //this function is pass as value(not function) as NewPost prop
    // function bodyChangeHandler(event){
    //     setEnteredBody(event.target.value);
    // }

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body'required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name='author' required/>
        </p>
        <p className={classes.actions}>
          <Link to='..' type='button'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json'
    },
  }); 
  
  return redirect('/');
}