import React from 'react'
import './style.css';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar'>
       <Link to='/'> <h4 className="navelement"><strong>Feed</strong></h4></Link> 
       <Link to='/my-posts'> <h4 className="navelement"><strong>My Posts</strong></h4> </Link>        
       <Link to='/add-post'><h4 className="navelement"><strong>Add Post</strong></h4></Link>   
       <Link to='/bookmarks'> <h4 className="navelement"><strong>Bookmarks</strong></h4></Link>  
        </div>
    )
}

export default Navbar
