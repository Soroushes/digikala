import {Divider} from "antd";
import {useSelector} from "react-redux";
import ProductColors from "./ProductColors";
import ProductSize from "./productSize";
import ProductAttr from "./productAttr";

const SingleProductInfo = ()=>{
    const {title_en , colors , selected  , review , digiplus} = useSelector(state => state.singleProduct) ;
    const attrs = review ? review.attributes : false ;
    const hasSize = selected ? selected.size : false ;
    const services = !digiplus.services.length ? false : digiplus.services ;
    return(
        <>
            <Divider className={'m-0 mb-4'} orientationMargin={0} style={{fontSize : 12}} orientation={'left'}>{title_en ? title_en : ''}</Divider>
            {
                colors.length ? <ProductColors/> : ""
            }
            {
                hasSize ? <ProductSize/> : ""
            }
            <div style={{minHeight : 150}}>{attrs ? <ProductAttr/> : ""}</div>
            <div className={'py-2 pe-4 mt-4 rounded-3 border d-flex justify-content-between align-items-center'}>
                <div>
                    <h4 className={'mb-3'} style={{fontSize : 15}}>ارسال رایگان</h4>
                    <p className={'text-muted m-0'} style={{fontSize : 12}}>برای سفارش بالای 500 هزار تومان</p>
                </div>
                <img src='https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg' alt=""/>
            </div>
            {
                services ?
                    <div className={'p-3 border rounded-3 mt-3'}>
                       <h5 style={{fontSize : 12}} className={'mb-3'}>ویژه اعضای دیجی پلاس</h5>
                        <ul className={'p-0 pe-3 m-0'}>
                            {
                                services.map((service , index)=>{
                                    return <li style={{fontSize : 11}} className={'text-muted'} key={index}>{service}</li>
                                })
                            }
                        </ul>
                    </div> : ""
            }
        </>
    )
}
export default SingleProductInfo ;