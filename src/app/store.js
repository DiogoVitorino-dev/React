import { configureStore } from '@reduxjs/toolkit'
import PostsSlice from '../features/posts/PostsSlice'
import usersSlice from '../features/users/UsersSlice'
import NotificationsSlice from '../features/notifications/NotificationsSlice'

export default configureStore({
  reducer: {
    posts:PostsSlice,
    users:usersSlice,
    notifications:NotificationsSlice
  },
})
