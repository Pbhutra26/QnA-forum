import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import './style.css'
import {deleteComment} from '../../../Redux/actions.js'
function Comments({postId,posts,deleteComment})
{
    const [refresh,setRefresh]=useState(false)
    const [otherComments,setOtherComments]=useState([]);
    useEffect(()=> {
     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) 
    .then(response => response.json())
    .then(json => setOtherComments(json))
     },[])
  
   const post=posts.find(el=>el.id===postId)

   const comments=post.comments;
   const handleDelete=(comment)=>{
             deleteComment(comment,postId)
             setRefresh(!refresh)
   }

  if(comments.length===0&&otherComments.length===0)
  return<p>No comments on this post!</p>
    return (
        <div className='comment-container'>
            <ul>
                {
                      otherComments.map(el=>
                        <li><p>{el.body}</p></li>
                       )
                      }
                      {
                     comments.map(el=>
                        <li>{el} <button className='delete-button' onClick={()=>handleDelete(el)}>remove</button></li>
                     
                     
                     )
                    
                }
                 
                   

                
            </ul>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
      posts:state.posts
    }
}

const mapDispatchToProps=dispatch=>{
    return{
       deleteComment:(comment,id)=>
       dispatch(deleteComment(comment,id))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Comments)
