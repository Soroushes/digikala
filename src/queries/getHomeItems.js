import axios from "axios";

const getHomeItems = ()=>{
    return axios({
        url : "https://api.digikala.com/v1/" ,
        method : "GET"
    })
}
export default getHomeItems ;