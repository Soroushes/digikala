const RoundedImg = ({title , img})=>{
    return(
        <div className={'border-end ms-4 pe-4 py-3 border-bottom'}>
            <div className={'px-3 px-lg-5'}>
                <div className={'position-relative rounded-pill overflow-hidden p-3'}>
                    <div className={'shadow-fade'}></div>
                    <img className={'w-100'} src={img} alt={title}/>
                </div>
            </div>
            <p style={{whiteSpace : "nowrap" , textOverflow : "ellipsis"}} className={'text-center overflow-hidden m-0 mt-2'}>{title}</p>
        </div>
)
}
export default RoundedImg ;