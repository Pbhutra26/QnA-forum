import React,{useState} from 'react'
import './style.css';
import {connect} from 'react-redux';
import {post} from '../../Redux/actions.js'
 function InputForm({post}) {
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const[formElements, setFormElement] = useState([]);



    const handleClick=()=>{
      post(
        {
            id:101,
            userId:11,
            title:title,
            body:experience,
            comments:[]
        }
        );
       
        formElements.forEach(
            e=>{e.value='';}
            
        )
        
    }
    return (
        <div className="form-container">
            <h2 className="header">Share your experience</h2>
          
                <div className="form-element">
                <label ><strong>Post title*</strong></label>
                <div><input required onChange={(e)=>{setTitle(e.target.value); if(!formElements.includes(e.target)){formElements.push(e.target); setFormElement(formElements)}
                }} type="text" id='title' placeholder="Title" className="text-input"/></div> 
                </div>

                <div className="form-element">
                <label ><strong>Role interviewed for*</strong> </label>
                <div><input required onChange={(e)=>{setRole(e.target.value); if(!formElements.includes(e.target)){formElements.push(e.target); setFormElement(formElements)}}} type="text" id='role' placeholder="Role" className="text-input"/></div> 
                </div>

                <div className="form-element">
                <label ><strong>Company interviewed at</strong> </label>
                <div><input type="text" onChange={(e)=>{setCompany(e.target.value); if(!formElements.includes(e.target)){formElements.push(e.target); setFormElement(formElements)}}} id='company' placeholder="Company" className="text-input"/></div> 
                </div>

                <div className="form-element">
                <label><strong>Required Skills</strong> </label>
                <div><input type="text" onChange={(e)=>{setSkills(e.target.value); if(!formElements.includes(e.target)){formElements.push(e.target); setFormElement(formElements)}}} id='skills' placeholder="Skills" className="text-input"/></div> 
                </div>

                <div className="form-element">
                <label><strong>Interview experience details</strong> </label>
                <div><textarea onChange={(e)=>{setExperience(e.target.value); if(!formElements.includes(e.target)){formElements.push(e.target); setFormElement(formElements)}}} id='details' className="text-area"/></div> 
                </div>
                 

                <button  onClick={handleClick} className="form-submit-button">Post</button>
            
           
               
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
         post:(data)=>{
             dispatch(post(data))
         },


    }
}
const mapStateToProps=state=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputForm);
