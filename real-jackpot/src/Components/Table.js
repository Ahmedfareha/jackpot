import React from 'react';
import Title from "./Title"
import "../Style/table.css"

const table = () => {
    var today = new Date(),
    date = today.getDate();
    var   month = today.getMonth();
        return(
            <div className="row">
            <div className="row col-sm-12 region-table">
                <div className="table-box" style={{width:"100%"}}>
                    <Title title="RECENT RESULTS"></Title>
                    <div className="table-responsive col-lg-12">
                        <div className="table">
                            <thead style={{backgroundColor:"darkred"}}><tr><th>AUGUST</th>
                            <th></th>   <th></th>   <th></th>   
                            <th></th>   <th></th>   <th></th>   
                            <th></th>   <th></th>   <th></th>   </tr></thead>
                            <thead>
                                <tr>
                                    <th  >S.No.</th>
                                    <th style={{width:"30%"}}>Region</th>
                                    <th style={{width:"10%"}}>{date}</th>
                                    <th style={{width:"10%"}}>{date-1}</th>
                                    <th style={{width:"10%"}}>{date-2}</th>
                                    <th style={{width:"10%"}}>{date-3}</th>
                                    <th style={{width:"10%"}}>{date-4}</th>
                                    <th style={{width:"10%"}}>{date-5}</th>
                                    <th style={{width:"10%"}}>{date-6}</th>
                                    <th style={{width:"10%"}}>{date-7}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td  >1</td>
                                    <td style={{width:"30%"}}>Mumbai</td>
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
                                    <td  >2</td>
                                    <td style={{width:"30%"}}>Delhi</td>
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
                                    <td >3</td>
                                    <td style={{width:"30%"}}>Ghaziabad</td>
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
                                    <td  >4</td>
                                    <td style={{width:"30%"}}>Chennai</td>
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
                                    <td  >5</td>
                                    <td style={{width:"30%"}}>Bangalore</td>
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
                                    <td  >6</td>
                                    <td style={{width:"30%"}}>Hyderabad</td>
                                    <td style={{width:"10%"}}>{date}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-1}</td>
                                    <td style={{width:"10%"}}>{date-2}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                    <td style={{width:"10%"}}>{date-3}</td>
                                </tr>

                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default table;