
function Coin(props) {
return(
    <div className="coin">
        <h1>Name: {props.name} </h1>
        <h3>Price: {props.price} </h3>
        <h3>Symbol: {props.symbol} </h3>
        <img src={props.icon}/>
    </div>
)
}

export default Coin;