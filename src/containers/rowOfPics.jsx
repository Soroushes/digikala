import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useSelector} from "react-redux";
import {Skeleton} from "antd";
const wait = Array(11).fill(<Skeleton.Avatar active size={70}/>) ;
const RowOfPics = ()=>{
    const {loading , main_categories} = useSelector(state => state.home) ;
    const categories = main_categories ? main_categories.categories : wait ;
    return(
        <Container>
            <Row style={{minHeight : 100}} className={'m-0 justify-content-center'}>
                {
                    categories.map((item , index)=>{
                        let show = true ;
                        if (index>10) show=false ;
                        return(
                            <Col className={!show ? 'd-none' : ""} key={item.id || index} xs={4} lg={2}>
                                {
                                    loading ? <div className={'text-center my-5 w-100 overflow-hidden'}>{item}</div>  :
                                        <CircleImg font={12} img={item.logo.url[0]} title={item.title_fa}/>
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
