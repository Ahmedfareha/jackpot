import React from 'react';
import Card from './Card'
import "../Style/cards.css"
import Title from './Title';

const Cards = (props) => {
    // console.log("TRAILS", props.trails)
    var n=3;
    // var count=0;
    var flag = props.trails.length%n;
    var size = flag?(Math.floor(props.trails.length/n)+1):(props.trails.length/n);
    var trailArray = new Array(size);
    var j=0;
    for(var i=0; i<trailArray.length; i++){
        trailArray[i] = new Array(n);
        for(var k=0;k<n;k++,j++){
            if(j<props.trails.length)
            trailArray[i][k] = props.trails[j] 
            else break
        } 
    }
    // console.log(trailArray)
    if(trailArray){
        const newTrail = trailArray.map(t=>{
            // if(count===0){
            //     count=count+1
            //     return(
            //         <div className = "row card-row">
            //             <Card info={t[0]} click={props.click}></Card>
            //             <Card info={t[1]} click={props.click}></Card>
            //             <Card info={t[2]} click={props.click}></Card>
            //         </div>
            //     )
            // }
            return (
                <div className = "row card-row">
                    <Card info={t[0]} click={props.click}></Card>
                    <Card info={t[1]} click={props.click}></Card>
                    <Card info={t[2]} click={props.click}></Card>
                    {/* <Card info={t[3]}></Card>
                    <Card info={t[4]}></Card>
                    <Card info={t[5]}></Card> */}
                </div>
            )
        })
        // console.log(newTrail)
        return(
            <div style={{display:"block"}}>
                {newTrail}
            </div>
        )
    }
}

export default Cards;