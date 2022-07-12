
import { useState,useEffect } from "react";
const useFetch = (url) => {
    const[data,setData]=useState(null);
    const [isPending, setIsPending]=useState(true);
    const [error,setError]=useState(null);
   
        useEffect(function(){
            const abortcount=new AbortController();
            setTimeout(function(){
                fetch(url,{signal:abortcount.signal}).then(function(res){
                    console.log(res);
                    if(!res.ok){
                        throw Error('Could not fetch data for that resource');
                    }
                return res.json()
                }).then(function(data){
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }).catch(function(err){
                    if(err.name==='AbortError'){
                        console.log('fetch aborted');
                    }else{
                    console.log(err.message);
                    setIsPending(false);
                    setError(err.message);
                    }
                });
            },1000);
            return()=>abortcount.abort();
        },[url])
     return {data,isPending,error}
}
 
export default useFetch;