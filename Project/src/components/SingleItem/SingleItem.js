import React,{useState,useEffect} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {addComment} from '../../Redux/actions.js'
import Comments from './Comments/Comments';
function SingleItem({currentElement,addComment,posts}) {
    const [comment, setComment] = useState('');
    const [show,setShow]=useState(false);
    const [refresh,setRefresh]=useState(false);
  const clickHandler =  () => {
      addComment(comment,currentElement.id);
     
     document.querySelector('.comment-input').value='';
     setRefresh(!refresh);
  
    }
    return (
     
            <div className='item-card'>
         
              <h2> {currentElement.title}</h2> 
            

                {currentElement.body}
           
            <h4 onClick={()=>setShow(!show)}>{show?'Hide Comments':'Show Comments'}</h4>


            {(show && <Comments postId={currentElement.id}/>)}




           <div className='comment-div'> 
            <input
             type='text' 
             placeholder="comment" 
             className='comment-input'
             onChange={(e)=>{setComment(e.target.value)
            
             }}
             />

            <button 
            
             className='comment-submit-button'
             onClick={clickHandler}
             >Add</button></div>
           
            </div>
            
      
    )
}
const mapDispatchToProps=dispatch=>{
  return{
      addComment:(comment,id)=>{
        dispatch(addComment(comment,id))
      }

  }
}
const mapStateToProps=state=>{
  return{
           currentElement:state.currentElement,
           posts:state.posts
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleItem);

