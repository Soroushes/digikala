import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import {Skeleton} from 'antd' ;
const RowOfPics = ({items , lg , xs ,route , font , center})=>{
    const images = Array(items).fill(<><Skeleton.Avatar className={'my-2'} active size={50}/><Skeleton.Input active size={20}/></>)
    useEffect(()=>{
        getRowPictures() ;
    },[]) ;
    const [rowPictures , setRowPictures] = useState(images) ;
    const [loading , setLoading] = useState(true) ;
    const getRowPictures = async ()=>{
        const result = await getData(route) ;
        if (result){
            setRowPictures(result);
            setLoading(false)
        }
    }
    return(
        <Container>
            <Row style={{minHeight : 100}} className={'m-0 justify-content-' + (center ? 'center' : "between")}>
                {
                    rowPictures.map((item , index)=>{
                        return(
                            <Col key={index} xs={xs} lg={lg}>
                                {
                                    loading ? <div className={'text-center my-2 w-100 overflow-hidden'}>{item}</div> :
                                        <CircleImg font={font} img={item.img} title={item.title}/>
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
