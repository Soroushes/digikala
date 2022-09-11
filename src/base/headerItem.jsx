import getHeaderItems from "../queries/headerItems";
import {useEffect, useState} from "react";

const HeaderItem = ()=>{
    const [items , setItems] = useState([]) ;
    useEffect( ()=>{
        getItems() ;
    },[]) ;
    const getItems = async ()=>{
        const result = await getHeaderItems() ;
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