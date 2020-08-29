import React from 'react';
import "../Style/title.css"

const Title = (props) => {
    return(
        <div className="row">
            <div className="col-lg-12 title-text">
                <h1><b>{props.title}</b></h1>
                <h3>{props.subtitle}</h3>
                <hr></hr>
            </div>
        </div>
    )
}
export default Title;