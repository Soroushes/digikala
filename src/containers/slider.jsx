import {Container} from "reactstrap";
import { Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
import getSliderPics from "../queries/getSliderPics";
import {useEffect, useState} from "react";
const Slider = ()=>{
    useEffect(()=>{
        getItems() ;
    }) ;
    const [sliderItems , setSliderItems] = useState([]) ;
    const getItems = async ()=>{
        const result = await getSliderPics() ;
        if (result)setSliderItems(result) ;
    }
    return(
        <Container className={'p-0'} fluid>
                <Swiper
                    slidesPerView={1}
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination , Autoplay]}
                    loop={true}
                    className="mySwiper"
                >
                    {
                        sliderItems.map((pics , index)=>{
                            return <SwiperSlide key={index}><img className={"w-100"} src={pics.img} alt=""/></SwiperSlide>
                        })
                    }
                </Swiper>
        </Container>
    )
}
export default Slider ;