import {Container} from "reactstrap";
import {useSelector} from "react-redux";
import { Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
const Slider = ()=>{
    const {header_banners , loading} = useSelector(state => state.home) ;
    return(
        <Container className={'p-0 position-relative d-flex justify-content-center slider-container'} fluid>
            {
                loading ? <div className={'loading-container'}></div> :
                    <>
                        <div className={'prev-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/next.svg'} alt=""/></div>
                        <div className={'next-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/prev.svg'} alt=""/></div>
                        <Swiper
                            slidesPerView={1}
                            resizeObserver={true}
                            updateOnWindowResize={true}
                            observer={true}
                            observeParents={true}
                            watchSlidesProgress = {true}
                            pagination={
                            {
                                enabled : true ,
                                clickable : true
                            }}
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
                                    return <SwiperSlide key={element.id}><img className={"w-100"} src={element.image}  alt={element.title}/></SwiperSlide>
                                })
                            }
                        </Swiper>
                    </>
            }


        </Container>
    )
}
export default Slider ;