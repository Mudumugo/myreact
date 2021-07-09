import React, { useState, Typography } from 'react';


const Home = () => {

  const [blogs, setblogs] = useState([
      {title:"My new website", body: 'lorem ipsum ...', author: 'mario', id: 1},
      {title:"Welcome party", body: 'lorem ipsum ...', author: 'Yoshi', id: 2},
      {title:"Web Dev topics", body: 'lorem ipsum ...', author: 'mario', id: 3}
    ]);

    const [orders, setorders] = useState([
        {title:"Poverty in Africa", details: 'lorem ipsum ...', author: 'Safya Mukenyi', id: 1, subject:"Business"},
        {title:"How to cook", details: 'lorem ipsum ...', author: 'Sanaa Muriithi', id: 1, subject:"Maths"},
        {title:"American politics", details: 'lorem ipsum ...', author: 'shiku', id: 1, subject:"Nursing"},
        {title:"My new website", details: 'lorem ipsum ...', author: 'Mom', id: 1, subject:"Physc"},
    
    ]);

    return ( 
        <div>
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}

        </div>
        <div className="orders">
            {orders.map((order)=>(
                <div className="manageorders" key={order.id}>
             
                    <h4>{order.id}</h4>
                    <h2>{order.title}</h2>
                    <h4>{order.author}</h4>
                    <h4>{order.subject}</h4>
                    <h4>{order.details}</h4>

                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Home;