import {useSelector} from "react-redux";
import {ShopOutlined} from "@ant-design/icons";
import priceDivider from "../helpers/priceDivider";
import CartButton from "./cartButton";
import sellerDetail from "../helpers/sellerDetail";

const SingleProBuy = ()=>{
    const {selected , simple} = useSelector(state => state.singleProduct) ;
    return(
        selected.seller ?
        <div style={{backgroundColor : "#f7f7f8"}} className={'rounded-3 border p-4'}>
            <div className="d-flex justify-content-between mb-3">
                <h5 className={'fw-bold'} style={{fontSize : 15}}>فروشنده</h5>
                {
                    simple.length>1 ?<p style={{fontSize : 12}} className="m-0">{simple.length-1} فروشنده دیگر</p> : ''
                }
            </div>
               <h2 style={{fontSize : 15}}><ShopOutlined style={{fontSize : 22}} className={'ms-2'}/>{selected.seller.title}</h2>
            <div className="d-flex mt-3 mb-3 border-bottom">
                {
                    selected.rate ? <p className={'ps-2 border-start'} style={{fontSize : 11}}> <span style={{color : sellerDetail((selected.rate)/20).color}}>{selected.rate}%</span>  رضایت از کالا </p> : ""
                }
                {
                    selected.seller.stars ? <p className={'me-2'} style={{fontSize : 11 , color  : sellerDetail(selected.seller.stars).color}}><span className={'text-dark'}>عملکرد : </span>{sellerDetail(selected.seller.stars).title}</p> : ""
                }
            </div>
            {
                selected.warranty ? <p className={'border-bottom pb-3 fw-bold'} style={{fontSize : 11}}>{selected.warranty.title_fa}</p> : ""
            }
            <div className={'border-bottom mb-2'}>
                <p>{selected.shipment_methods.description}</p>
                <p className={'text-muted'} style={{fontSize : 12}}>{selected.shipment_methods.providers[0].title}</p>
            </div>
            <p className={'pb-2 border-bottom'}>{selected.digiclub.point} امتیاز دیجی کلاب </p>
            <div>
                {
                    selected.price.discount_percent ?
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <span style={{fontSize : 11}} className="old-price ms-2">{priceDivider((selected.price.rrp_price)/10)}</span>
                            <span style={{fontSize : 11}} className="off-percent">{selected.price.discount_percent}%</span>
                        </div> : ""
                }
                <p style={{fontSize : 14}} className={'price text-start'}>{priceDivider((selected.price.selling_price)/10)} تومان</p>
                <CartButton/>
            </div>
        </div> :
            <div className={'w-100 d-flex justify-content-center'}>
                <h4>ناموجود</h4>
            </div>
    )
}
export default SingleProBuy ;