import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Album, Post, Todo, User } from '../../Types/customTypes';

import cls from "./UserPage.module.css";

const UserPage = () => {
    const location = useLocation();
    const data: User = location.state;

    const [posts, setPosts] = useState<Post[] | null>(null)
    const [albums, setAlbums] = useState<Album[] | null>(null)
    const [todos, setTodos] = useState<Todo[] | null>(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
            .then(response => response.json())
            .then(result => setPosts(result))

        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${data.id}`)
            .then(response => response.json())
            .then(result => setAlbums(result))

        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${data.id}`)
            .then(response => response.json())
            .then(result => setTodos(result))
    }, [])

    return (
        <div className={cls.user_page}>
            <Link to={"/"}>Back</Link>
            <br />
            <div className={cls.user_info}>
                <h2>{data.username}</h2>
                <p>{data.name}</p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
                <p>{data.website}</p>
            </div>
            <br />
            <div>
                <h2>{data.name} POSTS</h2>
                <ul>
                    {posts ? posts.map(post => {
                        return <li key={post.id}><Link to={"/postpage"} state={{ post, data }}>{post.title}</Link></li>
                    }) : <p>loading...</p>}
                </ul>
            </div>
            <br />
            <div>
                <h2>{data.name} ALBUMS</h2>
                <ul>
                    {albums?.map(album => {
                        return <li key={album.id}>{album.title}</li>
                    })}
                </ul>
            </div>
            <br />
            <div>
                <h2>{data.name} TODOS</h2>
                <ul>
                    {todos?.map(todo => {
                        return <li key={todo.id}>
                            <input type="checkbox" id={todo.title} checked={todo.completed} disabled />
                            <label htmlFor={todo.title}>{todo.title}</label>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UserPage