import {Swiper, SwiperSlide} from "swiper/react";
import {Container} from "reactstrap";
import {FreeMode, Grid , Navigation} from "swiper";
import "swiper/css/bundle" ;
import "swiper/css/grid" ;
import RoundedImg from "../base/roundedImg";
const SuggestionSlider = ({items ,loading})=>{
    return(
        <>
            <Container>
                <h2 style={{fontSize : 23}} className={'text-center my-4'}>پیشنهاد دیجیکالا</h2>
                <div className={'border rounded-3 mb-5'} style={{minHeightheight : 200}}>
                    <Swiper
                        slidesPerView={2.5}
                        freeMode={true}
                        grid={{
                            rows : 2 ,
                            fill : "row"
                        }}
                        navigation={true}
                        breakpoints={{
                            450 : {
                                slidesPerView : 3.2
                            },
                            640: {
                                slidesPerView: 3.7
                            },
                            768: {
                                slidesPerView: 4.2
                            },
                            1000 : {
                                slidesPerView : 5
                            },
                            1200: {
                                slidesPerView: 5.5
                            },
                            1400 : {
                                slidesPerView : 6.9
                            }
                        }}
                        modules={[Navigation,FreeMode , Grid]}
                        className="mySwiper"
                    >
                        {
                            items.map((item)=>{
                                return(
                                    <SwiperSlide key={item.id}>
                                        {
                                            loading ? <div className={'text-center overflow-hidden p-3'}>{item}</div> :
                                                <RoundedImg img={item.top_product_image} title={item.title_fa}/>
                                        }
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Container>

        </>
    )
}
export default SuggestionSlider ;