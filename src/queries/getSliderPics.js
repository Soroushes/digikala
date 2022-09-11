import axios from 'axios' ;
const getSliderPics = async ()=>{
    try {
        const {data} = await axios({
            url : "http://localhost:3000/slider" ,
            method : "get"
        })
        return data ;
    }catch (err){
        console.log(err)
        return false ;
    }
}
export default getSliderPics ;