import { sub } from "date-fns"
const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState = [
    {
        id:'1',
        title:'First Post!',
        content:'Hello!', 
        user:'1',
        date: sub(new Date(),{minutes:5}).toISOString(),
        reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
    },
    {
        id:'2',
        title:'Second Post',
        content:'More text', 
        user:'2',
        date: sub(new Date(),{minutes:10}).toISOString(),
        reactions: {thumbsUp: 5, hooray: 0, heart: 0, rocket: 0, eyes: 0}
    },
]

const PostsSlice = createSlice({
    name:'posts',    
    initialState:initialState,
    reducers:{
        postAdded: {
            prepare: ({title, content, userId}) => {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        content,
                        title,
                        user:userId,
                        reactions:{thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
                    }
                }
            },
            reducer: (state,action) => {
                state.push(action.payload)
            }
        },

        postUpdated: (state,action) => {
            const {id, title, content} = action.payload
            const post = state.find(post => post.id === id)

            if (post) {
                post.title = title
                post.content = content                
            }

        },

        reactionAdded: (state,action) => {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)

            if (existingPost) {
                existingPost.reactions[reaction]++                
            }
        }
    }
})

export const {postAdded,postUpdated,reactionAdded} = PostsSlice.actions

export const selectPosts = state => state.posts

export const selectSinglePost = state => postId => 
    state.posts.find(post => post.id === postId)

export default PostsSlice.reducer