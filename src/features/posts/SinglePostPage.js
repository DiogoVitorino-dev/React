import React from "react";
import { useSelector } from "react-redux";
import { selectSinglePost } from "./PostsSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

export function SinglePostPage({match}){
    const {postId} = match.params

    const post = useSelector(state => selectSinglePost(state)(postId))


    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )        
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post} />
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )    
}