import React from 'react'
import Header from './Header'
import Title from './Title'
import { propTypes } from 'react-bootstrap/esm/Image'
import ChartsTable from './ChartsTable'
import '../Style/title.css'
import '../Style/charts.css'

const Charts = (props) => {
    console.log(props)
    
    return(
        <div>
            <Header></Header>
            <br/><br/><br/><br/><br/>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <br class="small-screen"></br>
            <Title title="CHARTS"></Title>
            <Title title="{props.region}"></Title>
            <ChartsTable></ChartsTable>
        </div>
    )
}
export default Charts