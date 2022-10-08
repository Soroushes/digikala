import {Col, Container, Row} from "reactstrap";
import {ShopOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import sellerDetail from "../helpers/sellerDetail";
import CartButton from "../base/cartButton";
import priceDivider from "../helpers/priceDivider";

const OtherSellers = ()=> {
    const {simple} = useSelector(state => state.singleProduct) ;
    return(
        <Container className={'self-container mt-5'} fluid={true}>
            <h2 className={'fw-bold'} style={{fontSize : 16}}>فروشندگان این کالا</h2>
            {
                simple.map((item)=>{
                    return(
                        <Row key={item.id} className={'p-3 align-items-center other-sellers rounded-3'}>
                            <Col xs={12} lg={3}>
                                <div className={'d-flex align-items-center gap-3'}>
                                    <ShopOutlined style={{fontSize : 22}}/>
                                    <div>
                                        <p>{item.seller.title}</p>
                                        {
                                            item.rate ? <span className={'ps-2 border-start'} style={{fontSize : 11}}> <span style={{color : sellerDetail((item.rate)/20).color}}>{item.rate}%</span>  رضایت از کالا </span> : ""
                                        }
                                        {
                                            item.seller.stars ? <span className={'me-2'} style={{fontSize : 11 , color  : sellerDetail(item.seller.stars).color}}><span className={'text-dark'}>عملکرد : </span>{sellerDetail(item.seller.stars).title}</span> : ""
                                        }
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={2}>
                                {
                                    <p className={'text-muted'} style={{fontSize : 12}}>{item.shipment_methods.providers[0].title}</p>
                                }
                            </Col>
                            <Col xs={12} lg={3}>
                                {
                                    item.warranty ? <p style={{fontSize : 13}}>{item.warranty.title_fa}</p> : ""
                                }
                            </Col>
                            <Col className={'d-flex gap-4 align-items-center'} xs={12} lg={4}>
                                <div className="w-50 text-start d-flex gap-2 justify-content-end">
                                    {
                                        item.price.discount_percent ? <span style={{fontSize : 11}} className="old-price ms-2">{priceDivider((item.price.rrp_price)/10)}</span> : ""

                                    }
                                    <span style={{fontSize : 14}} className={'price text-start'}>{priceDivider((item.price.selling_price)/10)} تومان</span>
                                    {
                                        item.price.discount_percent ?
                                            <span style={{fontSize : 11}} className="off-percent">{item.price.discount_percent}%</span> : ""
                                    }
                                </div>
                                <div className={"w-50 d-flex justify-content-end"}>
                                    <CartButton font={15} selected={item}/>
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}
export default OtherSellers ;