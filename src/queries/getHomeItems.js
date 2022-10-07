import axios from "axios";

const getHomeItems = (url)=>{
    return axios({
        url : url ,
        method : "GET"
    })
}
export default getHomeItems ;