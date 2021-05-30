import * as actionTypes from './types.js';


export const addComment=(comment,id)=>{
    return {
        type:actionTypes.ADD_COMMENT,
        payload:{
            comment:comment,
            id:id
        }
    }
}


export const deleteComment=(comment,id)=>{
return {
    type:actionTypes.DELETE_COMMENT,
    payload:{
        comment:comment,
        id:id
    }
}
}
export const bookmark=(element)=>{
    return {
        type:actionTypes.BOOKMARK,
        payload:{
            element:element
        }
    }
}
export const view=(element)=>{
    return {
        type:actionTypes.VIEW,
        payload:{
            currentElement:element
        }
    }
}
export const post=(data)=>{
    return {
        type:actionTypes.POST,
        payload:{
            postElement:data
        }
    }
}
export const fetchData=(data)=>{
    return {
        type:actionTypes.FETCHPOSTS,
        payload:{
            data:data
        }
    }

}




