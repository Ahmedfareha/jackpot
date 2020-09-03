import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/Header'
import SideMenu from './Components/SideMenu'
import Slideshow from "./Components/Slideshow";
import Title from "./Components/Title"
import Dashboard from "./Components/Dashboard"
import Marquee from './Components/Marquee';
import Cards from "./Components/Cards";
import Table from "./Components/Table";
import AboutUs from "./Components/AboutUs"
import Footer from "./Components/Footer"
import slide1 from "./assets/slideNo1.jpg";
import slide2 from "./assets/slideNo2.jpg";
import slide3 from "./assets/slideNo3.jpg";
import slide4 from "./assets/slideNo4.jpg";
import slide5 from "./assets/slideNo5.jpg";
import "./Style/custom.css";

const s = {
  container: "row screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

const slides = [slide1, slide2, slide3, slide4, slide5];

const t = [
  {
    "key":0,
    "name":"Time 2345",
    "location":"Mumbai",
    "summary":"I've found that luck is quite predictable. If you want more luck, take more chances.",
    "difficulty":"hard",
    "loading":"Show Charts"
  },
  {
    "key":3,
    "name":"Time 2345",
    "location":"Delhi",
    "summary":"I've found that luck is quite predictable. If you want more luck, take more chances.",
    "difficulty":"hard",
    "loading":"Show Charts"
  },
  {
    "key":0,
    "name":"Time 2345",
    "location":"Gaziabad",
    "summary":"I've found that luck is quite predictable. If you want more luck, take more chances.",
    "difficulty":"hard",
    "loading":"Show Charts"
  },
  {
    "key":1,
    "name":"Time 3555",
    "location":"Faridabad",
    "summary":"“Winning isn’t everything, but it beats anything that comes in second. Bam!!!!!!!!!”",
    "difficulty":"hard",
    "loading":"Show Charts"
  },
  {
    "key":2,
    "name":"Time 2345",
    "location":"Moradabad",
    "summary":"I've found that luck is quite predictable. If you want more luck, take more chances.",
    "difficulty":"hard",
    "loading":"Show Charts"
  },
  {
    "key":3,
    "name":"Time 2345",
    "location":"Bangalore",
    "summary":"I've found that luck is quite predictable. If you want more luck, take more chances.",
    "difficulty":"hard",
    "loading":"Show Charts"
  },
]

class App extends Component{
  
  state = {
    slides: slides,
    dashboardData: [6],
    tableData: [6],
  }

  componentDidMount = () =>{
    axios({
      method:'post',
      url:'http://13.59.47.18:8081/home/getDataByRegion?region=ghaziabad',
      responseType:'application/json'
    })
    .then((res)=>{
      // console.log(res);
    })

    axios({
      method:'get',
      url:'http://13.59.47.18:8081/home/getLiveData',
      responseType:'application/json'
    })
    .then((res)=>{
      // console.log(res)
      this.setState({
        dashboardData: [res.data.Data]
      })
    })

    axios({
      method:'get',
      url:'http://13.59.47.18:8081/home/getHomeTableData',
      responseType: 'application/json'
    })
    .then((res)=>{
      // console.log(res.data.Data)
      this.setState({
        tableData: res.data.Data
      })
    })
  } 

  openChart = () =>{
    console.log("clicked")
    // your axios call here
  //  localStorage.setItem("pageData", "Data Retrieved from axios request")
   // route to new page by changing window.location
   window.open("http://13.59.47.18/charts", "_blank") //to open new page 
  //  window.open("http://localhost:3000/charts", "blank")       
  }

  openGuidelines = () =>{
   window.open("http://13.59.47.18/guidelines", "_blank") //to open new page 
  //  window.open("http://localhost:3000/guidelines", "blank")       
  }

  openAboutUs = () =>{
    window.open("http://13.59.47.18/aboutUs", "_blank") //to open new page 
    // window.open("http://localhost:3000/aboutUs", "blank")       
   }

  render(){
    var today = new Date(),
            date =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+' '+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+' '+(today.getHours()>=12?'PM':'AM');
    
    return (
      <div className="App">
        <Header aboutClick={this.openAboutUs}></Header>
        <SideMenu></SideMenu>
        <div className="content-page">
          <div className="container-fluid">
          <div className={s.container}>
            <div className={s.header}></div>
              <div className={s.main}>
                <Slideshow slides={this.state.slides} />
              </div>
          </div>
          <br/><br/><br/>
          <Marquee></Marquee>
          <br></br>
          <Title title="LIVE UPDATES" subtitle={date}></Title>
          <Dashboard dashboardData={this.state.dashboardData}></Dashboard>
          <Marquee></Marquee>
          <br/><br></br>
          <Title title="RECENT RESULTS"></Title>
          <Table tableData = {this.state.tableData}></Table>
          <br></br>
          <Title title="WIN LOGS AND ANALYTICS"></Title>
          <Cards trails={t} click={this.openChart}></Cards>
          <AboutUs></AboutUs>
          <Footer click={this.openGuidelines}></Footer>
          </div>
        </div>
        
        {/* <div className={s.container}>
          <div className={s.header}></div>
            <div className={s.main}>
              <Slideshow slides={this.state.slides} />
            </div>
        </div>
        <br/><br/><br/>
        <Marquee></Marquee>
        <br></br>
        <Title title="LIVE UPDATES" subtitle={date}></Title>
        <Dashboard dashboardData={this.state.dashboardData}></Dashboard>
        <Marquee></Marquee>
        <br/><br></br>
        <Title title="RECENT RESULTS"></Title>
        <Table tableData = {this.state.tableData}></Table>
        <br></br>
        <Title title="WIN LOGS AND ANALYTICS"></Title>
        <Cards trails={t} click={this.openChart}></Cards>
        <AboutUs></AboutUs>
        <Footer click={this.openGuidelines}></Footer> */}
      </div>
    );
  }
}

export default App;
