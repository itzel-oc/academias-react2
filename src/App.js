import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Post from './Post'
import Button from '@material-ui/core/Button'
import './Cards.css'


function App() {

  const handleClick = (e) => {
    e.preventDefault();
      const seleccion=(if(category===postList.category)}
    }  
  

  const [ postList, setPostList ] = useState( [] ); 

   useEffect(()=>{
     axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
     .then(function(response) {
       return setPostList(response.data); 
 })
 .catch(function(error){ console.error(error)})
  },[]);

  return (
    <div className="App">
 
      <div >
      <Button className="boton" onClick={handleClick}> Travel </Button>
      
      </div> 

      <Post posts={postList} />
    </div>
  );
}


// <Router>
// <NavBar/>
//   <div className="main-container">
//     <Route path="/Post" render={(props)=> <Post post={this.state.post} {...props}/>}/>
//   </div>
// </Router>

export default App;

