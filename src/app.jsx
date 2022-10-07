import Header from "./containers/header";
import {Routes , Route} from "react-router-dom";
import Home from './pages/home'
import SingleProduct from "./pages/singleProduct";
import {useEffect} from "react";
import cartAdd from "./queries/cartAdd";
import {CHECK_CART} from "./redux/slice/cart";
import {useDispatch} from "react-redux";

const App = ()=>{
    const dispatcher = useDispatch()
    const dispatchCart = async ()=>{
        try {
            const result = await cartAdd("get") ;
            dispatcher(CHECK_CART(result.data)) ;
        }catch (err){
            console.log(err)
        }
    }
    useEffect(()=>{
        dispatchCart() ;
    },[])
    return(
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/product/:id'} element={<SingleProduct/>}/>
            </Routes>

        </>

    )
}
export default App ;