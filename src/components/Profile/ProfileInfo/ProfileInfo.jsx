import React from "react";
import classes from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.content}>
                <img src='https://i.imgur.com/RRUe0Mo.png' alt="content"/>
            </div>
            <div className={classes.discriptionBlock}>
                ava+discription
            </div>
        </div>
    );
};
export default ProfileInfo;