import {Container} from "reactstrap";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
import "swiper/css/bundle" ;
import {Skeleton} from "antd";
const BrandSlider = ()=>{
    const images = Array(10).fill(<><Skeleton.Avatar className={'my-2'} active size={80}/></>)
    const [brands , setBrands] = useState(images) ;
    const [loading , setLoading] = useState(true) ;
    useEffect(()=>{
        getItems() ;
    },[])
    const getItems = async ()=>{
        const result = await getData('brands') ;
        if (result){
            setBrands(result);
            setLoading(false)
        }
    }
    return(
        <Container>
            <div className={'p-4 border rounded-3 mb-4'}>
                <h2 style={{fontSize : 21}} className={'text-center mb-4'}>محبوب ترین برندها</h2>
                <Swiper
                    slidesPerView={8}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    {
                        brands.map((brand , index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className={'border-end ms-2 px-4 overflow-hidden text-center'}>
                                        {
                                            loading ? brand : <img className={'w-100'} src={brand.img} alt=""/>
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Container>
    )
}
export default BrandSlider ;