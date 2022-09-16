import {EnterOutlined, ShoppingCartOutlined} from "@ant-design/icons";

const EnterBtn = ({children,classname})=>{
    return(
        <div className={'d-none d-lg-flex'}>
            <div className={'w-75 d-flex justify-content-center px-3 py-2 rounded-2 bg-white border'}>
                <EnterOutlined style={{fontSize : 20}} />
                <p className={'m-0 me-1'}>ورود | ثبت نام</p>
            </div>
            <div className={'w-25 d-none d-lg-flex justify-content-center align-items-center'}>
                <ShoppingCartOutlined className={'pe-3'} style={{fontSize : 30 , borderRight : "2px solid #eee" , color : "#666"}}/>
            </div>
        </div>
    )
}
export default EnterBtn ;