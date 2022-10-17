import {Col, Container, Row} from "reactstrap";
import CircleImg from "../base/circleImg";
import {useSelector} from "react-redux";
import {Skeleton} from "antd";
const wait = Array(8).fill(<><Skeleton.Avatar className={'my-2'} shape={"square"} active size={60}/><Skeleton.Input block active size={20}/></>) ;

const DeepLinks = ()=>{
    let {loading , deep_links : categories} = useSelector(state => state.home) ;
    if (!categories) categories = wait ;
    return(
        <Container fluid={'lg'}>
            <Row style={{minHeight : 100}} className={'m-0 mt-3 justify-content-between'}>
                {
                    categories.map((item , index)=>{
                        let show = true ;
                        if (index>7) show=false ;
                        return(
                            <Col className={!show ? 'd-none' : ""} key={item.id || index} xs={3} lg={1}>
                                {
                                    loading ? <div className={'text-center my-3 w-100 overflow-hidden'}>{item}</div>  :
                                        <CircleImg font={12} img={item.icon.url[0]} title={item.title}/>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default DeepLinks;
