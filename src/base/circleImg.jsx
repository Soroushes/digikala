const CircleImg = ({img , title='' , font=10 , rounded=false})=>{
    return(
        <div className={'p-2 p-md-5 p-lg-3 mb-2'}>
            <p><img className={'w-100'} src={img} alt={title}/></p>
            <p className={'text-center'} style={{fontSize : font}}>{title}</p>
        </div>
    )
}
export default CircleImg ;