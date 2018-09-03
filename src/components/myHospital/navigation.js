import React from 'react';
import './myhospital.css'



class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation">
                <h1>科室导航</h1><hr/>
                <div className="list">
                    <span>口腔科</span>
                    <span>外科</span>
                    <span>妇科</span>
                    <span>内科</span>
                </div>
                <div className="list">
                    <span>血液透析科</span>
                    <span>体检科</span>
                    <span>眼耳鼻喉科</span>
                    <span>急诊科</span>
                </div>
                <div className="list">
                    <span>医学影像科</span>
                    <span>中医康复科</span>
                    <span>精神科</span>
                    <span>预防保健科</span>
                </div>
            </div>
        )
    }
}
export default Navigation