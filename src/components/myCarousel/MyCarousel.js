/**
 * 轮播图效果组件
 */
import React from 'react';
import { Carousel } from 'antd';
import img01 from './image1.jpg'
import img02 from './image2.jpg'
import img03 from './image3.jpg'
import img04 from './image4.jpg'
import img05 from './image5.jpg'
import img06 from './image6.jpg'
import './myCarousel.css'

class MyCarousel extends React.Component {

  render() {
    return (
      <div className="carousel-wrap">
        <Carousel autoplay>
            <div><img src={img01} /></div>
            <div><img src={img02} /></div>
            <div><img src={img03} /></div>
            <div><img src={img04} /></div>
            <div><img src={img05} /></div>
            <div><img src={img06} /></div>
        </Carousel>
      </div>
    )
  }
}

export default MyCarousel
