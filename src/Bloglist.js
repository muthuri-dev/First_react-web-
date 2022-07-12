
import { Link } from "react-router-dom";
const BlogList = (props) => {
    const blogs=props.blogs;
    return (  
        <div className="blog_list">
             {
            blogs.map(function(blog){
                return(
                <div className="blog_preview"key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            )})
          }
        </div>
    );
}
 
export default BlogList;