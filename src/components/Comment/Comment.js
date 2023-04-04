import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as commentService from '../../services/commentService'

import './Comment.css'

const Comment = ({
    comment,
    commentDel
}) => {

    const { user } = useContext(AuthContext);

    const commentDelete = () => {
        commentService.del(comment._id)
            .then((res) => {
                console.log(res);
                commentDel(comment._id)
            })
    }

    return <div className='comment'>
        <div>
            <div className="comment-user">{comment.user.username ? comment.user.username : comment.user.email}</div>
            <div className="">{comment.text}</div>
        </div>
        { user._id == comment._ownerId
        ?  <div className="comment-buttons">
        <button className="btn delete" onClick={commentDelete} >Delete</button>
        </div>
        : null
        }
    </div>
}

export default Comment;