import { useSelector } from "react-redux";
import { selectSingleUser } from "../users/UsersSlice";

export default function PostAuthor({userId}) {
    const author = useSelector(state => selectSingleUser(state)(userId))
    
    return <span>by {author ? author.name : 'Unknown author'}</span>
}