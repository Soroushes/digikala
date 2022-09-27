import {Button, Container} from "reactstrap";
import { Swiper, SwiperSlide} from "swiper/react";
import swiper, {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import {useEffect, useState} from "react";
import getData from "../queries/getData";
const Slider = ({header_banners , loading})=>{
    return(
        <Container className={'p-0 position-relative d-flex justify-content-center slider-container'} fluid>
            {
                loading ? <div className={'loading-container'}></div> :
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
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay, Navigation]}
                            loop={true}
                            className="mySwiper"
                        >
                            {
                                header_banners.map((element) => {
                                    return <SwiperSlide key={element.id}><img className={"w-100"} src={element.image}alt={element.title}/></SwiperSlide>
                                })
                            }
                        </Swiper>
                    </>
            }


        </Container>
    )
}
export default Slider ;