import React from 'react';
import Title from "./Title"
import DashCard from "./dashCard"

const Dashboard = (props) => {
    var today = new Date(),
            date =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+' '+(today.getHours()>=12?'PM':'AM');
    var d=props.dashboardData
    // console.log(d[0].length)
    
    if(d[0][0]!=undefined){
        var dashboardCards = new Array(d.length)
        for(var i=0; i<d[0].length; i++){
            dashboardCards[i] = new Array(3)
            if(d[0][i].region!=undefined)
                dashboardCards[i][0] = d[0][i].region
            if(d[0][i].status!=undefined)
                dashboardCards[i][1] = d[0][i].status
            if(d[0][i].luckyNo!=undefined)
                dashboardCards[i][2] = d[0][i].luckyNo     
            // console.log(dashboardCards[i])
        }
        // console.log(dashboardCards)
        const trails = dashboardCards.map(t=>{
            return(
                <DashCard region={t[0]} number={t[2]} status={t[1]}></DashCard>
            )}
        )
        // console.log(trails)
        return(
            <div className="row dashboard">
                <Title title="LIVE UPDATES" subtitle={date}></Title>
                <div className="row dashboard">
                    {trails}
                </div>
            </div>
        )
    }
//    if(d[0][0]!=undefined){
//        console.log(d[0][0].luckyNo)
//    }
   else return(
        <div className="row dashboard">
            <Title title="LIVE UPDATES" subtitle={date}></Title>
            <div className="row dashboard">
                 LOADING......
            {/* <Card region="Delhi" status="updated" number="007"></Card>
            <Card region="Mumbai" status="not updated"></Card>
            <Card region="Ghaziabad" status="updated" number="723"></Card>
            <Card region="Ghaziabad" status="updated" number="047"></Card>
            <Card region="Ghaziabad" status="updated" number="003"></Card>
            <Card region="Ghaziabad" status="updated" number="158"></Card> */}
            </div>
        </div>
    )
}
export default Dashboard;
