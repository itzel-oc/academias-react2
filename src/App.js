/* import React, { useState, useEffect } from 'react';
import Post from './Post';

function App() {
  const [createPost, setPost] =useState([]); */


//   useEffect(()=>{
//     fetch('https://private-c3edb-postsmock.apiary-mock.com/posts')
// .then(response => response.json())
// .then(data => {
//   console.log(data);   
// })
// .catch(error => console.error(error))
//  },[]);
          
 /*     useEffect(()=>{
        fetch('https://private-c3edb-postsmock.apiary-mock.com/posts')
             .then(response => setPost(response.data))              
             .catch(error => console.error(error))
             },[]);

  return (
    <div className="App">
      <Post posts={createPost} >
        
      </Post>
    </div>
  );
} */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post'

function App() {
  const [ postList, setpostList ] = useState( [] ); 

  useEffect( () => {
    axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts').
    then( response => setpostList( response.data ) )
    }, []);

  return (
    <div className="App">
      <Post posts={postList} />
    </div>
  );
}

export default App;
 