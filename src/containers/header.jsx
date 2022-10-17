import Ads from "../base/ads" ;
import {Container , Row , Col} from "reactstrap";
import Search from "../base/search";
import EnterBtn from "../base/enterBtn";
import {Affix} from 'antd' ;
import {useState} from "react";
import {Link} from "react-router-dom";
const Header = ()=>{
    const [top] = useState(1) ;
    return(
            <Affix offsetTop={top}>
                <div style={{marginTop : -top}}>
                    <Ads>ads</Ads>
                <Container className={"shadow-sm bg-white py-3"} fluid>
                    <Container fluid={'xl'}>
                        <Row className={'align-items-center'}>
                            <Col className={"d-flex mb-2 mb-md-0 justify-content-center"} xs={{size : 12}} md={{size : 2 , offset : 0}}>
                                <Link to={'/'}><img className={"h-100 img-fluid"} src="https://www.digikala.com/statics/img/svg/logo.svg" alt="Digikala-logo"/></Link>
                            </Col>
                            <Col xs={8} md={{size : 5 , offset : 2}}>
                                <Search/>
                            </Col>
                            <Col xs={3} md={3}>
                                <EnterBtn/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                </div>
            </Affix>
    );
}
export default Header ;