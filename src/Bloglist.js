
//using props to pass variable to components.
const Bloglist = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="allblogs">
            
        
        {blogs.map((blog)=>
            
            <div className="blog-preview" key= {blog.id}>
                <h1>{title}</h1>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={()=>handleDelete(blog.id)}>Delete blog</button>
            </div>
        )}
</div>
    
     );
}
 
export default Bloglist;