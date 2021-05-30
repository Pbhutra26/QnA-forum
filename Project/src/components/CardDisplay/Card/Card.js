import React,{useState,useEffect} from 'react';
import {myData }from '../../../Redux/constants.js'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bookmark,view} from '../../../Redux/actions.js'
import './style.css';
function Card({element,bookmark,view}) {
    const [userData,setUserData]=useState({});
    const [nameHead,setNameHead]=useState('');
    const [skills, setSkills]=useState('');
    
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${element.userId}`)
      .then(response => response.json())
      .then(json => {
              if(element.userId===11)
               {  
                 console.log('it came here?')
                   setUserData(myData);
               }
   
              else 
                   setUserData(json);
                  

            const s=userData.company.bs.split(' ');
            var skill='';
               s.forEach(el=>{
                   skill=skill+'#'+el+' ';
                });
                setSkills(skill);

             
               setNameHead(userData.name+', '+userData.company.catchPhrase+', '+userData.company.name);


               
              }).catch(error=>console.log('error'))

          },[userData])
  
 
      

     

     
        return(
           <div className='card'> 
            <h6 className='details'>{nameHead}</h6>
           
              <Link to='/post' className='tooltip' onClick={()=>view(element)}> 
                 <h2> {element.title}</h2>  
              </Link> 
              
              <img onClick={()=>{bookmark(element)}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw58UBSRwdi_mPW5PLMs2sk_Y0HUMVI3cirQ&usqp=CAU'
                  className='bookmark-icon'/>
              <h6 className='details'>{skills}</h6>
                {element.body}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeCZb6NCZkE2iAEfcMucvggmG0m6ekRg5ig&usqp=CAU'
              className='share-icon tooltip'/>
    
        
        </div>
        );
        
      }
     
           
    
    

const mapStateToProps=state=>{
  return{
  users:state.users
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    bookmark:data=>{
      dispatch(bookmark(data))
    },
    view:(element)=>dispatch(view(element))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
