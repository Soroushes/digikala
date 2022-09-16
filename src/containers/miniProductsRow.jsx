import {Container} from "reactstrap";
import MiniProducts from "../base/miniProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode} from "swiper";
import {useEffect, useState} from "react";
import getData from "../queries/getData";


const MiniProductsRow = ()=>{
    const [loading , setLoading] = useState(false) ;
    const [products , setProducts] = useState([]) ;
    const [image , setImages] = useState([]) ;
    useEffect(()=>{
        getItems() ;
    },[])
    const getItems = async ()=> {
        const result = await getData('miniproducts');
        const images = await getData("miniproductsimg") ;
        if (result) {
            setProducts(result);
            setLoading(false);
        }
        if (images)setImages(images)
    }
    return(
        <Container>
            <div className={'products-row'}>
                <div className={'prev-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/next.svg'} alt=""/></div>
                <div className={'next-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/prev.svg'} alt=""/></div>

                <Swiper
                    freeMode={true}
                    spaceBetween={2}
                    className="mySwiper"
                    slidesPerView={1.8}
                    modules={[FreeMode]}
                    breakpoints={{
                        450 : {
                          slidesPerView : 2.5
                        },
                        640: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1000 : {
                            slidesPerView : 5
                        },
                        1200: {
                            slidesPerView: 6.5,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className={'px-5'}>
                            <img className={'w-100 mb-2'} src={image[0]} alt=""/>
                            <img className={'w-100 mb-2'} src={image[1]} alt=""/>
                            <p className={'text-center m-0 text-white'}>مشاهده همه</p>
                        </div>
                    </SwiperSlide>
                    {
                        products.map((product , index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <MiniProducts img={product.img} percent={product.percent} oldPrice={product.oldPrice} newPrice={product.price}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Container>
    )
}
export default MiniProductsRow ;