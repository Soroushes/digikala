import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {useState} from "react";

const SingleProImage = ()=>{
    const {images} = useSelector(state => state.singleProduct) ;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode,Thumbs]}
                className="mySwiper2"
            >
                {
                    images.list.map((pics , index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className={'rounded-3 p-1'}>
                                    <img className={'w-100'} src={pics.url[0]} alt=""/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.list.map((pics , index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className={'border rounded-3 p-1'}>
                                    <img className={'w-100'} src={pics.url[0]} alt=""/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>


    )
}
export default SingleProImage ;