import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getHomeItems from "../queries/getHomeItems";
import {useDispatch, useSelector} from "react-redux";
import {SET} from "../redux/slice/singleProductsSlice";
import SingleProductHead from "../containers/singleProductHead";
import OtherSellers from "../containers/otherSellers";
import SingleProLoading from "../base/SingleProLoading";
const SingleProduct = ()=>{
    const dispatcher = useDispatch() ;
    const {id} = useParams() ;
    const [loading , setLoading] = useState(true) ;
    const {simple} = useSelector(state => state.singleProduct) ;
    useEffect(()=>{
        setLoading(true);
        getHomeItems('https://api.digikala.com/v1/product/'+id+'/')
            .then((result)=>{
                dispatcher(SET({
                    ...result.data.data.product ,
                    selected : {
                        ...result.data.data.product.default_variant
                    },
                    simple : [...result.data.data.product.variants]
                }))
                setLoading(false) ;
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id])
    return(
        loading ? <SingleProLoading/> :
            <>
                <SingleProductHead/>
                {
                    simple.length>1 ? <OtherSellers/> : ""
                }
            </>
    )

}
export default SingleProduct ;