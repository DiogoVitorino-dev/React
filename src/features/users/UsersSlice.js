import { client } from "../../api/client"

const { createSlice, createAsyncThunk, createEntityAdapter } = require("@reduxjs/toolkit")

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState({    
    status:'idle',
    error:null
})

export const fetchUsers =  createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data
})

const usersSlice = createSlice({
    name:'users',
    initialState:initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending,(state) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state,action) => {
            state.status = 'succeeded'
            usersAdapter.setAll(state,action.payload)
        })
        .addCase(fetchUsers.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error
        })
    }  
})

export const selectUsersStatus = state => state.users.status
export const selectUsersError = state => state.users.error

export const {
    selectById:selectUserById,
    selectAll:selectUsers
} = usersAdapter.getSelectors(state => state.users)

export default usersSlice.reducer