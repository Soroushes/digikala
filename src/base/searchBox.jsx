import {Col, Row} from "reactstrap";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const SearchBox = ({loading , searchRes , onInput , click})=>{
    return(
        <div data-click={'click'} className={"search-box w-100 justify-content-center flex-column align-items-center"} style={{display : onInput ? "flex" : "none" , opacity : onInput ?  "1" : "0"}}>
            {
                loading ?<Spin indicator={<LoadingOutlined style={{color : "red" , fontSize : 50}} spin/>}/> :
                    searchRes.map((element)=>{
                        return(
                            <Row data-click={'click'} style={{cursor : "pointer"}} onClick={click.bind(this ,element.id)} className={'mt-3'} key={element.id}>
                                <Col data-click={'click'} md={3}><img  data-click={'click'} className={'img-fluid'} src={element.image} alt={element.title}/></Col>
                                <Col data-click={'click'} md={9}>{element.title}</Col>
                            </Row>
                        )
                    })
            }

        </div>
    )
}
export default SearchBox ;