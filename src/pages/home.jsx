import Slider from '../containers/slider'
import RowOfPics from "../containers/rowOfPics";
import MiniProductsRow from "../containers/miniProductsRow";
import MarketOff from "../containers/MarketOff";
import ProductImg from "../containers/productImg";
import SuggestionSlider from "../containers/suggestionSlider";
import "swiper/css/bundle";
import BrandSlider from "../containers/BrandSlider";
import FourPicsRow from "../containers/fourPicsRow";
import {useEffect} from "react";
import getHomeItems from "../queries/getHomeItems";
import {useDispatch, useSelector} from "react-redux";
import {ITEMS} from "../redux/slice/homeSlice";
import DeepLinks from "../containers/deepLinks";
import DigiPlus from "../containers/digiPlus";
const Home = ()=>{
    const {loading} = useSelector(state => state.home) ;
    const dispatcher  = useDispatch() ;
    useEffect(()=>{
        if (loading){
            getHomeItems("https://api.digikala.com/v1/")
                .then((result)=>{
                    dispatcher(ITEMS({
                        ...result.data.data ,
                        loading : false
                    }));
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    },[])

    return(
        <>
            <Slider/>
            <DeepLinks/>
            <MiniProductsRow/>
            <MarketOff/>
            <ProductImg kilid={"top_banners"} items={4} xs={6} lg={3}/>
            <h2 style={{fontSize : 23}} className={'text-center my-4'}> دسته بندی های دیجیکالا</h2>
            <RowOfPics/>
            <ProductImg kilid={'middle_banners'} items={2} xs={12} lg={6}/>
            <SuggestionSlider/>
            <BrandSlider/>
            <FourPicsRow route={'fourpics1'}/>
            <DigiPlus/>
        </>
    )
}
export default Home ;