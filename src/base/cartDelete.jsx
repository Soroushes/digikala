import {DeleteOutlined, LoadingOutlined} from "@ant-design/icons";
import cartAdd from "../queries/cartAdd";
import {useDispatch} from "react-redux";
import {CHECK_CART} from "../redux/slice/cart";
import {useState} from "react";

const CartDelete = ({item})=>{
    const dispatcher = useDispatch() ;
    const [loading , setLoading] = useState(false) ;
    const deleteItem = async ()=>{
        try{
            setLoading(true) ;
            await cartAdd('DELETE' , null , item.id) ;
            const result = await cartAdd('get') ;
            dispatcher(CHECK_CART(result.data)) ;
            setLoading(false)
        }catch (err){
            console.log(err) ;
            setLoading(false) ;
        }
    }
    const cartEdit = async (plus)=>{
        try {
            setLoading(true) ;
            let count = item.count ;
            await cartAdd("PUT" , {...item , count : plus ? ++count :  --count} , item.id) ;
            const result = await cartAdd('GET') ;
            dispatcher(CHECK_CART(result.data)) ;
            setLoading(false) ;
        }catch (err){
            console.log(err) ;
            setLoading(false);
        }
    }
    return(
        loading ? <LoadingOutlined style={{fontSize : 30}}/> :
        <div className={'d-flex align-items-center'}>
            <span onClick={cartEdit.bind(this , true)} style={{width : 20 , height : 20}} className={'rounded-pill border d-flex justify-content-center align-items-center'}>+</span>
            <span className={'px-4 mx-2 py-1 border rounded-2'}>{item.count}</span>
            {
                item.count === 1 ?
                    <DeleteOutlined onClick={deleteItem} style={{color: "#f00"}}/> : <span onClick={cartEdit.bind(this , false)} style={{width : 20 , height : 20}} className={'rounded-pill border d-flex justify-content-center align-items-center'}>-</span>
            }
        </div>
    )
}
export default CartDelete ;