import React from 'react';
import image01 from './1.jpg'
import image02 from './2.jpg'
import './mymap.css'


class MyMap extends React.Component{
    render(){

        return(
            <div className="map">

                <span><img src={image01}/>学生宿舍分布图</span>
                <span><img src={image02}/>总体预览图</span>

            </div>
        )
    }
}

export default MyMap