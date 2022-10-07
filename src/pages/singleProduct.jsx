import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getHomeItems from "../queries/getHomeItems";
import {useDispatch} from "react-redux";
import {SET} from "../redux/slice/singleProductsSlice";
import SingleProductHead from "../containers/singleProductHead";
const SingleProduct = ()=>{
    const dispatcher = useDispatch() ;
    const {id} = useParams() ;
    const [loading , setLoading] = useState(true) ;
    useEffect(()=>{
        getHomeItems('https://api.digikala.com/v1/product/'+id+'/')
            .then((result)=>{
                dispatcher(SET({
                    ...result.data.data.product ,
                    selected : {
                        ...result.data.data.product.default_variant
                    },
                    simple : {
                        ...result.data.data.product.variants
                    }
                }))
                setLoading(false) ;
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id])
    return(
        loading ? "" :
            <SingleProductHead/>

    )

}
export default SingleProduct ;