import {Col, Container, Row} from "reactstrap";
import ImgWithPercent from "../base/imgWithPercent";
import {useEffect, useState} from "react";
import getData from "../queries/getData";

import MarketButton from "../base/MarketButton";

const MarketOff = ()=>{
    const [market , setMarket] = useState([]) ;
    useEffect(()=>{
        getItem() ;
    },[])
    const getItem = async ()=>{
        const result = await getData('market') ;
        console.log(result);
        if (result) setMarket(result) ;
    }
    return(
        <Container>
            <Row className={'m-0 py-4 px-2 align-items-center mt-3 rounded-4 fresh'}>
                <Col xs={2} lg={1}><img className={'w-100'} src={'./svg/fresh.png'} alt=""/></Col>
                <Col className={'pe-3'} xs={9} lg={{size : 3  , offset : 0}} ><img className={'w-100'} src={"./svg/fresh.svg"} alt=""/></Col>
                {
                    market.map((item,index)=>{
                        let mobile = false ;
                        if (index > 2) mobile=true ;
                        return(
                            <Col key={index} className={'p-0 ' + (mobile ? 'd-none d-lg-block' : '')} xs={3} lg={1}>
                                <ImgWithPercent img={item.img} percent={item.percent}/>
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