import logo from '../../asset/logo.svg';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import axios from 'axios';
import useDebounce from '../debounce/useDebounce';
import {useEffect, useState} from 'react'
const cx = classNames.bind(style);


function Header({listResult,getMovie}) {
    const [textInput,setTextinput] = useState("");
    const [listMovie,setListMovie] = useState([]);
    const nameMovie = useDebounce(textInput,800);
    useEffect(()=>{
        const getListMovie = async (value)=>{
            const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=cfe422613b250f702980a3bbf9e90716`);
            setListMovie(data.data.results);
        }
        if(nameMovie == ""){
            setListMovie([]);
        }else{
            getListMovie(nameMovie);
        }
       
    },[nameMovie]);
    return ( 

        <div className={cx("wrapper")}>
            <div className={cx("logo")}>
                <img src={logo} alt="logo" />
            </div>
            <div className={cx("search-container")}>
                <input spellCheck={false} value={textInput} type="text" className={cx("search-bar")} placeholder={"Search Movie Title..."} onChange={(e)=>{
                    setTextinput(e.target.value);
                }} />
                {listMovie.length>0?
                    <div className={cx("search-results")}>
                        {listMovie.map((item)=>{
                           
                           return   <div onClick={()=>{
                            getMovie(item.id)
                            setListMovie([]);
                           }} key={item.id} className={cx("result-item")}>
                                {item.original_title}
                            </div>
                        })}
                    </div>
                :
                 <></>
                }
               
            </div>
        </div>
     );
}

export default Header;