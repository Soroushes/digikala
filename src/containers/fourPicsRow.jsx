import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import FourPic from "../base/fourPic";

const FourPicsRow = ({route})=>{
    useEffect(()=>{
        getItems() ;
    },[]) ;
    const [items , setItems] = useState([]) ;
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
            <Row className={'mt-4 border rounded-3'}>
                {
                    items.map((item , index)=>{
                        return(
                            <Col className={'border-end'} key={index} xs={12} lg={3}>
                                <FourPic title={item.title} img={item.img}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default FourPicsRow ;