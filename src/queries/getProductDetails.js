import axios from "axios";

const getProductDetails = (id)=>{
    return axios({
        url : 'https://api.digikala.com/v1/product/'+ id+'/' ,
        method : "GET"
    })
}
export default getProductDetails ;