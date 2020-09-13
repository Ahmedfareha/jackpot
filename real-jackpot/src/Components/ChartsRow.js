import React from 'react'

const ChartsRow = (props) => {
    var today = new Date(),
    date = today.getDate();
    console.log(props.row)
    if(props.row != undefined){
        console.log(props.row)
        const trails = props.row.map(t=>{
            if(t!=undefined){
                if(t=='null')
                t='-'
                return(
                    <td style={{width:"7.5%"}}>{t}</td>
                )
            }
            else{
                return(
                    <td style={{width:"7.5%"}}>number</td>
                )
            }
            
        })
        // console.log(trails)

        return(
            <tr><td style={{textTransform: "capitalize",width:"10%"}}>{props.index}</td>
            {trails}<td></td></tr>
        )
    }

    return (
        <tr><td style={{textTransform: "capitalize",width:"20%"}}>{props.region}</td>
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
export default ChartsRow