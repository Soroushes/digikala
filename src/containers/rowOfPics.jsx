import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import {Skeleton} from 'antd' ;
const RowOfPics = ({lg , xs ,categories , font , center , loading , image , title , max})=>{
    return(
        <Container>
            <Row style={{minHeight : 100}} className={'m-0 justify-content-' + (center ? 'center' : "between")}>
                {
                    categories.map((item , index)=>{
                        let show = true ;
                        if (index>max) show=false ;
                        return(
                            <Col className={!show ? 'd-none' : ""} key={item.id || index} xs={xs} lg={lg}>
                                {
                                    loading ? <div className={'text-center my-2 w-100 overflow-hidden'}>{item}</div> :
                                        <CircleImg font={font} img={item[image].url[0]} title={item[title]}/>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default RowOfPics;
