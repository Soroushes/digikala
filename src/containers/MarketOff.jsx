import {Col, Container, Row} from "reactstrap";
import ImgWithPercent from "../base/imgWithPercent";
import MarketButton from "../base/MarketButton";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const MarketOff = ()=>{
    const {fresh_incredible_products , loading} = useSelector(state => state.home) ;
    return(
        <Container>
            <Row className={'m-0 py-4 px-2 align-items-center mt-3 rounded-4 fresh'}>
                <Col xs={2} lg={1}><img className={'w-100'} src={'https://www.digikala.com/statics/img/png/amazing/fresh.png'} alt=""/></Col>
                <Col className={'pe-3'} xs={9} lg={{size : 3  , offset : 0}} ><img className={'w-100'} src={"https://www.digikala.com/statics/img/svg/typography/fresh.svg"} alt=""/></Col>
                {
                    loading ? '' :
                        fresh_incredible_products.products.map((item , index)=>{
                        let mobile = false ;
                        if (index > 2) mobile=true ;
                        return(
                            <Col key={item.id} className={'p-0 px-lg-2 ' + (mobile ? 'd-none d-lg-block' : '')} xs={3} lg={1}>
                                {
                                    <Link to={'/product/'+item.id}>
                                        <ImgWithPercent
                                            img={item.images.main.url[0]}
                                            percent={item.default_variant.price.discount_percent}
                                        />
                                    </Link>

                                }
                            </Col>
                        )
                    })
                }
                <Col xs={3} md={2}>
                    <MarketButton/>
                </Col>
            </Row>
        </Container>

    )
}
export default MarketOff ;