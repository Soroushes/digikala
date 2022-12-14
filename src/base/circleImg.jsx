const CircleImg = ({img , title='' , font=10})=>{
    return(
        <>
            <div className={'px-2 p-sm-4 px-md-5 px-lg-3'}>
                <p className={'m-0'}><img className={'w-100'} src={img} alt={title}/></p>
            </div>
            <p className={'text-center'} style={{fontSize : font}}>{title}</p>
        </>

)
}
export default CircleImg ;