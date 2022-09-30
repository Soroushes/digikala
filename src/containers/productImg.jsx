import {Col, Container, Row} from "reactstrap";
const ProductImg = ({xs , lg , loading , products})=>{
    return(
        <Container>
            <Row className={'p-0'}>
                {
                    products.map((product , index)=>{
                        return(
                            <Col className={'my-3'} key={product.id || index} xs={xs} lg={lg}>
                                {
                                    loading ? product :
                                        <img className={'w-100 rounded-3'} src={product.image} alt={product.title}/>
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