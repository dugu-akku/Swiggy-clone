import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Mind from "./component/Mind";
import Types from "./component/Types";
import arr from "./utils/arr";
import Restaurants from "./component/Body";
import Card from "./component/Card";
import arr1 from "./utils/arr1";




function SwiggyClone(){
    return(
       <>
       <Header></Header>
       <Mind></Mind>
       <div className="foodtype" style={{display:"flex"}}>
        {
            arr.map((value,index) => <Types key={index} name={value.name}/>)
        }
       </div>
       <Types></Types>
       <Restaurants></Restaurants>
       <div className="foodtype" style={{display:"flex"}}>
        {
            arr1.map((value,index) => <Card key={index} rest={value.rest}/>)
        }
       </div>
       <Card></Card>
       
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<SwiggyClone/>);