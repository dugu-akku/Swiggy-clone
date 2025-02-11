export default function Types(props){
    return(
        <div className="Typesoffood">
            <img  className="image" src="https://b.zmtcdn.com/data/pictures/chains/5/19591905/94a94a9f8b13a4e4c4b4b55efd0dd107.jpg" height="100px"/>
            <div  className="foodname" style={{textAlign:"center"}}>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}