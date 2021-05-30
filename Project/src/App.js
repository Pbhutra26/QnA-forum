
import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import InputForm from './components/InputForm/InputForm.js';
import Navbar from './components/Navbar/Navbar.js';
import Feed from './components/CardDisplay/Feed.js';
import RelatedQuestions from './components/Related/RelatedQuestions.js';
import Bookmarks from './components/CardDisplay/Bookmarks.js';
import MyPosts from './components/CardDisplay/MyPosts.js';
import SingleItem from './components/SingleItem/SingleItem';

function App({posts}) {

  return (
    <Router>
      <div className="App">
      <Navbar/>
        
        <Switch>
          <Route exact path='/' component={()=> <Feed/>}></Route>
          <Route exact path='/add-post' component={()=> <InputForm />}></Route>
          <Route exact path='/bookmarks' component={()=> <Bookmarks/>}></Route>
          <Route exact path='/my-posts' component={()=> <MyPosts/>}></Route>
          <Route exact path='/post' component={()=> <SingleItem element={posts[0]}/>}></Route>
          
          
        </Switch>

       

        {/* <RelatedQuestions/> */}
        
     
    </div>
    </Router>
  
 
  );
}
const mapStateToProps=(state)=>{
  return {
    posts:state.posts
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
      
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
