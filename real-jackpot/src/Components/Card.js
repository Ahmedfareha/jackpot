import React from 'react'
import "../Style/cards.css"

const Card = (props) => {
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4" id={props.info.key}>
            <div className="card-body">
            <h4 className="card-title">{props.info.location}</h4>
            <h1 className="card-text">{props.info.name} </h1>
            <div className="card-text win-number">
                update
                <div className="left"><h2>022</h2></div>
                <div className="right"><h2>780</h2></div>
            </div>
            <h4 className="card-button"  onClick={()=>props.click(props.info.location)}>{props.info.loading}</h4>
            </div>
        </div>
    )
}
export default Card