import {useSelector} from "react-redux";

const SingleProImage = ()=>{
    const {images} = useSelector(state => state.singleProduct) ;
    return(
        <>
            <img className={'w-100'} src={images.main.url[0]} alt=""/>
            <div className={'d-flex gap-2 flex-nowrap mt-2'}>
                {
                    images.list.map((pics , index)=>{
                        return(
                            index>5 ? "" :
                                <div key={index} style={{width : "16.6666%"}} className={'border rounded-3 p-1'}>
                                    <img className={'w-100'} src={pics.url[0]} alt=""/>
                                </div>
                        )
                    })
                }
            </div>
        </>

    )
}
export default SingleProImage ;