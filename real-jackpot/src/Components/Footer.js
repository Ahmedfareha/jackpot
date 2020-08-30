import React from 'react'

const Footer = (props) => {
    var href = props.click
    return(
        <div style={{padding:"60px",background: "linear-gradient(55deg, black, #03345f)"}}>
            <h5>© Copyright 2020 http://13.49.47.18/ All rights reserved. Developed by Fareha Ahmed and Aayush Rai.</h5>
            <br/>
            <h5><a href={href}>Rules and Guidelines</a></h5>
        </div>
    )
}
export default Footer