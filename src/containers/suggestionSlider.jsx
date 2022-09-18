import {Swiper, SwiperSlide} from "swiper/react";
import {Container, Row} from "reactstrap";
import {FreeMode, Grid} from "swiper";
import "swiper/css/bundle" ;
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
                <div className={'border rounded-3 mb-5'} style={{minHeight : 200}}>
                    <Swiper
                        slidesPerView={6.5}
                        freeMode={true}
                        grid={{
                            rows : 2 ,
                            fill : "row"
                        }}
                        modules={[FreeMode , Grid]}
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