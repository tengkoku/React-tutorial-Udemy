import { Link } from 'react-router-dom';

import classes from './Post.module.css'; //css files specific for Post.jsx to avoid naming clashes

function Post({id, author, body}) {

    // passing JS expression in {}, in this instance is css style class
    return (
    <li className={classes.post}>
        <Link to={id}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </Link>
    </li>
    );
}

export default Post;
