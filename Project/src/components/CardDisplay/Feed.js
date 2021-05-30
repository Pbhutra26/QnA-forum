import React from 'react';
import {connect} from 'react-redux';
import Card from './Card/Card.js';
import './style.css';
 function Feed({posts}) {

    return (
        <>
        <h2 className='card-display-header'>Feed</h2>
        <div className="container">
           
            {
                posts.map(element=><Card key={element.id} element={element}/>)
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
         posts:state.posts
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Feed);