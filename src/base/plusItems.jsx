import {Col} from "reactstrap";

const PlusItems = ({title , items ,className})=>{
    return(
        <div className={"bg-white h-100 p-3 " + (className ? className : '')}>
            <div className={'d-flex flex-wrap h-100 align-items-between'}>
                <Col className={'mb-4'} xs={6}><h3 style={{fontSize : 17}}>{title}</h3></Col>
                <Col className={'mb-4'} xs={6}><p style={{color : "#941a80" , fontSize : 12}} className={'text-start'}>مشاهده همه ></p></Col>
                {
                    items.map((item , index)=>{
                        if (index>5) return ''
                        else {
                            return(
                                <Col xs={4} md={6} lg={4} key={item.id} className={'mb-4 px-3'}>
                                    <img className={'w-100'} src={item.images.main.url[0]} alt={item.title}/>
                                </Col>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default PlusItems ;