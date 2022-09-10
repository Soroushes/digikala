import {Col, Input, Row, Spinner} from "reactstrap";
import {useEffect, useState} from "react";
import searchAjax from "../queries/searchAjax";
import SearchBox from "./searchBox";
let searchTime = null ;
const Search = ()=>{
    const [value , setValue] = useState("") ;
    const [onInput , setOnInput] = useState(false) ;
    const [searchRes , setSearchRes] = useState([]) ;
    const [loading , setLoading] = useState(false) ;
    const change= (e)=> {
        setValue(e.target.value) ;
        if (searchTime)clearTimeout(searchTime) ;
        searchTime = setTimeout(async ()=>{
            if(e.target.value.length>=3){
                setLoading(true) ;
                let result = await searchAjax(e.target.value) ;
                setLoading(false)
                result  ? setSearchRes(result) : setSearchRes([]) ;
            }
            else if(e.target.value.length <3){
                setSearchRes([]) ;
                setLoading(false)
            }
        },1000) ;
    };
    // <Input onFocus={focus} onBlur={blur} onChange={change} value={value} placeholder={"جستجو"} className={"w-100"} style={{backgroundColor : onInput ? "" : "#eee"}}></Input>
    const blur = ()=> setOnInput(false)
    const focus = ()=>setOnInput(true) ;
    return(
        <>
            <div className={'w-100 position-absolute search-bar shadow-sm'} style={{overflowY : onInput ? "scroll" : "" , backgroundColor : onInput ? "" : "#eee" }}>
                <input className={"search-input"}  placeholder={'جستجو'} onFocus={focus} onBlur={blur} onChange={change} style={{borderBottom : onInput ? "1px solid #4ccddd" : ""}} value={value} type="text"/>
                <SearchBox loading={loading} onInput={onInput} searchRes={searchRes}></SearchBox>
            </div>
        </>
    )
}
export default Search ;