import {useEffect, useState} from 'react';

function useDebounce(value,delay) {
    const [nameMovie,setNameMovie] = useState("");
    useEffect(()=>{
        const id = setTimeout(()=>{
            setNameMovie(value);
        },delay);
        return ()=>{
            clearTimeout(id);
        }
    },[value]);
    return nameMovie;
}

export default useDebounce;