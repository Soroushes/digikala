import {Container} from "reactstrap";
import MiniProducts from "../base/miniProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode} from "swiper";
import priceDivider from "../helpers/priceDivider";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const MiniProductsRow = ()=>{
    const {incredible_products, loading} = useSelector(state => state.home) ;
    return(
        <Container className={'mt-2'}>
            {
                loading ? <div className={'loading-container'}></div> :
                    <div className={'products-row'}>
                        <div className={'prev-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/next.svg'} alt=""/></div>
                        <div className={'next-btn d-flex justify-content-center'}><img className={'w-50'} src={'./svg/prev.svg'} alt=""/></div>

                        <Swiper
                            observer={true}
                            observeParents={true}
                            freeMode={true}
                            spaceBetween={2}
                            className="mySwiper"
                            slidesPerView={2}
                            modules={[FreeMode]}
                            breakpoints={{
                                450 : {
                                    slidesPerView : 3.2
                                },
                                640: {
                                    slidesPerView: 3.5
                                },
                                768: {
                                    slidesPerView: 4.5
                                },
                                1000 : {
                                    slidesPerView : 6.5
                                },
                                1200: {
                                    slidesPerView: 7.5
                                }
                            }}
                        >
                            <SwiperSlide className={'h-100 px-5'}>
                                    <img className={'mt-2 w-100'} src={"https://www.digikala.com/statics/img/svg/amazing-typo.svg"} alt=""/>
                                    <img className={'mt-2 w-100'} src={"https://www.digikala.com/statics/img/png/specialCarousel/box.png"} alt=""/>
                                    <p className={'text-center m-0 text-white'}>مشاهده همه</p>
                            </SwiperSlide>
                            {
                                incredible_products.products.map((product)=>{
                                    return(
                                        <SwiperSlide key={product.id}>
                                            <Link to={'/product/'+product.id}>
                                                <MiniProducts
                                                    img={product.images.main.url[0]}
                                                    percent={product.default_variant.price.discount_percent}
                                                    oldPrice={priceDivider((product.default_variant.price.rrp_price)/10)}
                                                    newPrice={priceDivider((product.default_variant.price.selling_price)/10)}
                                                    cart={product.id}
                                                />
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
            }

        </Container>
    )
}
export default MiniProductsRow ;