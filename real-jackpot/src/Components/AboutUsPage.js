import React from 'react'
import Header from './Header'
import Title from './Title'

const AboutUsPage = () => {
    return(
        <div>
            <Header></Header>
            <Title title="ABOUT US"></Title>
            <div style={{color:"black",padding:"50px",paddingTop:"20px",textAlign:"justified"}}>
            <h1><b style={{color:"black"}}>This is gaming website which is fully sponsored we 
                do not promote gambling.
                <br/><br/>Through this site you will find the latest 
                result of various Regions of India and its neighbouring countries.
                <br/><br/>You can check the latest record and make a prediction 
                of upcoming number.</b></h1><br/>
        </div>
        </div>
    )
}
export default AboutUsPage