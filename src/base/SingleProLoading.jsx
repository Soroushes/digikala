import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";

const SingleProLoading = ()=>{
    return(
        <div style={{backgroundColor : "rgba(0,0,0,.1)"}} className="h-100 position-fixed start-0 top-0 w-100 d-flex justify-content-center align-items-center">
           <div className={'bg-white p-5 d-flex flex-column justify-content-around rounded-3 shadow'} style={{width : 350 , height : 400 }}>
               <div className={'text-center'}><img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="digikala-logo"/></div>
               <div className={'text-center'}><Spin indicator={<LoadingOutlined style={{color : "red" , fontSize : 50}} spin/>}/></div>
               <p className={'text-center'}>لطفا صبر کنید...</p>
           </div>
        </div>
    )
}
export default SingleProLoading ;