import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/> )
    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>

    )
};
export default MyPosts;