import {useSelector} from "react-redux";

const ProductAttr = ()=>{
    const {attributes} = useSelector(state => state.singleProduct.review) ;
    return(
        <>
            <h3 style={{fontSize : 20}} className={'my-4'}>ویژگی ها</h3>
            <ul className={'px-3'}>
            {
                attributes.map((attr , index)=>{
                    return(
                        <li key={index} style={{fontSize : 13}} className={'mb-2  text-muted'}>{attr.title} : <span className={'text-dark'}>{attr.values[0]}</span> </li>
                    )
                })
            }
            </ul>
        </>

    )
}
export default ProductAttr ;