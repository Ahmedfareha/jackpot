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
import slide1 from "./assets/slide01.jpeg";
import slide2 from "./assets/slide02.jpeg";
import slide3 from "./assets/slide03.jpeg";
import slide4 from "./assets/slide04.jpeg";
// import slide5 from "./assets/slide05.jpeg";
import "./Style/custom.css";

const s = {
  container: "row screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

const slides = [slide1, slide2, slide3, slide4];

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
    chartsData: [6]
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

    axios({
      method:'get',
      url:'http://13.59.47.18:8081/home/getChartData?region=ghaziabad',
      responseType: 'application/json'
    })
    .then((res)=>{
      console.log(res.data.Data)
      this.setState({
        chartsData: res.data.Data
      })
    })
    // console.log(this.state.chartsData)
  } 

  openChart = () =>{
    console.log("clicked")
    // your axios call here
   localStorage.setItem("Row0", this.state.chartsData[0].chartData)
   localStorage.setItem("Row1", this.state.chartsData[1].chartData)
   localStorage.setItem("Row2", this.state.chartsData[2].chartData)
   localStorage.setItem("Row3", this.state.chartsData[3].chartData)
   localStorage.setItem("Row4", this.state.chartsData[4].chartData)
   localStorage.setItem("Row5", this.state.chartsData[5].chartData)
   localStorage.setItem("Row6", this.state.chartsData[6].chartData)
   localStorage.setItem("Row7", this.state.chartsData[7].chartData)
   localStorage.setItem("Row8", this.state.chartsData[8].chartData)
   localStorage.setItem("Row9", this.state.chartsData[9].chartData)
   localStorage.setItem("Row10", this.state.chartsData[10].chartData)
   localStorage.setItem("Row11", this.state.chartsData[11].chartData)
   localStorage.setItem("Row12", this.state.chartsData[12].chartData)
   localStorage.setItem("Row13", this.state.chartsData[13].chartData)
   localStorage.setItem("Row14", this.state.chartsData[14].chartData)
   localStorage.setItem("Row15", this.state.chartsData[15].chartData)
   localStorage.setItem("Row16", this.state.chartsData[16].chartData)
   localStorage.setItem("Row17", this.state.chartsData[17].chartData)
   localStorage.setItem("Row18", this.state.chartsData[18].chartData)
   localStorage.setItem("Row19", this.state.chartsData[19].chartData)
   localStorage.setItem("Row20", this.state.chartsData[20].chartData)
   localStorage.setItem("Row21", this.state.chartsData[21].chartData)
   localStorage.setItem("Row22", this.state.chartsData[22].chartData)
   localStorage.setItem("Row23", this.state.chartsData[23].chartData)
   localStorage.setItem("Row24", this.state.chartsData[24].chartData)
   localStorage.setItem("Row25", this.state.chartsData[25].chartData)
   localStorage.setItem("Row26", this.state.chartsData[26].chartData)
   localStorage.setItem("Row27", this.state.chartsData[27].chartData)
   localStorage.setItem("Row28", this.state.chartsData[28].chartData)
   localStorage.setItem("Row29", this.state.chartsData[29].chartData)
   localStorage.setItem("Row30", this.state.chartsData[30].chartData)
   
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
        <Header aboutClick={this.openAboutUs} chartsClick={this.openChart}></Header>
        {/* <SideMenu></SideMenu> */}
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
          <Cards trails={t} click={this.openChart} chartsData = {this.state.chartsData}></Cards>
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
