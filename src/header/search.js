import {Col, Input, Row , Spinner} from "reactstrap";
import {useState} from "react";
const Search = ({onSearch , load})=>{
    const [value , setValue] = useState("") ;
    const [onInput , setOnInput] = useState(false) ;
    const [searchRes , setSearchRes] = useState([]) ;
    const change= async (e)=> {
        setValue(e.target.value) ;
        if(e.target.value.length>=3 && !load){
            //setSearchRes(onSearch(e.target.value)) ;
            let result = await onSearch(e.target.value) ;
            setSearchRes(result) ;
        }
        else if(e.target.value.length <3){
            setSearchRes([]) ;
        }
    };
    const blur = ()=> setOnInput(false) ;
    const focus = ()=>setOnInput(true) ;
    return(
        <>
            <Input onFocus={focus} onBlur={blur} onChange={change} value={value} placeholder={"جستجو"} className={"w-100"} style={{backgroundColor : onInput ? "white" : "#eee"}}></Input>
            <div className={"search-bar w-100"} style={{display : onInput ? "block" : "none"}}>
                {
                    load ? <Row className={"justify-content-center"}><Spinner/></Row> :
                    searchRes.map((item , index)=>{
                        return(
                            <>
                                <Row>
                                    <Col md={3} className={"searched-item mb-3"}><img src={item.image} alt=""/></Col>
                                    <Col md={9}>{item.title}</Col>
                                </Row>
                            </>
                        )
                    })
                }
            </div>
        </>


    )
}
export default Search ;