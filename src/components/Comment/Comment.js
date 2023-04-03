import { useState, useEffect } from "react";
import { login } from "../../services/authService";

import * as commentService from '../../services/commentService'

import './Comment.css'

const Comment = ({comment}) =>{

    return <div className='comment'>
    <div className="comment-user">{comment.user.username? comment.user.username : comment.user.email }</div>
     <div className="">{comment.text}</div>
     </div>
}
 
export default Comment;