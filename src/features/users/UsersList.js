import { useSelector } from "react-redux"
import { selectUsers } from "./UsersSlice"
import { Link } from "react-router-dom"
import React from "react"

export const UsersList = () => {
    const users = useSelector(selectUsers)

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
    ))

    return (
        <section>
            <h2>Users</h2>
            <ul>{renderedUsers}</ul>
        </section>
    )
}