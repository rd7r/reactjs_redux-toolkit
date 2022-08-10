import { useState, useEffect } from 'react';
import { getHome } from '../../services/HomeService';

export const useFetch = (api, method,body=null) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let service;
    if(api === 'User') service = getHome;
    
    const fetchURL = async() => {
        let res;
        if( method === 'GET'){
            res = await service();
        }
        if (res.error) {
            setError(res.error);
        }

        setData(res.data);
        setLoading(false);
    };

    useEffect(()=>{
        fetchURL();
    },[])
    return [data,loading,error];
}