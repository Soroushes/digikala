import axios from "axios";
const searchAjax = async (val)=>{
    try {
        let {data} = await axios({
            url : "http://localhost:3000/search" ,
            method : "GET"
        });
        return data.filter((element) => {
            if (element.title.toLowerCase().indexOf(val.toLowerCase()) !== -1) return true;
        }) ;
    }catch (err){
        return false ;
    }
}
export default searchAjax ;