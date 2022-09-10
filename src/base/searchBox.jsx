import {Col, Row, Spinner} from "reactstrap";
import EnterBtn from './enterBtn' ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SearchBox = ({loading , searchRes , onInput})=>{
    return(
        <div className={"search-box w-100"} style={{display : onInput ? "block" : "none" , opacity : onInput ?  "1" : "0"}}>
            {
                searchRes.map((element)=>{
                    return(
                        <Row className={'mt-3'} key={element.id}>
                            <Col md={3}><img className={'img-fluid'} src={element.image} alt={element.title}/></Col>
                            <Col md={9}>{element.title}</Col>
                        </Row>
                    )
                })
            }
        </div>
    )
}
export default SearchBox ;