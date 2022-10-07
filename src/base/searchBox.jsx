import {Col, Row} from "reactstrap";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const SearchBox = ({loading , searchRes , onInput})=>{
    if(!searchRes.suggestion_products) searchRes.suggestion_products = [] ;
    return(
        <div data-click={'click'} className={"search-box w-100 justify-content-center flex-column align-items-center"} style={{display : onInput ? "flex" : "none" , opacity : onInput ?  "1" : "0"}}>
            {
                loading ?<Spin indicator={<LoadingOutlined style={{color : "red" , fontSize : 50}} spin/>}/> :
                    searchRes.suggestion_products.map((element)=>{
                        return(
                            <Link key={element.id} to={'/product/'+element.id}>
                                <Row className={'mt-4'} data-click={'click'}>
                                    <Col data-click={'click'} md={3}><img data-click={'click'} className={'img-fluid'} src={element.images.main.url[0]} alt={element.title_fa}/></Col>
                                    <Col data-click={'click'} md={7}>
                                        <div className={'text-dark'} data-click={'click'}>{element.title_fa}</div>
                                        <div data-click={'click'}></div>
                                    </Col>
                                    <Col data-click={'click'} md={2} className={'d-flex justify-content-center align-items-center'}>
                                    </Col>
                                </Row>
                            </Link>
                        )
                    })
            }

        </div>
    )
}
export default SearchBox ;