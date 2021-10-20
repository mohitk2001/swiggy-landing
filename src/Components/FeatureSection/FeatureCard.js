import React from 'react'
import "./FeatureCard.css"
function FeatureCard({imgUrl,headText,descTest}) {
    return (
        <div className="FeatureCard">
            <img src={imgUrl} alt="pc" />
            <h1>{headText}</h1>
            <p>{descTest}</p>
        </div>
    )
}

export default FeatureCard
