import React from 'react';
import Title from "./Title"
import Card from "./Card"

const Dashboard = () => {
    var today = new Date(),
            date =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getMilliseconds()+' '+(today.getHours()>=12?'PM':'AM');
    console.log(date)
    
    return(
        <div className="row dashboard">
            <Title title="LIVE UPDATES" subtitle={date}></Title>
            <div className="row dashboard">
            <Card region="Delhi" status="updated" number="007"></Card>
            <Card region="Mumbai" status="not updated"></Card>
            <Card region="Ghaziabad" status="updated" number="723"></Card>
            <Card region="Ghaziabad" status="updated" number="047"></Card>
            <Card region="Ghaziabad" status="updated" number="003"></Card>
            <Card region="Ghaziabad" status="updated" number="158"></Card>
            </div>
        </div>
    )
}
export default Dashboard;
