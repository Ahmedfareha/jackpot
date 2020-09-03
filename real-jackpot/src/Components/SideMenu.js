import React from 'react'
import "../Style/sideMenu.css"
import nav from "../assets/nav.jpg"
import home from "../assets/home.jpg"
import charts from "../assets/charts.jpg"
import add from "../assets/add.jpg"
import leak from "../assets/leak.jpg"
import about from "../assets/about.jpg"

const SideMenu = () => {
    return(
        <div className="left-side-menu">
            <div className="slimScroolDiv">
                <div className="slimscroll-menu" >
                    <div className="sidebar-menu mm-active">
                        <ul className="metismenu mm-show" id="side-menu">
                            <li className="menu-title"><img src={nav}></img><h2><b>Navigation</b></h2></li>
                            <hr/>
                            <li className="mm-active">
                                <a href="" className="waves-effect waves-light active">
                                    <h3>
                                    <i className="mdi mdi-view-dashboard float-left"><img className="home-img" src={home}></img></i>
                                    <span className="badge badge-success badge-pill float-right">{'>'}</span>
                                    <span><b className="homeB">Dashboard</b></span>
                                    </h3>
                                </a>
                            </li>
                            <li className="mm-active">
                                <a href="" className="waves-effect waves-light active">
                                    <h3><i className="mdi mdi-view-dashboard float-left"><img src={charts}></img></i>
                                    <span className="badge badge-success badge-pill float-right">{'>'}</span>
                                    <span><b>Charts</b></span>
                                    </h3>
                                </a>
                            </li>
                            <li className="mm-active">
                                <a href="" className="waves-effect waves-light active">
                                    <h3><i className="mdi mdi-view-dashboard float-left"><img src={add}></img></i>
                                    <span className="badge badge-success badge-pill float-right">{'>'}</span>
                                    <span><b>Add Game</b></span>
                                    </h3>
                                </a>
                            </li>
                            <li className="mm-active">
                                <a href="" className="waves-effect waves-light active">
                                    <h3><i className="mdi mdi-view-dashboard float-left"><img src={leak}></img></i>
                                    <span className="badge badge-success badge-pill float-right">{'>'}</span>
                                    <span><b>Leaks</b></span>
                                    </h3>
                                </a>
                            </li>
                            <li className="mm-active">
                                <a href="" className="waves-effect waves-light active">
                                    <h3><i className="mdi mdi-view-dashboard float-left"><img src={about}></img></i>
                                    <span className="badge badge-success badge-pill float-right">{'>'}</span>
                                    <span><b>About Us</b></span>
                                    </h3>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>


            </div>

        </div>
    )
} 
export default SideMenu