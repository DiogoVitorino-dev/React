import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const notificationAdpater = createEntityAdapter({
     sortComparer:(a,b) => b.date.localeCompare(a.date)
})

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async (_,{getState}) => {
        const allNotifications = selectAllNotifications(getState())
        const [latestNotification] = allNotifications
        const  latestTimestamp = latestNotification ? 
        latestNotification.date : ''
        const response = await client.get(`/fakeApi/notifications?since=${latestTimestamp}`)
        
        return response.data
    }
)

const notificationsSlice = createSlice({
    name:'notifications',
    initialState:notificationAdpater.getInitialState(),
    reducers:{
        allNotificationsRead(state,action) {
            Object.values(state.entities).forEach(notifications => {
                notifications.read = true
            })
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchNotifications.fulfilled, (state,action) => {
            notificationAdpater.upsertMany(state,action.payload)

            Object.values(state.entities).forEach(notification => {
                notification.isNew = !notification.read
            })
        })
    }
})

export const {allNotificationsRead} = notificationsSlice.actions

export const {
    selectAll:selectAllNotifications
} = notificationAdpater.getSelectors(state => state.notifications)

export default notificationsSlice.reducer