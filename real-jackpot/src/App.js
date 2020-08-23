import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
import Header from './Components/Header'
import Slideshow from "./Components/Slideshow";
import Dashboard from "./Components/Dashboard"
import Marquee from './Components/Marquee';
import Cards from "./Components/Cards";
import Table from "./Components/Table";
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
    slides: slides
  }

  componentDidMount(){
    const axios = require('axios');
    axios({
      method:'post',
      url:'http://13.59.47.18:8081/home/getDataByRegion?region=ghaziabad',
      responseType:'application/json'
    })
    .then(function(res){
      console.log(res);
      // alert(res)
    } )
  }

  render(){
    return (
      <div className="App">
        <Header></Header>
        <div className={s.container}>
          <div className={s.header}></div>
            <div className={s.main}>
              <Slideshow slides={this.state.slides} />
            </div>
        </div>
        <br/><br/>
        <br/>
        <Marquee></Marquee>
        <Dashboard ></Dashboard>
        <Marquee></Marquee>
        <br/><br/><br/>
        <Table></Table>
        <Cards trails={t}></Cards>
      </div>
    );
  }
}

export default App;
