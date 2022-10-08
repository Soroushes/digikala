import {useDispatch, useSelector} from "react-redux";
import cartAdd from "../queries/cartAdd";
import {CHECK_CART} from "../redux/slice/cart";
import {useState} from "react";
import CartDelete from "./cartDelete";

const CartButton = ({selected , font})=>{
    const {title_fa , images , id} = useSelector(state => state.singleProduct) ;
    const cartItems = useSelector(state => state.cart) ;
    const dispatcher = useDispatch() ;
    const find = cartItems.filter(item=>selected.id===item.id) ;
    const [canClick , setCanClick] = useState(true) ;
    const addToCart = async ()=>{
        setCanClick(false) ;
        if (find.length===0){
            try {
                await cartAdd("post" ,{
                    ...selected ,
                    title_fa ,
                    link : "/product/"+id ,
                    image : images.main.url[0] ,
                    count : 1
                })
                const result = await cartAdd("get") ;
                dispatcher(CHECK_CART(result.data)) ;
                setCanClick(true) ;
            }catch (err){
                setCanClick(true) ;
                alert('وضعیت اینترنت خود را برسی کنید ! ')
            }
        }
    }
    return(
        !find.length ?
            <div onClick={canClick ? addToCart : (()=>'')}  style={{backgroundColor :"#ef4056" , cursor : "pointer" , fontSize : font}} className={'w-100 text-white p-2 d-flex justify-content-center rounded-3'}>
                {
                    canClick ? "افزودن به سبد" : "در حال افزودن ..."
                }
            </div> : <div className="d-flex align-items-center gap-3"><CartDelete item={find[0]}/></div>
    )
}
export default CartButton ;