import React from 'react';
import Title from "./Title"
import "../Style/table.css"

const table = () => {
    var today = new Date(),
    date = today.getDate();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    var monthsShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    var monthNumber = today.getMonth();
    var month = months[monthNumber]
    var monthShort = monthsShort[monthNumber]
    console.log(month)

        return(
            <div className="row">
            <div className="row col-sm-12 region-table">
                <div className="table-box" style={{width:"100%"}}>
                    <Title title="RECENT RESULTS"></Title>
                    <div className="table-responsive col-lg-12">
                        <div className="table">
                            <thead style={{backgroundColor:"darkred"}}><tr><th>{month}</th>
                            <th></th>   <th></th>   <th></th>   
                            <th></th>   <th></th>   <th></th>   
                            <th></th>   <th></th>   <th></th>   </tr></thead>
                            <thead>
                                <tr>
                                    
                                    <th style={{width:"20%"}}>Region</th>
                                    <th style={{width:"10%"}}>{date} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-1} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-2} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-3} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-4} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-5} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-6} {monthShort}</th>
                                    <th style={{width:"10%"}}>{date-6} {monthShort}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td style={{width:"20%"}}>Mumbai</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td></td></tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td style={{width:"20%"}}>Delhi</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td></td>
                                    </tr>
                                <tr>
                                    {/* <td></td> */}
                                    <td style={{width:"20%"}}>Ghaziabad</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td></td>
                                    </tr>
                                {/* <tr>
                                    <td></td>
                                    <td style={{width:"20%"}}>Chennai</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td style={{width:"20%"}}>Bangalore</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td style={{width:"20%"}}>Hyderabad</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                </tr> */}

                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default table;