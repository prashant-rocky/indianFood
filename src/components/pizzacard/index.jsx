
const PizzaCard = ({title, body ,price , img, addtocart}) => {
    return(
        <div className="cardBox my-2 pb-3">
            <div className="imageBox" style={{backgroundImage : `url(${img})`}}></div>
            <div className="dataBox p-3">
                <h3>{title}</h3>
                <p>{body}</p>
                <h3 className="text-primary d-inline">RS. {price}</h3>
                <button className="myBtn float-end" onClick={addtocart} >+Add</button>
            </div>
        </div>
    )
}
export default PizzaCard;