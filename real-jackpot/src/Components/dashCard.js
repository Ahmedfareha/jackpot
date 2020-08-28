import React from 'react';
import "../Style/card.css"

const dashCard = (props) => {
    // console.log(props)
    if(props.status==='update'){
        return(
            <div className="dashboard-card">
                <div className="dashbaord-card-title">
                    <h3>{props.region}</h3>
                </div>
                <div className="dashboard-card-status">
                    <div className="false-loader">
                    <h1>{props.number}</h1>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="dashboard-card">
            <div className="dashbaord-card-title">
                <h3>{props.region}</h3>
            </div>
            <div className="dashboard-card-status">
                <div className="loader">
                <h1>7</h1>
                {/* <h1><div class="loader"></div></h1> */}
                </div>
            </div>
        </div>
    )
}
export default dashCard