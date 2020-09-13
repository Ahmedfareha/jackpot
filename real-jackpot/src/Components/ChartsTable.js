import React from 'react';
import ChartsRow from "./ChartsRow"
import "../Style/table.css"

const ChartsTable = (props) => {
    console.log(props);
    var Row0 = localStorage.getItem("Row0").split(',');
    var Row1 = localStorage.getItem("Row1").split(',');
    var Row2 = localStorage.getItem("Row2").split(',');
    var Row3 = localStorage.getItem("Row3").split(',');
    var Row4 = localStorage.getItem("Row4").split(',');
    var Row5 = localStorage.getItem("Row5").split(',');
    var Row6 = localStorage.getItem("Row6").split(',');
    var Row7 = localStorage.getItem("Row7").split(',');
    var Row8 = localStorage.getItem("Row8").split(',');
    var Row9 = localStorage.getItem("Row9").split(',');
    var Row10 = localStorage.getItem("Row10").split(',');
    var Row11= localStorage.getItem("Row11").split(',');
    var Row12= localStorage.getItem("Row12").split(',');
    var Row13= localStorage.getItem("Row13").split(',');
    var Row14= localStorage.getItem("Row14").split(',');
    var Row15= localStorage.getItem("Row15").split(',');
    var Row16= localStorage.getItem("Row16").split(',');
    var Row17= localStorage.getItem("Row17").split(',');
    var Row18= localStorage.getItem("Row18").split(',');
    var Row19= localStorage.getItem("Row19").split(',');
    var Row20= localStorage.getItem("Row20").split(',');
    var Row21= localStorage.getItem("Row21").split(',');
    var Row22= localStorage.getItem("Row22").split(',');
    var Row23= localStorage.getItem("Row23").split(',');
    var Row24= localStorage.getItem("Row24").split(',');
    var Row25= localStorage.getItem("Row25").split(',');
    var Row26= localStorage.getItem("Row26").split(',');
    var Row27= localStorage.getItem("Row27").split(',');
    var Row28= localStorage.getItem("Row28").split(',');
    var Row29= localStorage.getItem("Row29").split(',');
    var Row30= localStorage.getItem("Row30").split(',');
    console.log(Row0)
    console.log(Row1)
    console.log(Row2)
    console.log(Row3)
    console.log(Row4)
    console.log(Row5)
    console.log(Row6)
    console.log(Row7)
    console.log(Row8)
    console.log(Row9)
    console.log(Row10)
    console.log(Row11)
    if(Row0!=undefined)
    {
        var rows=  new Array(31);
        rows[0] = Row0;
        rows[1]=Row1
        rows[2]=Row2
        rows[3]=Row3
        rows[4]=Row4
        rows[5]=Row5
        rows[6]=Row6
        rows[7]=Row7
        rows[8]=Row8
        rows[9]=Row9
        rows[10]=Row10
        rows[11]=Row11
        rows[12]=Row12
        rows[13]=Row13
        rows[14]=Row14
        rows[15]=Row15
        rows[16]=Row16
        rows[17]=Row17
        rows[18]=Row18
        rows[19]=Row19
        rows[20]=Row20
        rows[21]=Row21
        rows[22]=Row22
        rows[23]=Row23
        rows[24]=Row24
        rows[25]=Row25
        rows[26]=Row26
        rows[27]=Row27
        rows[28]=Row28
        rows[29]=Row29
        rows[30]=Row30
        console.log(Row24)
        for(var i=0; i<31; i++){
            if(rows[i].length!=12){
                for(var j=rows[i].length; j<12; j++){
                rows[i][j] = 'null';
                }
            }
        }
        
        // console.log(rows[0]);
    }
    
    var today = new Date(),
    date = today.getDate();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    var monthsShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    var monthNumber = today.getMonth();
    var month = months[monthNumber]
    var monthShort = monthsShort[monthNumber]
    var index=0;
    if(Row0!=undefined){
        const trails = rows.map(t=>{
            index++;
            return(
                <ChartsRow row={t} index={index}></ChartsRow>
            )
        })
    
        return(
            <div className="row">
            <div className="row col-sm-12 region-table">
                <div className="table-box" style={{width:"100%"}}>
                    
                    <div className="table-responsive col-lg-12">
                        <div className="table">
                            {/* <thead style={{backgroundColor:"burlywood"}}>
                                <tr><th>{month}</th>
                                <th></th><th></th><th></th>
                                <th></th><th></th><th></th>
                                <th></th><th></th><th></th><th></th><th></th></tr>
                            </thead> */}
                            <thead>
                                <tr>
                                    <th style={{width:"10%"}}>S.No.</th>
                                    <th style={{width:"7.5%"}}>{date} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-1} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-2} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-3} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-4} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-5} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-6} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-7} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-8} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-9} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-10} {monthShort}</th>
                                    <th style={{width:"7.5%"}}>{date-11} {monthShort}</th>
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

    return(
        <div className="row">
        <div className="row col-sm-12 region-table">
            <div className="table-box" style={{width:"100%"}}>
                <div className="table-responsive col-lg-12">
                    <div className="table">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>L</td><td>O</td><td>A</td><td>D</td><td>I</td>
                                <td>N</td><td>G</td><td>.</td><td>.</td><td>.</td>
                            {/* LOADING..... */}
                            </tr>                            
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ChartsTable;