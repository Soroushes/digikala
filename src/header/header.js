import Ads from "./ads" ;
import {useState , useEffect} from "react";
import {Container , Row , Col , Button} from "reactstrap";
import Search from "./search";
import axios from "axios";
import Enterbtn from "./enterBtn";

const Header = ()=>{
    const [loading , setLoading] = useState(false) ;
    const onSearch = async (val)=>{
        setLoading(true) ;
        try {
            let {data} = await axios({
                url : "http://localhost:4000/search" ,
                method : "GET"
            });
            setLoading(false) ;
            let searched = data.filter((element)=>{
                if (element.title.toLowerCase().indexOf(val.toLowerCase())!==-1)return true ;
            })
            return searched ;

        }catch (err){
            console.log(err)
        }
    }
    return(
        <>
            <Ads>ads</Ads>
            <Container fluid={"xl"}>
                <Row className={"mt-4"}>
                    <Col md={2}>
                        <a href=""><img className={"w-75 text-center"} src="http://localhost:3000/logo.svg" alt="Digikala-logo"/></a>
                    </Col>
                    <Col className={"position-relative"} md={{size : 5 , offset : 3}}>
                        <Search onSearch={onSearch} load={loading}/>
                    </Col>
                    <Col md={2}>
                        <Enterbtn>ورود | ثبت نام</Enterbtn>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Header ;