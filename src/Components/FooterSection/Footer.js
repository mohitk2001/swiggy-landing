import React from 'react'
import "./Footer.css"
import FooterBottom from './FooterBottom'
import FooterMiddle from './FooterMiddle'
import FooterTop from './FooterTop'
function Footer() {
    return (
        <div className="footer">
            <FooterTop/>
            <FooterMiddle/>
            <FooterBottom/>
        </div>
    )
}

export default Footer
