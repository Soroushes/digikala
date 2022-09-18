import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import CircleImg from "../base/circleImg";

const ProductSort =  ()=>{
    const [items , setItems] = useState([]) ;
    useEffect(()=>{
       getItems() ;
    },[])
    const getItems = async ()=>{
        const result = await getData('productsort') ;
        if (result)setItems(result) ;
    }
    return(
        <Container>
            <h2 style={{fontSize : 20}} className={'mt-5 text-center'}>دسته بندی های دیجیکالا</h2>
            <Row className={'justify-content-center'}>
                {
                    items.map((item , index)=>{
                        return(
                            <Col key={index} xs={4} lg={2}>
                                <CircleImg img={item.img} title={item.title} font={16}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default ProductSort ;