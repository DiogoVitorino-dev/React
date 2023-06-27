const { createSlice } = require("@reduxjs/toolkit")

const initialState = [ 
    { id: '0', name: 'Tianna Jenkins' },
    { id: '1', name: 'Kevin Grant' },
    { id: '2', name: 'Madison Price' }
]

const usersSlice = createSlice({
    name:'users',
    initialState:initialState,
    reducers:{}  
})

export const selectUsers = state => state.users
export const selectSingleUser = state => userId => 
    state.users.find(user => user.id === userId)

export default usersSlice.reducer