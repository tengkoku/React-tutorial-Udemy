import classes from './Post.module.css'; //css files specific for Post.jsx to avoid naming clashes

function Post(props) {

    // passing JS expression in {}, in this instance is css style class
    return (
    <li className={classes.post}>
        <p className={classes.author}>{props.author }</p>
        <p className={classes.text}>{props.body}</p>
    </li>
    );
}

export default Post;
