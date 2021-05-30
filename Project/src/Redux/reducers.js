import * as actionTypes from './types.js';
const initialState={
 posts:[],
 bookmarks:[],
 myPosts:[],
 currentElement:{}
}
const reducers=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.BOOKMARK:


           if(!state.bookmarks.includes(action.payload.element))
           state.bookmarks.push(action.payload.element);
          
           
            return{...state
            }
        case actionTypes.ADD_COMMENT:
               const id=action.payload.id;
               const comment=action.payload.comment
               state.posts.map(element=>
             { 
                 if(element.id==id){ 
                element.comments.push(comment);
                return{
                    ...element,comments:element.comments
                      }

                 }  
            }    
                )
            
            return{
             ...state
            }
        
        case actionTypes.DELETE_COMMENT:
             
                const delId=action.payload.id;
                const delComment=action.payload.comment;
                state.posts.map(element=>
              { 
                  if(element.id===delId)
                  { 
                      console.log(element.comments)
                      element.comments=element.comments.filter(comm=>comm!==delComment)
                      console.log(element.comments)
                 return{
                         ...element
                       }
                     } 
                 else 
                 return element
             }    
                 )
             
             return{
              ...state
             }
           
        case actionTypes.VIEW:
            return{
                ...state,
                currentElement:action.payload.currentElement

            }
        
        case actionTypes.POST:
              state.posts.push(action.payload.postElement)
              state.myPosts.push(action.payload.postElement)
            return{
                ...state
            }
    
        case actionTypes.FETCHPOSTS:

         var posts=action.payload.data;
          var nPosts=posts.map(el=>{return{...el,comments:[]}})
          console.log(nPosts[0])

                
            return{
              ...state, posts:nPosts
            }

        default:
            return {...state};

    }
}
export {reducers};