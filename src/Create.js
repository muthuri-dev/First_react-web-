import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Kennedy');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
    const handleSubmit=function(e){
        setIsPending(true)
        e.preventDefault();
        const blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(function(){
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        });
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="#"onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={function(e){
                    setTitle(e.target.value)
                }}
                />
                <label htmlFor="">Blog body:</label>
                <textarea 
                required 
                value={body}
                onChange={function(e){
                    setBody(e.target.value)
                }}
                ></textarea>
                <label htmlFor="">Blog Author:</label>
                <select
                value={author}
                onChange={function(e){
                    setAuthor(e.target.value);
                }}
                >
                    <option value="kennedy">Kennedy</option>
                    <option value="muthuri">Muthuri</option>
                    <option value="damaris">Damaris</option>
                </select>
               {!isPending && <button>Add Blog</button>}
               {isPending && <button>Adding New Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;