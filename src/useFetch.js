import React, { useState, useEffect } from 'react'


const useFetch = (url) => {

    const [isPending, setIsPending]=useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


    useEffect(()=>{
        fetch(url)
        .then(res=>{
          
          if(!res.ok){
            throw Error('could not fetch the data from that resource')
          }
          return res.json();
        })
        .then(data=>{
         
        
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err =>{
          setError(err.message)
        })
      },[url]);

      return {data, isPending, error}

}

export default useFetch;
