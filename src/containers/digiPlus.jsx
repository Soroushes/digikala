import {Col, Container, Row} from "reactstrap";
import PlusItems from "../base/plusItems";
import {useSelector} from "react-redux";
import {Button} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";

const DigiPlus = ()=>{
    const {digiplus , loading} = useSelector(state => state.home) ;
    return(
        <Container fluid={'lg'} className={'p-0 p-lg-3'}>
            <Row style={{backgroundColor : "#941a80"}} className="m-0 mb-3 p-2 rounded-3 justify-content-between">
                <Col xs={12} md={5} lg={4} >
                    <div className={'digi-plus mt-4 me-4'}>
                        <img src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg" alt="digi-plus"/>
                        <p className={'my-2 text-white'}>خدمات ویژه برای اعضای دیجی‌پلاس</p>
                        <Button className={'bg-transparent px-2 rounded-2 mt-2 text-white'}>
                            عضویت
                            <ArrowLeftOutlined className={"m-0 me-1 text-white"} style={{fontSize : 20}}/>
                        </Button>
                    </div>
                </Col>
                <Col className={'p-1'} xs={12} md={3} lg={4}>
                    {
                        loading  ? <div className="bg-white h-100"></div> :
                            <PlusItems className={'rounded-end'} items={digiplus.cash_back_products.products} title={'هدیه نقدی'}/>
                    }
                </Col>
                <Col className={'p-1'} xs={12} md={3} lg={4}>
                    {
                        loading  ? <div className="bg-white h-100"></div> :
                            <PlusItems className={'rounded-start'} items={digiplus.jet_delivery_products.products} title={'ارسال فوری'}/>
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default DigiPlus ;