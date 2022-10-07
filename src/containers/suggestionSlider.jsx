import {Swiper, SwiperSlide} from "swiper/react";
import {Container} from "reactstrap";
import {FreeMode, Grid , Navigation} from "swiper";
import "swiper/css/bundle" ;
import "swiper/css/grid" ;
import RoundedImg from "../base/roundedImg";
import {useSelector} from "react-redux";
import {Skeleton} from "antd";
const wait = Array(16).fill(<><Skeleton.Avatar className={'my-2'} active size={50}/><Skeleton.Input className={'rounded-3'} block active size={20}/></>) ;
const SuggestionSlider = ()=>{
    const {recommendation_sub_categories , loading} = useSelector(state => state.home) ;
    const items = recommendation_sub_categories ? recommendation_sub_categories : wait ;
    return(
        <>
            <Container>
                <h2 style={{fontSize : 23}} className={'text-center my-4'}>پیشنهاد دیجیکالا</h2>
                <div className={'border rounded-3 mb-5'} style={{minHeightheight : 200}}>
                    <Swiper
                        observer={true}
                        observeParents={true}
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
                            items.map((item , index )=>{
                                return(
                                    <SwiperSlide key={item.id || index}>
                                        {
                                            loading ? <div className={'m-2 text-center overflow-hidden'} key={index}>{item}</div> :
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