import React from 'react'
import "./FooterMiddle.css"
import { cityName } from './FooterData'
import Middle from './Middle'
function FooterMiddle() {
    return (
        <div className="footerMiddle">
            <h3>WE DELIVER TO</h3>
            <div className="dataWrapped">
                <Middle data={cityName.col1}/>
                <Middle data={cityName.col2}/>
                <Middle data={cityName.col3}/>
                <Middle data={cityName.col4}/>
            </div>
        </div>
    )
}

export default FooterMiddle
