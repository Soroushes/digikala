import {Col, Row} from "reactstrap";
import priceDivider from "../helpers/priceDivider";
import {useSelector} from "react-redux";

const CartBox = ()=>{
    const cartItems = useSelector(state => state.cart) ;
    let finalPrice = 0 ;
    cartItems.map((item)=>{
        return (item.product.default_variant.price.selling_price)/10 ;
    }).forEach((price)=>{
        finalPrice+=price ;
    })
    return(
        <div className="cart-box py-2 shadow rounded-3">
            <div style={{height : 400 , overflowY : 'scroll'}} className={'p-3'}>
                <div>{cartItems.length} کالا </div>
                {
                    cartItems.map((element)=>{
                        return(
                            <Row className={'mt-4 border-bottom'} key={element.product.id}>
                                <Col md={5}><img className={'w-100'} src={element.product.images.main.url[0]} alt=""/></Col>
                                <Col md={7}>
                                    <div>{element.product.title_fa}</div>
                                    <div className={'mt-3 text-start fw-bold mb-3'}>{priceDivider((element.product.default_variant.price.selling_price)/10)} تومان </div>
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
            <div className={'border-top d-flex justify-content-between align-items-center pt-3 bg-white w-100 px-3'}>
                <div>
                    <p style={{fontSize : 11}} className={'m-0 mb-2 text-muted'}>مبلغ قابل پرداخت : </p>
                    <p style={{fontSize : 15}} className={'m-0 fw-bold'}>{priceDivider(finalPrice)} تومان</p>
                </div>
                <div className={'px-4 py-2 bg-danger text-white rounded-3'}>ثبت سفارش</div>
            </div>
        </div>
    )
}
export default CartBox ;