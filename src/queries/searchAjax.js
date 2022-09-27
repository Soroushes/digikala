import axios from "axios";
const searchAjax = async (val)=>{
    try {
        let {data} = await axios({
            url : "https://api.digikala.com/v1/autocomplete/?q="+val ,
            method : "GET"
        });
    return data.data ;
    }catch (err){
        return [] ;
    }
}
export default searchAjax ;