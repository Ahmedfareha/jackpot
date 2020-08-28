import React from 'react';
import Title from "./Title"
import Row from "./Row"
import "../Style/table.css"

const table = (props) => {
    var today = new Date(),
    date = today.getDate();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    var monthsShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    var monthNumber = today.getMonth();
    var month = months[monthNumber]
    var monthShort = monthsShort[monthNumber]

    const trails = props.tableData.map(t=>{
        return(
            <Row region={t.region} top10LuckyNo={t.top_10_lucky_no}></Row>
        )
    })

    return(
        <div className="row">
        <div className="row col-sm-12 region-table">
            <div className="table-box" style={{width:"100%"}}>
                <Title title="RECENT RESULTS"></Title>
                <div className="table-responsive col-lg-12">
                    <div className="table">
                        <thead style={{backgroundColor:"darkred"}}>
                            <tr><th>{month}</th>
                            <th></th><th></th><th></th>
                            <th></th><th></th><th></th>
                            <th></th><th></th><th></th><th></th><th></th></tr>
                        </thead>
                        <thead>
                            <tr>
                                <th style={{width:"20%"}}>Region</th>
                                <th style={{width:"8%"}}>{date} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-1} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-2} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-3} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-4} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-5} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-6} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-7} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-8} {monthShort}</th>
                                <th style={{width:"8%"}}>{date-9} {monthShort}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {trails}
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default table;