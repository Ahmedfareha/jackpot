import React from 'react';
import '../Style/Header.css'
import NavigatorButton from './NavigatorButton';
import menu from "../assets/jackpot5.jpg"

const header = () => {
    return(
        // <div>
            <nav>                
                <div className="row nav">
                    <div className="col-sm-2">
                        <img style={{height:"100%", width:"100%", padding:"50px", cursor:"pointer",}} src={menu} alt="boohoo" className="img-responsive"/>
                    </div>
                    <div className="row col-sm-10">
                        <NavigatorButton name="Home"/>
                        <NavigatorButton name="Charts"/>
                        <NavigatorButton name="Add Game"/>
                        <NavigatorButton name="Leaks"/>
                        <NavigatorButton name="About Us"/>
                        <NavigatorButton name=""/>
                    </div>
                </div>
             </nav>
        // </div>
    )
}

export default header;