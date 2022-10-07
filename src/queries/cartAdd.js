import axios from "axios";

const cartAdd = (method , send)=>{
    return axios({
        url : 'http://localhost:3000/cart' ,
        method : method,
        data : send ? send : ""
    })
}
export default cartAdd ;