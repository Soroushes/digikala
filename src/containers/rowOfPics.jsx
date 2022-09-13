import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useEffect, useState} from "react";
import getData from "../queries/getData";

const RowOfPics = ()=>{
    useEffect(()=>{
        getRowPictures() ;
    },[]) ;
    const [rowPictures , setRowPictures] = useState([]) ;
    const getRowPictures = async ()=>{
        const result = await getData('rowpics') ;
        if (result) setRowPictures(result) ;
    }
    return(
        <Container>
            <Row style={{minHeight : 100}} className={'justify-content-between'}>
                {
                    rowPictures.map((item , index)=>{
                          return(
                              <Col key={index} xs={3} lg={1}>
                                  <CircleImg img={item.img} title={item.title}/>
                              </Col>
                          )
                    })
                }
            </Row>
        </Container>
    )
}
export default RowOfPics;
