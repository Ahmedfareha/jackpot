import React from 'react';
import "../Style/title.css"

const Title = (props) => {
    console.log(props.title)
    return(
        <div className="row">
            <div className="col-lg-12 title-text">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    )
}
export default Title;