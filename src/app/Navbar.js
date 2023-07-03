import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchNotifications, selectAllNotifications } from '../features/notifications/NotificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter(notification => !notification.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  let unreadNotificationBagde

  if (numUnreadNotifications > 0) {
    unreadNotificationBagde = (
      <span className='bagde'>{numUnreadNotifications}</span>
    )
    
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notification">Notifications {unreadNotificationBagde}</Link>
          </div>
          <button className='button' onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
