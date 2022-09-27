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
    const [miniProductRow , setMiniProductRow] = useState([]) ;
    const [marketOff , setMarketOff] = useState(Array(6).fill(<Skeleton.Avatar active size={50}/>)) ;
    useEffect(()=>{

        getHomeItems()
            .then((result)=>{
                setHeaderBanner(result.data.data.header_banners) ;
                setMiniProductRow(result.data.data.incredible_products.products);
                setMarketOff(result.data.data.fresh_incredible_products.products);
                setLoading(false) ;
            })
            .catch((err)=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <Slider header_banners={headerBanner} loading={loading}/>
            <RowOfPics xs={3} lg={1} route={'rowpics'} items={8} font={10} center={false}/>
            <MiniProductsRow products={miniProductRow} loading={loading}/>
            <MarketOff marketItems={marketOff}  loading={loading}/>
            <ProductImg xs={6} lg={3} route={'productimg'}/>
            <h2 style={{fontSize : 23}} className={'text-center my-4'}> دسته بندی های دیجیکالا</h2>
            <RowOfPics xs={3} lg={2} route={'productsort'} items={11} font={16} center={true}/>
            <ProductImg xs={12} lg={6} route={'productimg2'}/>
            <SuggestionSlider/>
            <BrandSlider/>
            <ProductImg xs={12} lg={6} route={'underbrands'}/>
            <FourPicsRow route={'fourpics1'}/>
        </>
    )
}
export default Home ;