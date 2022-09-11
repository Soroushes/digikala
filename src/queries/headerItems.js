import axios from "axios" ;
const getHeaderItems = async ()=>{
    try{
        const {data} = await axios({
            url  : "http://localhost:3000/header" ,
            method : "GET"
        });
        return data ;
    }catch (err){
        console.log(err) ;
        return false  ;
    }
}
export default getHeaderItems ;