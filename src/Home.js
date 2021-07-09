import React, { useEffect, useState} from 'react';
import Orders from './Test Drive/Orders';
import Bloglist from './Bloglist';


const Home = () => {

  const [blogs, setBlogs] = useState([
      {title:"My new website", body: 'lorem ipsum ...', author: 'mario', id: 1},
      {title:"Welcome party", body: 'lorem ipsum ...', author: 'Yoshi', id: 2},
      {title:"Web Dev topics", body: 'lorem ipsum ...', author: 'mario', id: 3}
    ]);

    const [name, setName] = useState("Mario");

    const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog =>blog.id !== id);
    setBlogs(newBlogs);
    }

    //useEffect hook runs after every render. can be used to fetch and update var.
      useEffect(()=>{
        console.log('use effect ran');
        console.log(name);
      },[name]);

    return ( 
        <div>
        <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        <button onClick={()=>setName('luigi')}>Change name</button>
        <p>{name}</p>
        <Orders/>
        </div>
     );
}
 
export default Home;