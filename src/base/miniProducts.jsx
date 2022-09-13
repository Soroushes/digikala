const MiniProducts = ({img,newPrice,percent,oldPrice})=>{
    return(
        <div className={'p-1 h-100 bg-white'}>
            <img className={'w-100'} src={img} alt=""/>
            <div className={'d-flex justify-content-between'}>
                    <span className={'off-percent'}>{percent + "%"}</span>
                    <span className={'price'}>{newPrice + "  تومان"}</span>
            </div>
            <p className={'old-price text-start ms-4'}>{oldPrice}</p>
        </div>
    )
}
export default MiniProducts ;