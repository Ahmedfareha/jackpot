import React from 'react'
import Header from './Header'
import Title from './Title'
import { propTypes } from 'react-bootstrap/esm/Image'
import ChartsTable from './ChartsTable'
import '../Style/title.css'

const Charts = (props) => {
    console.log(props)
    
    return(
        <div>
            <Header></Header>
            <br/><br/><br/><br/><br/>
            <Title title="CHARTS"></Title>
            <Title title="{props.region}"></Title>
            <ChartsTable></ChartsTable>
        </div>
    )
}
export default Charts