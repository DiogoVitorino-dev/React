import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserById } from './UsersSlice';
import { selectPostsByUser } from '../posts/PostsSlice';
import { Link } from 'react-router-dom';

export default function UserPage({match}) {
    const {userId} = match.params
    const user = useSelector(selectUserById(userId))

    const postForUser = useSelector(state => selectPostsByUser(state,userId))

    const postTitles = postForUser.map(post => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ))

    return (
        <section>
            <h2>{user.name}</h2>
            <ul>{postTitles}</ul>
        </section>
    )
};
