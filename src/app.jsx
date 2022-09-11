import Header from "./containers/header";
import {Routes , Route} from "react-router-dom";
import Home from './pages/home'

const App = ()=>{
    return(
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
            </Routes>

        </>

    )
}
export default App ;