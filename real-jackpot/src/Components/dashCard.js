import React from 'react';
import "../Style/card.css"

const dashCard = (props) => {
    // console.log(props)
    if(props.status==='update'){
        return(
            <div className="dashboard-card">
                <div className="dashbaord-card-title">
                    <h2 style={{textTransform: "capitalize"}}>{props.region}</h2>
                </div>
                <div className="dashboard-card-status">
                    <div className="false-loader">
                    <h1>{props.number}</h1>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.status==='wait'){
        return(
            <div className="dashboard-card">
                <div className="dashbaord-card-title">
                    <h2 style={{textTransform: "capitalize"}}>{props.region}</h2>
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
    return(
        <div></div>
    )
}
export default dashCard