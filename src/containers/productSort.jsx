import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import CircleImg from "../base/circleImg";
import {Skeleton} from "antd";
const images = Array(11).fill(<><Skeleton.Avatar className={'my-2'} active size={80}/><Skeleton.Input active size={25}/></>)
const ProductSort =  ()=>{
    const [items , setItems] = useState(images) ;
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
       getItems() ;
    },[])
    const getItems = async ()=>{
        const result = await getData('productsort') ;
        if (result){
            setItems(result) ;
            setLoading(false);
        } ;
    }
    return(
        <Container>
            <h2 style={{fontSize : 20}} className={'mt-5 text-center'}>دسته بندی های دیجیکالا</h2>
            <Row className={'justify-content-center'}>
                {
                    items.map((item , index)=>{
                        return(
                            <Col key={index} xs={4} lg={2}>
                                {
                                    loading ?  <div className={'overflow-hidden my-3 text-center'}>{item}</div> :
                                        <CircleImg img={item.img} title={item.title} font={16}/>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default ProductSort ;