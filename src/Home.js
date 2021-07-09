import React, { useEffect, useState} from 'react';
import Orders from './Test Drive/Orders';
import Bloglist from './Bloglist';


const Home = () => {

  const [blogs, setBlogs] = useState(null);
    

    const [name, setName] = useState("Mario");

    const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog =>blog.id !== id);
    setBlogs(newBlogs);
    }

    //useEffect hook runs after every render. can be used to fetch and update var.
      useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
          res.json();
        })
        .then(data=>{
          console.log(data);
          setBlogs(data)
        })
      },[]);

    return ( 
        <div>
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
        <button onClick={()=>setName('luigi')}>Change name</button>
        <p>{name}</p>
        <Orders/>
        </div>
     );
}
 
export default Home;