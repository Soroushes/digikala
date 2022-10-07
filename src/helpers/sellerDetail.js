const sellerDetail = (stars)=>{
    let title = '' ;
    let color = '' ;
    if (stars<2.5){
        title =  'ضعیف' ;
        color = "#f00"
    }
    else if (stars >= 2.5 && stars<3.5){
        title = 'خوب' ;
        color = '#f9bc00'
    }
    else if (stars <= 3.5 && stars<4.5){
        title = 'خیلی خوب' ;
        color = '#b1b64d'
    }
    else{
        title = "عالی" ;
        color = "#00a049"
    }
    return{
        title,color
    }
}
export default sellerDetail ;