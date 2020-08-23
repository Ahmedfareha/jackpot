import React from 'react';
import "../Style/card.css"

const dashCard = (props) => {
    if(props.status==='updated'){
        return(
            <div className="dashboard-card">
                <div className="dashbaord-card-title">
                    <h4>{props.region}</h4>
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
                <h4>{props.region}</h4>
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