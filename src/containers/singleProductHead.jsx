import {Col, Container, Row} from "reactstrap";
import SingleProImage from "../base/singleProImage";
import {useSelector} from "react-redux";
import SingleProductInfo from "../base/singleProductInfo";
import SingleProBuy from "../base/singleProBuy";

const SingleProductHead = ()=>{
    const {title_fa} = useSelector(state => state.singleProduct) ;
    return(
        <Container fluid={true} style={{padding : '0 130px'}}>
            <Row className={'mb-3'}>
                <Col xs={12} className={'mt-3 ps-4'} lg={4}>
                    <SingleProImage/>
                </Col>
                <Col xs={12} className={'mt-4 pe-4'} lg={8}>
                    <h1 className={'mb-3'} style={{fontSize : 20}}>{title_fa}</h1>
                    <Row>
                        <Col className={'p-0 ps-lg-2 mb-3'} xs={12} lg={8}>
                            <SingleProductInfo/>
                        </Col>
                        <Col className={'p-0'} xs={12} lg={4}>
                            <SingleProBuy/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default SingleProductHead ;