import getProductDetails from "../queries/getProductDetails";
import {useDispatch} from "react-redux";
import {ADD} from "../redux/slice/cart";

const MiniProducts = ({img,newPrice,percent,oldPrice , cart})=>{
    const dispatcher = useDispatch() ;
    const cartAdd = async ()=>{
        const {data} = await getProductDetails(cart) ;
        dispatcher(ADD(data.data)) ;
    }
    return(
        <div className={'p-1 h-100 bg-white position-relative'}>
            <span onClick={cartAdd} style={{width : 25 , height : 25 , cursor : "pointer" , backgroundColor : "#ef394e"}} className={'d-flex justify-content-center align-items-center text-white start-0 top-0 rounded-pill'}>+</span>
            <img className={'w-100 mb-3'} src={img} alt=""/>
            <div className={'d-flex justify-content-between'}>
                    <span className={'off-percent'}>{percent + "%"}</span>
                    <span className={'price'}>{newPrice + "  تومان"}</span>
            </div>
            <p className={'old-price text-start ms-4'}>{oldPrice}</p>
        </div>
    )
}
export default MiniProducts ;