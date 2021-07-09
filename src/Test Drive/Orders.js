
// this is the conventional way of nesting variables inside components instead of using props.
import React, { useState } from 'react'



const  Orders= () => {

    const [orders,setorders] = useState([
        {title:"Poverty in Africa", details: 'lorem ipsum ...', author: 'Safya Mukenyi', id: 1, subject:"Business"},
        {title:"How to cook", details: 'lorem ipsum ...', author: 'Sanaa Muriithi', id: 2, subject:"Maths"},
        {title:"American politics", details: 'lorem ipsum ...', author: 'shiku', id: 3, subject:"Nursing"},
        {title:"My new website", details: 'lorem ipsum ...', author: 'Mom', id: 4, subject:"Physc"},
    
]);

    return ( 
        <div className="orders">
            {orders.map((order)=>
            <div className="manageorders" key={order.id}>
                <p>{order.title}</p>
                <h2>{order.author}</h2>
                <h4>{order.subject}</h4>
                
            </div>
            )}
            
        </div>
     );
}
 
export default Orders;
