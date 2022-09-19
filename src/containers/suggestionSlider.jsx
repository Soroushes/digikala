import {Swiper, SwiperSlide} from "swiper/react";
import {Container} from "reactstrap";
import {FreeMode, Grid , Navigation} from "swiper";
import "swiper/css/bundle" ;
import "swiper/css/grid" ;
import RoundedImg from "../base/roundedImg";
import {useEffect, useState} from "react";
import getData from "../queries/getData";
import {Skeleton} from "antd";

const SuggestionSlider = ()=>{
    const images = Array(20).fill(<><Skeleton.Avatar className={'my-2'} active size={70}/><Skeleton.Input block active size={'small'}/></>)
    const [items , setItems] = useState(images) ;
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        getItems() ;
    },[]) ;
    const getItems =async ()=>{
        const result = await getData('suggestionslider') ;
        if (result){
            setItems(result) ;
            setLoading(false)
        }
    }
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
                                slidesPerView : 6.5
                            }
                        }}
                        modules={[Navigation,FreeMode , Grid]}
                        className="mySwiper"
                    >
                        {
                            items.map((item , index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        {
                                            loading ? <div className={'text-center overflow-hidden p-3'}>{item}</div> :
                                                <RoundedImg img={item.img} title={item.title}/>
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