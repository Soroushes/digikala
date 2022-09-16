import {Button, Container} from "reactstrap";
import { Swiper, SwiperSlide} from "swiper/react";
import swiper, {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import {useEffect, useState} from "react";
import getData from "../queries/getData";
const Slider = ()=>{
    useEffect(()=>{
        getItems() ;
    },[]) ;
    const [loading ,setLoading] = useState(true)
    const [sliderItems , setSliderItems] = useState([]) ;
    const getItems = async ()=>{
        const result = await getData('slider') ;
        if (result){
            setSliderItems(result) ;
            setLoading(false) ;
        }
    }
    return(
        <Container className={'p-0 position-relative d-flex justify-content-center slider-container'} fluid>
            {
                loading ? <img className={'p-5'} src={'./img/loading.gif'} alt=""/> :
                    <>
                        <div className={'prev-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/next.svg'} alt=""/></div>
                        <div className={'next-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/prev.svg'} alt=""/></div>
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                            navigation={{
                                enabled: true,
                                nextEl: '.next-btn',
                                prevEl: '.prev-btn',
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay, Navigation]}
                            loop={true}
                            className="mySwiper"
                        >
                            {
                                sliderItems.map((pics, index) => {
                                    return <SwiperSlide key={index}><img className={"w-100"} src={pics.img} alt=""/></SwiperSlide>
                                })
                            }
                        </Swiper>
                    </>
            }

        </Container>
    )
}
export default Slider ;