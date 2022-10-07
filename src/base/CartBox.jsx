import {Col, Row} from "reactstrap";
import priceDivider from "../helpers/priceDivider";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CartDelete from "./cartDelete";

const CartBox = ()=>{
    const cartItems = useSelector(state => state.cart) ;
    let finalPrice = 0 ;
    cartItems.map((item)=>{
        return (item.price.selling_price)/10*item.count ;
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
                            <Row className={'mt-4 border-bottom'} key={element.id}>
                                <Col md={5}><Link to={element.link}><img className={'w-100'} src={element.image} alt={element.title_fa}/></Link></Col>
                                <Col md={7}>
                                    <div>{element.title_fa}</div>
                                    {
                                        element.color ?
                                            <div className={"d-flex justify-content-between align-items-center"}>
                                                <p className={"mt-3 fw-bold"} >رنگ :  {element.color.title}</p>
                                                <div style={{backgroundColor : element.color.hex_code , width : 30 , height : 30}} className={'rounded-pill border border-3 d-flex align-items-center justify-content-center' }>
                                                </div>
                                            </div> : ""
                                    }
                                    {
                                        element.size ? <p className={"mt-3 fw-bold"} >اندازه :  {element.size.title}</p> : ""
                                    }
                                </Col>
                                <Col md={12}>
                                    <div className="d-flex justify-content-between">
                                        <CartDelete item={element}/>
                                        <div className={'mt-3 text-start fw-bold mb-3'}>{priceDivider((element.price.selling_price)/10)} تومان </div>
                                    </div>
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