import {EnterOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {Badge} from "antd";
import CartBox from "./CartBox";

const EnterBtn = ({children,classname})=>{
    const cartItems = useSelector(state => state.cart) ;
    return(
            <div className={'d-none d-lg-flex justify-content-between'}>
                <div className={'w-50 d-flex justify-content-center px-3 py-2 rounded-2 bg-white border'}>
                    <EnterOutlined style={{fontSize : 20}} />
                    <p className={'m-0 me-1'}>{children}</p>
                </div>
                <div className={'cart-div w-25 d-none d-lg-flex justify-content-center align-items-center position-relative'}>
                    <Badge count={cartItems.length}>
                        <ShoppingCartOutlined className={'cart p-2 rounded-2'} style={{fontSize : 25}}/>
                    </Badge>
                    <CartBox/>
                </div>
            </div>
    )
}
export default EnterBtn ;