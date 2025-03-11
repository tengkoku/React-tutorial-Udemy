import Post from './Post';
import NewPost  from './NewPost';
import classes from './PostsList.module.css';

function PostsList(){
    return (
        <>
            <NewPost/>
            <ul className={classes.posts}>
                <Post author ='Afiqah' body='React.js is awesome!'/> 
                <Post author ='Tengku' body='Next.js is awesome!'/>
            </ul>
        </>
    );
}

export default PostsList;