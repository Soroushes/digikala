import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useEffect, useState} from "react";
import getRowPicsItems from "../queries/getRowPicsItems";

const RowOfPics = ()=>{
    useEffect(()=>{
        getRowPictures() ;
    },[]) ;
    const [rowPictures , setRowPictures] = useState([]) ;
    const getRowPictures = async ()=>{
        const result = await getRowPicsItems() ;
        if (result) setRowPictures(result) ;
    }
    return(
        <Container>
            <Row className={'justify-content-between'}>
                {
                    rowPictures.map((item , index)=>{
                          return(
                              <Col xs={3} md={1}>
                                  <CircleImg key={index} img={item.img} title={item.title}/>
                              </Col>
                          )
                    })
                }
            </Row>
        </Container>
    )
}
export default RowOfPics;
