import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList(){
    const posts = useLoaderData();

    return (
        <>
            {/* line 25-26: transform an array into a JSX elements */}
            {posts.length > 0 ? 
                <ul className={classes.posts}>
                    {posts.map((post) => 
                        <Post key={post.id} id={post.id} author={post.author} body={post.body}/>)}
                </ul> : null}

            {posts.length === 0 ? 
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no post yet.</h2>
                    <p>Start adding some!</p>
                </div> : null}
        </>
    );
}

export default PostsList;