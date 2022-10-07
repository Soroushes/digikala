import Ads from "../base/ads" ;
import {Container , Row , Col} from "reactstrap";
import Search from "../base/search";
import EnterBtn from "../base/enterBtn";
import HeaderItem from "../base/headerItem";
import {Affix} from 'antd' ;
import {useState} from "react";
import {Link} from "react-router-dom";
const Header = ()=>{
    const [top] = useState(1) ;
    return(
            <Affix offsetTop={top}>
                <div style={{marginTop : -top}}>
                    <Ads>ads</Ads>
                <Container className={"shadow-sm bg-white pt-3"} fluid>
                    <Container fluid={'xl'}>
                        <Row>
                            <Col className={"d-md-none mb-2"} xs={{size : 2 , offset:2}}>hamburger</Col>
                                <Col className={"mb-2"} xs={{size : 4 , offset : 2}} md={{size : 2 , offset : 0}}>
                                    <Link to={'/'}><img className={"h-100 img-fluid"} src="https://www.digikala.com/statics/img/svg/logo.svg" alt="Digikala-logo"/></Link>
                                </Col>
                            <Col className={"d-md-none mb-2"} xs={2}>soal</Col>
                            <Col className={'position-relative'} xs={9} md={{size : 5 , offset : 2}}>
                                <Search/>
                            </Col>
                            <Col md={3}>
                                <EnterBtn classname={"d-none d-md-block"}>ورود | ثبت نام</EnterBtn>
                            </Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col md={6}>
                                <HeaderItem/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                </div>
            </Affix>
    );
}
export default Header ;