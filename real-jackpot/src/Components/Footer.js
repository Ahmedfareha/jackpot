import React from 'react'

const Footer = (props) => {
    var href = props.click
    return(
        <div style={{padding:"60px",background: "linear-gradient(55deg, #022442, #022442)"}}>
            <h5>© Copyright 2020 http://13.49.47.18/ All rights reserved.</h5>
            <br/>
            <h5><a style={{cursor:"pointer",textDecoration:"underline"}} onClick={href}>Rules and Guidelines</a></h5>
        </div>
    )
}
export default Footer