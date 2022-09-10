import Ads from "../base/ads" ;
import {useState , useEffect} from "react";
import {Container , Row , Col , Button} from "reactstrap";
import Search from "../base/search";
import axios from "axios";
import EnterBtn from "../base/enterBtn";

const Header = ()=>{
    return(
        <>
            <Ads>ads</Ads>
            <Container fluid={"xl"}>
                <Row>
                        <Col className={"d-md-none mb-2"} xs={{size : 2 , offset:2}}>hamburger</Col>
                        <Col className={"d-flex justify-content-center mb-2"} xs={{size : 4 , offset : 2}} md={{size : 2 , offset : 0}}>
                            <img className={"h-100"} src="./img/logo.svg" alt="Digikala-logo"/>
                        </Col>
                        <Col className={"d-md-none mb-2"} xs={2}>soal</Col>
                    <Col className={'position-relative'} xs={9} md={{size : 5 , offset : 3}}>
                        <Search/>
                    </Col>
                    <Col md={2}>
                        <EnterBtn classname={"d-none d-md-block"}>ورود | ثبت نام</EnterBtn>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Header ;