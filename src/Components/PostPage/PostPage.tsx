import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import cls from "./PostPage.module.css";

const PostPage = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className={cls.post}>
            <Link to={"/userpage"} state={data.data}>Back</Link>
            <h3>{data.post.title}</h3>
            <p>{data.post.body}</p>
            <div>
                <p><Link className={cls.button_link} to={"/userpage"} state={data.data}>{data.data.name}</Link> - {data.data.email}</p>
            </div>
        </div>
    )
}

export default PostPage