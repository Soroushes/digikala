import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import {Skeleton} from 'antd' ;
const RowOfPics = ()=>{
    useEffect(()=>{
        getRowPictures() ;
    },[]) ;
    const [rowPictures , setRowPictures] = useState([1,2,3,4,5,6,7,8]) ;
    const [loading , setLoading] = useState(true) ;
    const getRowPictures = async ()=>{
        const result = await getData('rowpics') ;
        if (result){
            setRowPictures(result);
            setLoading(false)
        }
    }
    return(
        <Container>
            <Row style={{minHeight : 100}} className={'m-0 justify-content-between'}>
                {
                    rowPictures.map((item , index)=>{
                        return(
                            <Col key={index} xs={3} lg={1}>
                                {
                                    loading ? <Skeleton.Avatar active className={'m-4'} size={80}/> :
                                        <CircleImg img={item.img} title={item.title}/>
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
