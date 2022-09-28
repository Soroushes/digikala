import Slider from '../containers/slider'
import RowOfPics from "../containers/rowOfPics";
import MiniProductsRow from "../containers/miniProductsRow";
import MarketOff from "../containers/MarketOff";
import ProductImg from "../containers/productImg";
import SuggestionSlider from "../containers/suggestionSlider";
import "swiper/css/bundle";
import BrandSlider from "../containers/BrandSlider";
import FourPicsRow from "../containers/fourPicsRow";
import {useEffect, useState} from "react";
import getHomeItems from "../queries/getHomeItems";
import {Skeleton} from "antd";
const Home = ()=>{
    const [loading , setLoading] = useState(true) ;
    const [headerBanner ,setHeaderBanner] = useState([]) ;
    const [topBanner ,setTopBanner] = useState(Array(4).fill(<div style={{backgroundColor : '#f2f2f2' , height : 200}} className={'w-100 rounded-3'}></div>)) ;
    const [middleBanner ,setMiddleBanner] = useState(Array(2).fill(<div style={{backgroundColor : '#f2f2f2' , height : 200}} className={'w-100 rounded-3'}></div>)) ;
    const [bottomBanner ,setBottomBanner] = useState(Array(2).fill(<div style={{backgroundColor : '#f2f2f2' , height : 200}} className={'w-100 rounded-3'}></div>)) ;
    const [miniProductRow , setMiniProductRow] = useState([]) ;
    const [brands , setBrands] = useState(Array(10).fill(<Skeleton.Avatar active size={50}/>)) ;
    const [categories , setCategories] = useState( Array(11).fill(<><Skeleton.Avatar className={'my-2'} active size={50}/><Skeleton.Input active size={20}/></>)) ;
    const [marketOff , setMarketOff] = useState(Array(6).fill(<Skeleton.Avatar active size={50}/>)) ;
    const [deepLinks , setDeepLinks] = useState (Array(8).fill(<Skeleton.Avatar shape={'square'} active size={50}/>)) ;
    const [suggestionSlider , setSuggestionSlider] = useState(Array(10).fill(<Skeleton.Avatar active size={50}/>)) ;
    console.log(deepLinks);
    console.log(marketOff);
    useEffect(()=>{
        getHomeItems()
            .then((result)=>{
                setHeaderBanner(result.data.data.header_banners) ;
                setMiniProductRow(result.data.data.incredible_products.products);
                setMarketOff(result.data.data.fresh_incredible_products.products);
                setCategories(result.data.data.main_categories.categories) ;
                setDeepLinks(result.data.data.deep_links) ;
                setSuggestionSlider(result.data.data.recommendation_sub_categories);
                setBrands(result.data.data.popular_brands.brands) ;
                setTopBanner(result.data.data.top_banners) ;
                setMiddleBanner(result.data.data.middle_banners) ;
                setBottomBanner(result.data.data.bottom_banners) ;
                setLoading(false) ;
            })
            .catch((err)=>{
                console.log(err);
            })
    },[])

    return(
        <>
            <Slider header_banners={headerBanner} loading={loading}/>
            <RowOfPics max={7} xs={3} lg={1} title={'title'} loading={loading} categories={deepLinks} image={'icon'} font={10} center={false}/>
            <MiniProductsRow products={miniProductRow} loading={loading}/>
            <MarketOff marketItems={marketOff}  loading={loading}/>
            <ProductImg xs={6} lg={3} loading={loading} products={topBanner}/>
            <h2 style={{fontSize : 23}} className={'text-center my-4'}> دسته بندی های دیجیکالا</h2>
            <RowOfPics max={11} image={'logo'} title={'title_fa'} loading={loading} categories={categories} xs={4} lg={2} font={16} center={true}/>
            <ProductImg xs={12} lg={6} loading={loading} products={middleBanner}/>
            <SuggestionSlider loading={loading} items={suggestionSlider}/>
            <BrandSlider loading={loading} brands={brands}/>
            <ProductImg xs={12} lg={12} loading={loading} products={bottomBanner}/>
            <FourPicsRow route={'fourpics1'}/>
        </>
    )
}
export default Home ;