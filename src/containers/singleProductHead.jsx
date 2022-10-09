import {Col, Container, Row} from "reactstrap";
import SingleProImage from "../base/singleProImage";
import {useSelector} from "react-redux";
import SingleProductInfo from "../base/singleProductInfo";
import SingleProBuy from "../base/singleProBuy";

const SingleProductHead = ()=>{
    const {title_fa} = useSelector(state => state.singleProduct) ;
    return(
        <Container className={'self-container'} fluid={true}>
            <Row className={'mb-3'}>
                <Col xs={12} className={'mt-3 ps-lg-4'} lg={4}>
                    <SingleProImage/>
                </Col>
                <Col xs={12} className={'mt-4 pe-lg-4'} lg={8}>
                    <h1 className={'mb-3'} style={{fontSize : 20}}>{title_fa}</h1>
                    <Row>
                        <Col className={'p-0 ps-lg-2 mb-3'} xs={12} lg={7} xl={8}>
                            <SingleProductInfo/>
                        </Col>
                        <Col className={'p-0'} xs={12} lg={5} xl={4}>
                            <SingleProBuy/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default SingleProductHead ;