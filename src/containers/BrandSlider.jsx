import {Container} from "reactstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
import "swiper/css/bundle" ;
const BrandSlider = ({brands , loading})=>{
    return(
        <Container>
            <div className={'p-4 border rounded-3 mb-4'}>
                <h2 style={{fontSize : 21}} className={'text-center mb-4'}>محبوب ترین برندها</h2>
                <Swiper
                    slidesPerView={3}
                    freeMode={true}
                    modules={[FreeMode]}
                    breakpoints={{
                        450 : {
                            slidesPerView : 3.5
                        },
                        640: {
                            slidesPerView: 4.5
                        },
                        768: {
                            slidesPerView: 5.5
                        },
                        1000 : {
                            slidesPerView : 6
                        },
                        1200: {
                            slidesPerView: 7.5
                        }
                    }}
                    className= "mySwiper"
                >
                    {
                        brands.map((brand , index)=>{
                            return(
                                <SwiperSlide key={brand.id || index}>
                                    <div className={'border-end ms-2 px-md-4 px-2 overflow-hidden brands'}>
                                        {
                                            loading ? brand : <img className={'w-100'} src={brand.logo.url[0]} alt={brand.title_fa}/>
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Container>
    )
}
export default BrandSlider ;