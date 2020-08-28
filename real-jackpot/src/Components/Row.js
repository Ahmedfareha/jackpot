import React from 'react'

const Row = (props) => {
    var today = new Date(),
    date = today.getDate();
    // console.log(props.top10LuckyNo)

    if(props.top10LuckyNo != undefined){
        const trails = props.top10LuckyNo.map(t=>{
            return(
                <td style={{width:"8%"}}>{t.lucky_no}</td>
            )
        })
        // console.log(trails)

        return(
            <tr><td style={{width:"20%"}}>{props.region}</td>
            {trails}<td></td></tr>
        )
    }

    return (
        <tr><td style={{width:"20%"}}>{props.region}</td>
            <td style={{width:"10%"}}>0{date}</td>
            <td style={{width:"10%"}}>0{date-1}</td>
            <td style={{width:"10%"}}>0{date-2}</td>
            <td style={{width:"10%"}}>0{date-3}</td>
            <td style={{width:"10%"}}>0{date-1}</td>
            <td style={{width:"10%"}}>0{date-2}</td>
            <td style={{width:"10%"}}>0{date-3}</td>
            <td style={{width:"10%"}}>0{date-3}</td>
            <td style={{width:"10%"}}>0{date-3}</td>
            <td style={{width:"10%"}}>0{date-3}</td>
            <td></td></tr>
    )
}
export default Row