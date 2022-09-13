import {useEffect, useState} from "react";
import getData from '../queries/getData'
const HeaderItem = ()=>{
    const [items , setItems] = useState([]) ;
    useEffect( ()=>{
        getItems() ;
    },[]) ;
    const getItems = async ()=>{
        const result = await getData('header') ;
        if (result)setItems(result) ;
        console.log(result) ;
    }
    return(
        items.map((element, index)=>{
            return <li key={index}>{element}</li>
        })
    )
}
export default HeaderItem;