const CircleImg = ({img , title , font=10})=>{
    return(
        <div className={'p-2 my-2'}>
            <p><img className={'w-100'} src={img} alt={title}/></p>
            <p className={'text-center'} style={{fontSize : font}}>{title}</p>
        </div>
    )
}
export default CircleImg ;