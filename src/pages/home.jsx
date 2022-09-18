import Slider from '../containers/slider'
import RowOfPics from "../containers/rowOfPics";
import MiniProductsRow from "../containers/miniProductsRow";
import MarketOff from "../containers/MarketOff";
import ProductImg from "../containers/productImg";
const Home = ()=>{
    return(
        <>
            <Slider/>
            <RowOfPics xs={3} lg={1} route={'rowpics'} items={8} font={10} center={false}/>
            <MiniProductsRow/>
            <MarketOff/>
            <ProductImg xs={6} lg={3} route={'productimg'}/>
            <RowOfPics xs={3} lg={2} route={'productsort'} items={11} font={16} center={true}/>
            <ProductImg xs={6} lg={6} route={'productimg2'}/>
        </>
    )
}
export default Home ;