import React from 'react'
import {connect} from 'react-redux';
import Card from './Card/Card.js';
import './style.css';
function Bookmarks({bookmarks}) {


    if(bookmarks.length===0)
    return(
      <h1>Nothing bookmarked yet.</h1>
    )
     
    return (
      <>
      <h2 className='card-display-header'>Bookmarks</h2>
      <div className="container">
      
          {bookmarks.map(element=>
           <Card element={element}/>
         )} 
        </div>
      </>
      
    )
}
const mapDispatchToProps=dispatch=>{
  return{
     
     
  }
}
const mapStateToProps=state=>{
  return{
    bookmarks:state.bookmarks

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Bookmarks);


