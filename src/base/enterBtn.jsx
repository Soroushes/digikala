import {ShoppingCartOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {Badge} from "antd";
import CartBox from "./CartBox";

const EnterBtn = ()=>{
    const cartItems = useSelector(state => state.cart) ;
    return(
            <div className={'d-flex justify-content-end'}>
                <div className={'cart-div w-25 d-flex justify-content-center align-items-center position-relative'}>
                    <Badge count={cartItems.length}>
                        <ShoppingCartOutlined className={'cart p-2 rounded-2'} style={{fontSize : 25}}/>
                    </Badge>
                    <CartBox/>
                </div>
            </div>
    )
}
export default EnterBtn ;