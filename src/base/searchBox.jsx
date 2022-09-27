import {Col, Row} from "reactstrap";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import getProductDetails from "../queries/getProductDetails";
import {useDispatch} from "react-redux";
import {ADD} from "../redux/slice/cart";

const SearchBox = ({loading , searchRes , onInput})=>{
    const dispatcher = useDispatch();
    if(!searchRes.suggestion_products) searchRes.suggestion_products = [] ;
    const buy = async (id)=>{
        try {
            const {data : {data}} = await getProductDetails(id) ;
            if (!data.product.default_variant.price){
                alert('محصول مورد نظر موجود نمی باشد') ;
                return ;
            }
            dispatcher(ADD(data)) ;
        }catch (err){
            console.log(err)
        }
    }
    return(
        <div data-click={'click'} className={"search-box w-100 justify-content-center flex-column align-items-center"} style={{display : onInput ? "flex" : "none" , opacity : onInput ?  "1" : "0"}}>
            {
                loading ?<Spin indicator={<LoadingOutlined style={{color : "red" , fontSize : 50}} spin/>}/> :
                    searchRes.suggestion_products.map((element)=>{
                        return(
                            <Row className={'mt-4'} key={element.id} data-click={'click'}>
                                <Col data-click={'click'} md={3}><img  data-click={'click'} className={'img-fluid'} src={element.images.main.url[0]} alt={element.title_fa}/></Col>
                                <Col data-click={'click'} md={7}>
                                    <div data-click={'click'}>{element.title_fa}</div>
                                    <div data-click={'click'}></div>
                                </Col>
                                <Col data-click={'click'} md={2} className={'d-flex justify-content-center align-items-center'}>
                                    <p onClick={buy.bind(this , element.id)} style={{width : 30 , height : 30 , cursor : "pointer"}} data-click={'click'} className={'m-0 d-flex justify-content-center align-items-center  rounded-pill text-white bg-danger'}>+</p>
                                </Col>
                            </Row>
                        )
                    })
            }

        </div>
    )
}
export default SearchBox ;