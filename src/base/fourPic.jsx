import {Col, Container, Row} from "reactstrap";

const FourPic = ({title ,img})=>{
    return(
        <div className={'p-3'}>
            <h3 style={{fontSize : 16}}>{title}</h3>
            <p className={'text-muted m-0 mb-1'} style={{fontSize : 10}}>ّبر اساس بازدیدهای شما</p>
            <Row className={'border-bottom'}>
                <Col className={'border-start p-4'} xs={6}><img className={'w-100'} src={img[0]} alt=""/></Col>
                <Col className={'p-4'} xs={6}><img className={'w-100'} src={img[1]} alt=""/></Col>
            </Row>
            <Row>
                <Col className={'border-start p-4'} xs={6}><img className={'w-100'} src={img[2]} alt=""/></Col>
                <Col className={'p-4'} xs={6}><img className={'w-100'} src={img[3]} alt=""/></Col>
            </Row>
        </div>
    )
}
export default FourPic ;