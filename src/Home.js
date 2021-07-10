import React, { useEffect, useState} from 'react';
import Orders from './Test Drive/Orders';
import Bloglist from './Bloglist';


const Home = () => {

  const [isPending, setIsPending]=useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
    

    

    

    //useEffect hook runs after every render. can be used to fetch and update var.
      useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
          
          if(!res.ok){
            throw Error('could not fetch the data from that resource')
          }
          return res.json();
        })
        .then(data=>{
          // can use console.log to check if the data is being rendered in the console
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err =>{
          setError(err.message)
        })
      },[]);

    return ( 
        <div>
          {error && <div>{error}</div>}
          {isPending && <div>Loading.....</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}
        {/* <button onClick={()=>setName('luigi')}>Change name</button> */}
       
        <Orders/>
        </div>
     );
}
 
export default Home;