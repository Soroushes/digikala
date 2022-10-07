import {Col, Container, Row} from "reactstrap";
import {useSelector} from "react-redux";
const ProductImg = ({xs , lg, items , kilid})=>{
    let {[kilid] : products , loading} = useSelector(state => state.home) ;
    const wait = Array(items).fill(<div style={{backgroundColor : '#f2f2f2' , height : 200}} className={'w-100 rounded-3'}></div>) ;
    if (!products) products = wait ;
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