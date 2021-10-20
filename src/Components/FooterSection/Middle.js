import React from 'react'
import "./Middle.css"
function Middle({data}) {
    
    return (
        <div className="middle">
            {
                data.map((val,index)=>{
                    return (<a href="#" key={index}>{val}</a>)
                })
            }
        </div>
    )
}

export default Middle
