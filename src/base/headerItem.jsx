import {useEffect, useState} from "react";
import getData from '../queries/getData'
//let scroll = 0 ;
const HeaderItem = ()=>{
    const [items , setItems] = useState([]) ;
    //const [scrolledTop , setScrolledTop] = useState(false) ;
    // const scrolling = ()=>{
    //    if (scroll > window.scrollY) setScrolledTop(true) ;
    //    else setScrolledTop(false) ;
    //    scroll = window.scrollY ;
    // }
    // window.onscroll = scrolling;
    useEffect( ()=>{
        getItems() ;
    },[]) ;
    const getItems = async ()=>{
        const result = await getData('header') ;
        if (result)setItems(result) ;
    }
    return(
        <ul className={"header-items overflow-hidden d-none"}>
            {
                items.map((element, index)=><li style={{fontSize : 11}} key={index}>{element}</li>)
            }
        </ul>
    )
}
export default HeaderItem;