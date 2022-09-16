import Slider from '../containers/slider'
import RowOfPics from "../containers/rowOfPics";
import MiniProductsRow from "../containers/miniProductsRow";
import MarketOff from "../containers/MarketOff";
import ProductImg from "../containers/productImg";
import ProductSort from "../containers/productSort";
const Home = ()=>{
    return(
        <>
            <Slider/>
            <RowOfPics/>
            <MiniProductsRow/>
            <MarketOff/>
            <ProductImg/>
            <ProductSort/>
        </>
    )
}
export default Home ;