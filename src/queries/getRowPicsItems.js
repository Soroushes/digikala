import axios from 'axios';
const getRowPicsItems = async ()=>{
    try {
        const {data} = await axios({
            url : "http://localhost:3000/rowpics" ,
            method : "get"
        })
        return data ;
    }catch (err){
        return false
    }
}
export default getRowPicsItems ;