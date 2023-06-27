import React from "react"
import { useDispatch } from "react-redux"
import { reactionAdded } from "./PostsSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

export default function ReactionButtons({post}) {
    const dispatch = useDispatch()
    console.log();
    const reactionButtons = Object.entries(reactionEmoji)
    .map(([name,emoji]) => {
        return (
            <button 
                key={name} 
                type="button" 
                className="muted-button reaction-button"
                onClick={() => 
                dispatch(reactionAdded({postId:post.id,reaction:name}))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )   
    })
    
    return <div>{reactionButtons}</div>
}