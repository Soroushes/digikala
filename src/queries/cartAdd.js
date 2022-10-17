import axios from "axios";

const cartAdd = (method , send , id)=>{
    return axios({
        url : 'http://localhost:3333/cart/'+(id ? id : "") ,
        method : method,
        data : send ? send : ""
    })
}
export default cartAdd ;