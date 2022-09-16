const CircleImg = ({img , title='' , font=10})=>{
    return(
        <div className={'px-2 px-md-5 px-lg-3 my-4'}>
            <p><img className={'w-100'} src={img} alt={title}/></p>
            <p className={'text-center'} style={{fontSize : font}}>{title}</p>
        </div>
    )
}
export default CircleImg ;