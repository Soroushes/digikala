import {useDispatch, useSelector} from "react-redux";
import {CheckOutlined} from "@ant-design/icons";
import {SELECT, SIMPLE} from "../redux/slice/singleProductsSlice";
import {useEffect} from "react";
const ProductColors = ()=>{
    const dispatcher = useDispatch() ;
    const {colors , selected , variants} = useSelector(state => state.singleProduct) ;
    const colorChange = (id)=>{
        const filtered = variants.filter((item)=>{
            return item.color.id===id
        }).sort((a,b)=>a.price.selling_price - b.price.selling_price) ;
        dispatcher(SELECT(filtered[0])) ;
    }
    useEffect(()=>{
        const id = selected.color.id ;
        const filtered = variants.filter((item)=>{
            return item.color.id===id
        }) ;
        dispatcher(SIMPLE(filtered)) ;
    },[selected])
    return(
        <div className={'pe-4 pe-lg-0'}>
            <h3 className={'fw-bold'} style={{fontSize : 16}}>  رنگ :  {selected.color.title}</h3>
            <div className={'d-flex flex-wrap mt-4 gap-3'}>
                {
                    colors.map((color)=>{
                        return(
                            <div onClick={colorChange.bind(this,color.id)} key={color.id} style={{backgroundColor : color.hex_code , width : 40 , height : 40}}
                                 className={'rounded-pill border border-3 d-flex align-items-center justify-content-center ' + (color.id===selected.color.id ? "border-primary" : "") }>
                                {
                                    color.id===selected.color.id ? <CheckOutlined style={{fontSize : 20}}  className={'text-white'}/>: ""
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProductColors ;