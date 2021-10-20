import React from 'react'
import "./Feature.css"
import FeatureCard from './FeatureCard'
function Feature() {
    return (
        <div className="feature">
            <div className="featureContainer">
                <FeatureCard imgUrl={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"} 
                headText={"No Minimum Order"} descTest={"Order in for yourself or for the group, with no restrictions on order value"}/>
                <FeatureCard imgUrl={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"} 
                headText={"Live Order Tracking"} descTest={"Know where your order is at all times, from the restaurant to your doorstep"}/>
                <FeatureCard imgUrl={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"} 
                headText={"Lightning-Fast Delivery"} descTest={"Experience Swiggy's superfast delivery for food delivered fresh & on time"}/>
            </div>
        </div>
    )
}

export default Feature
