
import store from './store.js'
import {fetchData} from './actions.js'
const dataFetcher=  ()=>{  
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then((response) => response.json())
 .then((json) => store.dispatch(fetchData(json))).catch(error=>console.log(error));
}

 

 export {dataFetcher};
 