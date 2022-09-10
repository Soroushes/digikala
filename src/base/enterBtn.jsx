import {Col, Row} from "reactstrap";
const EnterBtn = ({children,classname})=>{
    return(
        <>
            <button className={`enter-button w-100 ${classname?classname:""}`}>{children}</button>
        </>
    )
}
export default EnterBtn ;