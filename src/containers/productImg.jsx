import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";

const ProductImg = ()=>{
    const [products , setProducts] = useState(Array(4).fill(<div style={{backgroundColor : '#f2f2f2' , height : 200}} className={'w-100 rounded-3'}></div>)) ;
    const [loading , setLoading] = useState(true) ;
    console.log(products) ;
    useEffect(()=>{
        getItem() ;
    },[]) ;
    const getItem = async ()=>{
        const result = await getData('productimg') ;
        if (result){
            setProducts(result);
            setLoading(false)
        }
    }
    return(
        <Container>
            <Row>
                {
                    products.map((product,index)=>{
                        return(
                            <Col className={'mt-3'} key={index} xs={6} lg={3}>
                                {
                                    loading ? product :
                                        <img className={'w-100 rounded-3'} src={product.img} alt=""/>
                                }

                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default ProductImg;