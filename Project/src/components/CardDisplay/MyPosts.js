import React from 'react'
import Card from './Card/Card.js';
import {connect} from 'react-redux';

function MyPosts({myPosts}) {

    if(myPosts.length===0)
    return(
      <h1>Nothing Posted yet.</h1>
    )



    return (
        <>
        <h2 className='card-display-header'>My Posts</h2>
        <div className="container">
            
            {
                 myPosts.map(element=>
                   <Card element={element}/>)
            }
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
          myPosts:state.myPosts
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyPosts);

