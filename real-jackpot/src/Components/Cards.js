import React from 'react';
import "../Style/cards.css"

const Cards = (props) => {
    console.log("TRAILS", props.trails)
    if(props.trails){
        const trail= props.trails.map(t => {
            // if(t.key%2==0){
                // return(
                //     <div className = "row card-row">
                //         <div className="card col-sm-12 col-lg-12" id={t.key}>
                //             <div className="card-body">
                //                 <h1 className="card-title">{t.location}</h1>
                //                 <h4 className="card-text">{t.name} </h4>
                //                 <h2 className="card-button">{t.loading}</h2>
                //             </div>
                //         </div>
                //     </div>
                // )
            // }
        return(
            <div className = "row card-row">
            <div className="card col-sm-12 col-lg-12" id={t.key}>
                {/* <img className="card-img-top" src={t.imgSqSmall.img1} alt="a" /> */}
                <div className="card-body">
                    <h1 className="card-title">{t.location}</h1>
                    <h4 className="card-text">{t.name} </h4>
                    <h2 className="card-button">{t.loading}</h2>
                </div>
            </div>
            </div>
        )
        })
        return(
        // <div className = "row card-row">
        <div>
            {trail}
        </div>
        )
    }
}

export default Cards;