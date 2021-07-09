import React, { useState} from 'react';
import Orders from './Test Drive/Orders';
import Bloglist from './Bloglist';


const Home = () => {

  const [blogs, setBlogs] = useState([
      {title:"My new website", body: 'lorem ipsum ...', author: 'mario', id: 1},
      {title:"Welcome party", body: 'lorem ipsum ...', author: 'Yoshi', id: 2},
      {title:"Web Dev topics", body: 'lorem ipsum ...', author: 'mario', id: 3}
    ]);

    const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog =>blog.id !== id);
    setBlogs(newBlogs);
    }
    return ( 
        <div>
        <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        <Orders/>
        </div>
     );
}
 
export default Home;