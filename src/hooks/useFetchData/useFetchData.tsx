import React,{useState,useEffect} from 'react';
import axios from 'axios';
const useFetchData = (url)=>{
    const [data,setData] = useState([]);
    const[loading,setLoading] =useState(true);
    const[error,setError] = useState(null);
    
    const fetchData = async ()=>{
    
        try {
        const response = await axios.get(url);
                        
        setData(response.data.results);                 
        setLoading(false);
       } catch (error) {
        setLoading(false);
        setError(error.message);
       }

    }

    useEffect(()=>{
        fetchData();
    },[])

    return {data,loading,error};
}

export default useFetchData;