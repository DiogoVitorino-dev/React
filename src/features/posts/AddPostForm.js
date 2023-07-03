import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from './PostsSlice';
import { selectUsers } from '../users/UsersSlice';

export function AddPostForm() {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserID] = useState('')
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const users = useSelector(selectUsers)

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setUserID(e.target.value)

    const canSave = [title,content,userId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                await dispatch(addNewPost({title,content,user:userId})).unwrap()
                setTitle('')
                setContent('')
                setUserID('')                
            } catch (error) {
                console.error('Failed to save the post: ', error);                
            }finally{
                setAddRequestStatus('idle')
            }
        }
    }

    

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postAuthor'>Author:</label>
                <select                    
                    id='postAuthor'                    
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor='postContent'>Content:</label>
                <textarea                    
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button type='button' onClick={onSavePostClicked} disabled={!canSave} >Save Post</button>
            </form>
        </section>
    )

};
