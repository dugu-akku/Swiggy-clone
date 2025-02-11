function Card(props){
    return(
    <div className="card" style={{border:"2px solid black" , padding:"2px"}}>
    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22581032/2024/3/22/b639ab0b-5315-46cd-a834-bf76614fc2f51711085638645-Bewakoof-Cotton-Panda-Printed-Oversized-Fit-T-shirt-34717110-7.jpg" height="200px" width="200px" />
    <div style={{textAlign:"center"}}>
        <h2>{props.rest}</h2>
        <h1>{props.Offer}</h1>
        <h2>{props.address}</h2>
    </div>
</div>
)        
}


export default Card;