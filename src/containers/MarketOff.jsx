import {Col, Container, Row} from "reactstrap";
import ImgWithPercent from "../base/imgWithPercent";
import MarketButton from "../base/MarketButton";
const MarketOff = ({marketItems  ,loading})=>{
    console.log(loading);
    return(
        <Container>
            <Row className={'m-0 py-4 px-2 align-items-center mt-3 rounded-4 fresh'}>
                <Col xs={2} lg={1}><img className={'w-100'} src={'./svg/fresh.png'} alt=""/></Col>
                <Col className={'pe-3'} xs={9} lg={{size : 3  , offset : 0}} ><img className={'w-100'} src={"./svg/fresh.svg"} alt=""/></Col>
                {
                    marketItems.map((item , index)=>{
                        let mobile = false ;
                        if (index > 2) mobile=true ;
                        return(
                            <Col key={index} className={'p-0 px-lg-2 ' + (mobile ? 'd-none d-lg-block' : '')} xs={3} lg={1}>
                                {
                                    loading ? <div className={'text-center'}>{item}</div> :
                                        <ImgWithPercent
                                            img={item.images.main.url[0]}
                                            percent={item.default_variant.price.discount_percent}
                                        />
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