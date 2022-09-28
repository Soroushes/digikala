import {useState} from "react";
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
                setLoading(false) ;
                setSearchRes(result) ;
            }
            else if(e.target.value.length <3){
                setSearchRes([]) ;
                setLoading(false)
            }
        },1000) ;
    };
    // const clickedValue = (id)=>{
    //     const result = searchRes.searchRes.suggestion_products.filter(product => product.id===id) ;
    //     change({target : {value : result[0].title}}) ;
    // }
    const blur = (e)=>{
        if (!e.target.getAttribute('data-click')) setOnInput(false);
    }
    document.getElementById('root').addEventListener("click", blur) ;
    const focus = ()=>setOnInput(true) ;
    return(
        <>
            <div data-click={'click'} className={'w-100 position-absolute search-bar shadow-sm'} style={{overflowY : onInput ? "scroll" : "" , backgroundColor : onInput ? "" : "#eee" }}>
                <input data-click={'click'} className={"search-input py-1"} placeholder={'جستجو'} onClick={focus} onChange={change} style={{borderBottom : onInput ? "1px solid #4ccddd" : ""}} value={value} type="text"/>
                <SearchBox data-click={'click'} loading={loading} onInput={onInput} searchRes={searchRes}></SearchBox>
            </div>
        </>
    )
}
export default Search ;