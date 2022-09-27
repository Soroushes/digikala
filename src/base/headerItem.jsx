import {useEffect, useState} from "react";
import getData from '../queries/getData'
const HeaderItem = ()=>{
    const [items , setItems] = useState([]) ;
    const [scroll , setScroll] = useState(0) ;
    // const [scrolledTop , setScrolledTop] = useState(false) ;
    // const scrolling = ()=>{
    //    setScroll(window.scrollY) ;
    //    if (scroll > window.scrollY) setScrolledTop(true) ;
    //    else setScrolledTop(false)
    // }
    // window.onscroll = scrolling;
    useEffect( ()=>{
        getItems() ;
    },[]) ;
    const getItems = async ()=>{
        const result = await getData('header') ;
        if (result)setItems(result) ;
        console.log(result) ;
    }
    return(
        <ul className={"header-items overflow-hidden d-none d-md-flex"}>
            {
                items.map((element, index)=><li style={{fontSize : 11}} key={index}>{element}</li>)
            }
        </ul>
    )
}
export default HeaderItem;