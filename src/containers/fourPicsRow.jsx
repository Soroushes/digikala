import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import FourPic from "../base/fourPic";
import {Skeleton} from "antd";

const FourPicsRow = ({route})=>{
    useEffect(()=>{
        getItems() ;
    },[]) ;
    const [items , setItems] = useState(Array(4).fill(<Skeleton.Avatar active shape={"square"} size={180}/>)) ;
    const [loading , setLoading] = useState(true) ;

    const getItems = async ()=>{
        const result = await getData(route) ;
        console.log(result)
        if (result){
            setItems(result) ;
            setLoading(false) ;
        }
    }
    return(
        <Container>
            <Row className={'mt-4 border rounded-4'}>
                {
                    items.map((item , index)=>{
                        return(
                            <Col className={'border-end four-pic'} key={index} xs={12} lg={3}>
                                {
                                    loading ? <div className={'w-100 d-flex p-3 justify-content-center align-items-center'}>{item}</div> :
                                        <FourPic title={item.title} img={item.img}/>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default FourPicsRow ;