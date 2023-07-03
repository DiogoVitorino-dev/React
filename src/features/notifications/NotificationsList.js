import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allNotificationsRead, selectAllNotifications } from './NotificationsSlice';
import { selectUsers } from '../users/UsersSlice';
import { formatDistanceToNow, parseISO } from 'date-fns';
import classNames from 'classnames';

export default function NotificationList() {
    const dispatch = useDispatch()
    const notifications = useSelector(selectAllNotifications)
    const users = useSelector(selectUsers)

    useLayoutEffect(()=>{
        dispatch(allNotificationsRead())
    })

    const renderedNotifications = notifications.map(notification => {
        const date = parseISO(notification.date)
        const timeAgo = formatDistanceToNow(date)

        const user = users.find(user => user.id === notification.user) || {
            name:'unknow User'
        } 
        
        const notificationClassname = notification.isNew 
        ? classNames('notification',{new:notification.isNew})
        : ''

        return (
            <div key={notification.id} className={notificationClassname}>
                <div>
                    <b>{user.name}</b> {notification.message}
                </div>
                <div title={notification.date}>
                    <i>{timeAgo} ago</i>
                </div>
            </div>
        )
    })



    return (
        <section className='notificationList'>
            <h2>Notifications</h2>
            {renderedNotifications}
        </section>
    )
};
