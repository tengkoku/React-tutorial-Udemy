import classes from './Post.module.css'; //css files specific for Post.jsx to avoid naming clashes

function Post({author, body}) {

    // passing JS expression in {}, in this instance is css style class
    return (
    <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
    </li>
    );
}

export default Post;
