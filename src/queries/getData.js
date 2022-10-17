import axios from 'axios';
const getData = async (route)=>{
    try {
        const {data} = await axios({
            url : "http://localhost:3333/"+route ,
            method : "get"
        })
        return data ;
    }catch (err){
        return false
    }
}
export default getData ;