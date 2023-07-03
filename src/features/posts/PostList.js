import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostIds, selectPostsError, selectPostsStatus, selectPostById } from './PostsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButton';
import { Spinner } from '../../components/Spinner';
import { selectUsersError, selectUsersStatus } from '../users/UsersSlice';
import { Link } from 'react-router-dom';

const PostExcerpt = ({postId}) => {
    const post = useSelector(state => selectPostById(state,postId))
    return (
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
    )
}

export default function PostsList() {    
    const dispatch = useDispatch()
    const orderedPostIds = useSelector(selectPostIds)

    const postStatus = useSelector(selectPostsStatus)
    const postError = useSelector(selectPostsError)

    const usersStatus = useSelector(selectUsersStatus)
    const usersError = useSelector(selectUsersError)

    useEffect(() => {
        if(postStatus === 'idle') dispatch(fetchPosts())
    },[postStatus,dispatch])    

    let content = <></>

    if (postStatus === 'loading' || usersStatus === 'loading')
        content = <Spinner text="loading..." />

    else if(postStatus === 'succeeded' || usersStatus === 'succeeded') {        
        content = orderedPostIds.map(postId => 
            <PostExcerpt postId={postId} key={postId} />
        )

    } else if(postStatus === 'failed')
        content = <div>{postError}</div>

    else if(usersStatus === 'failed')
        content = <div>{usersError}</div>

    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            {content}
        </section>
    )
};
