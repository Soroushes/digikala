const ImgWithPercent = ({img , percent }) =>{
    return(
        <div className={'p-2 p-md-4 p-lg-2 position-relative '}>
            <img className={'w-100 rounded-pill'} src={img} alt=''/>
            <span style={{right : 10 , bottom : 10}} className={'off-percent position-absolute'}>{percent + "%"}</span>
        </div>
    )
}
export default ImgWithPercent ;