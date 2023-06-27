import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from './PostsSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButton';

export default function PostsList() {
    const posts = useSelector(selectPosts)

    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    
    const renderedPosts = orderedPost.map(post => (
        <article className='post-excerpt' key={post.id}>            
            <h3>{post.title}</h3>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
            <p className='post-content' >{post.content.substring(0,100)}</p>
            <ReactionButtons post={post} />           
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    ))

    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
};