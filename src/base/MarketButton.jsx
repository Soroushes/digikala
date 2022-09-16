import {ArrowLeftOutlined} from "@ant-design/icons";
const MarketButton = () =>{
    return(
        <div style={{color : "#3fae31"}} className={'w-100 bg-white p-3 text-center rounded-5 d-flex justify-content-center align-items-center'}>
            <p className={'m-0 text-center d-none d-lg-block'}>
                مشاهده 100 کالا
            </p>
            {
                <ArrowLeftOutlined className={"me-2"} style={{fontSize : 20 , color :"#3fae31"}}/>
            }
        </div>
    )
}
export default MarketButton ;