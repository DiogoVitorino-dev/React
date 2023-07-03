import { client } from "../../api/client"
const { createSlice, createAsyncThunk, createSelector, createEntityAdapter } = require("@reduxjs/toolkit")

const postsAdapter = createEntityAdapter({
    sortComparer:(a,b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
    status:'idle',
    error:null
})

export const fetchPosts =  createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data    
})

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async initialPost => {
        const response = await client.post('/fakeApi/posts',initialPost)
        return response.data
    }
)

const PostsSlice = createSlice({
    name:'posts',    
    initialState:initialState,
    reducers:{    

        postUpdated: (state,action) => {
            const {id, title, content} = action.payload
            const post = state.entities[id]

            if (post) {
                post.title = title
                post.content = content                
            }

        },

        reactionAdded: (state,action) => {
            const {postId, reaction} = action.payload
            const existingPost = state.entities[postId] 

            if (existingPost) {
                existingPost.reactions[reaction]++                
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            postsAdapter.upsertMany(state,action.payload)
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPost.fulfilled, postsAdapter.addOne)
    }
})

export const {postAdded,postUpdated,reactionAdded} = PostsSlice.actions

export const selectPostsStatus = state => state.posts.status

export const selectPostsError = state => state.posts.error

export const {
    selectAll:selectPosts,
    selectById: selectPostById,
    selectIds:selectPostIds
} = postsAdapter.getSelectors(state => state.posts)

export const selectPostsByUser = createSelector(
    [selectPosts,(state,userId) => userId],
    (posts, userId) => posts.filter(post => post.user === userId)
)

export default PostsSlice.reducer