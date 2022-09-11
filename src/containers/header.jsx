import Ads from "../base/ads" ;
import {Container , Row , Col , Button} from "reactstrap";
import Search from "../base/search";
import EnterBtn from "../base/enterBtn";
import HeaderItem from "../base/headerItem";

const Header = ()=>{
    return(
        <>
            <Ads>ads</Ads>
            <Container className={"shadow-sm"} fluid>
                <Container fluid={'xl'}>
                <Row>
                        <Col className={"d-md-none mb-2"} xs={{size : 2 , offset:2}}>hamburger</Col>
                        <Col className={"mb-2"} xs={{size : 4 , offset : 2}} md={{size : 2 , offset : 0}}>
                            <img className={"h-100 img-fluid"} src="./img/logo.svg" alt="Digikala-logo"/>
                        </Col>
                        <Col className={"d-md-none mb-2"} xs={2}>soal</Col>
                    <Col className={'position-relative'} xs={9} md={{size : 5 , offset : 3}}>
                        <Search/>
                    </Col>
                    <Col md={2}>
                        <EnterBtn classname={"d-none d-md-block"}>ورود | ثبت نام</EnterBtn>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <ul className={"header-items mt-3 d-none d-md-flex"}>
                            <HeaderItem/>
                        </ul>
                    </Col>
                </Row>
                </Container>
            </Container>
        </>
    );
}
export default Header ;