import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";

const ProductImg = ()=>{
    const [products , setProducts] = useState([]) ;
    console.log(products) ;
    useEffect(()=>{
        getItem() ;
    },[]) ;
    const getItem = async ()=>{
        const result = await getData('productimg') ;
        console.log(result)
        if (result){
            setProducts(result);
        }
    }
    return(
        <Container>
            <Row>
                {
                    products.map((product,index)=>{
                        return(
                            <Col className={'mt-3'} key={index} xs={6} lg={3}>
                                <img className={'w-100 rounded-3'} src={product.img} alt=""/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default ProductImg;