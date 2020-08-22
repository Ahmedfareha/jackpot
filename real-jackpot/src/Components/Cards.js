import React from 'react';
import "../Style/cards.css"

const Cards = (props) => {
    console.log("TRAILS", props.trails)
    var count;var n=3;
    var flag = props.trails.length%n;
    var size = flag?(Math.floor(props.trails.length/3)+1):(props.trails.length/3);
    var trailArray = new Array(size);
    var j=0;
    for(var i=0; i<trailArray.length; i++){
        trailArray[i] = new Array(3);
        for(var k=0;k<3;k++,j++){
            if(j<props.trails.length)
            trailArray[i][k] = props.trails[j] 
            else break
        } 
    }
    console.log(trailArray)
    if(trailArray){
        const newTrail = trailArray.map(t=>{
            return (
                <div className = "row card-row">
                    <div className="card col-sm-12 col-md-6 col-lg-4" id={t[0].key}>
                        {/* <img className="card-img-top" src={t.imgSqSmall.img1} alt="a" /> */}
                        <div className="card-body">
                        <h1 className="card-title">{t[0].location}</h1>
                        <h4 className="card-text">{t[0].name} </h4>
                        <h2 className="card-button">{t[0].loading}</h2>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-6 col-lg-4" id={t[1].key}>
                        {/* <img className="card-img-top" src={t.imgSqSmall.img1} alt="a" /> */}
                        <div className="card-body">
                        <h1 className="card-title">{t[1].location}</h1>
                        <h4 className="card-text">{t[1].name} </h4>
                        <h2 className="card-button">{t[1].loading}</h2>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md-12 col-lg-4" id={t[2].key}>
                        {/* <img className="card-img-top" src={t.imgSqSmall.img1} alt="a" /> */}
                        <div className="card-body">
                        <h1 className="card-title">{t[2].location}</h1>
                        <h4 className="card-text">{t[2].name} </h4>
                        <h2 className="card-button">{t[2].loading}</h2>
                        </div>
                    </div>
                </div>
            )
        })
        console.log(newTrail)
        return(
            <div style={{display:"block"}}>
                {newTrail}
            </div>
        )
    }
    if(props.trails){
        const trail= props.trails.map(t => {
            count=count+1;
            console.log(count)
            // console.log(trail)
        return(
            <div className = "row">
            <div className="card col-sm-12" id={t.key}>
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