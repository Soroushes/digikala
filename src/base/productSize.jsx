import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {SELECT, SIMPLE} from "../redux/slice/singleProductsSlice";
import {useEffect} from "react";
const {Option} = Select ;
const ProductSize = ()=>{
    const sizes = [] ;
    const {selected , variants} = useSelector(state => state.singleProduct)
    const dispatcher = useDispatch() ;
    const sizeChange = (id)=>{
        const filtered = variants.filter((item)=>{
            return item.size.id===id
        }).sort((a,b)=>a.price.selling_price - b.price.selling_price) ;
        dispatcher(SELECT(filtered[0])) ;
    }
    useEffect(()=>{
        const id = selected.size.id ;
        const filtered = variants.filter((item)=>{
            return item.size.id===id
        }) ;
        dispatcher(SIMPLE(filtered)) ;
    },[selected])
    return(
        <div className={'pe-4 pe-lg-0'}>
            <h3 className={'fw-bold mb-3'} style={{fontSize : 16}}>  اندازه :  {selected.size.title}</h3>
            <Select
                className={'text-center rounded-3'}
                defaultValue={selected.size.title}
                style={{
                    width: 150,
                }}
                onChange={sizeChange}
            >
                {
                    variants.map((item)=>{
                        const find = sizes.find(size => size === item.size.title);
                        sizes.push(item.size.title) ;
                        if (!find){
                            return(
                                <Option key={item.size.id} value={item.size.id}>{item.size.title}</Option>
                            )
                        }
                        else {
                            return ''
                        }
                    })
                }
            </Select>
        </div>
    )
}
export default ProductSize ;