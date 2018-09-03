import React from 'react';
import img01 from './img01.jpg';
import './myhospital.css'

class Introduction extends React.Component{
    render(){
        return(
            <div className="hospitalIntroduction">
                <h1>医院介绍</h1><hr/>
                <p className="Introduction-content">电子科技大学医院始建于1956年，到今天已经走过 60年的风风雨雨。从医务室到现代化的医院，一路栉风沐雨、披荆斩棘，发展之路步履坚实，医者仁心传承不息。半个世纪的救死扶伤，三辈人的薪火相传，一代代“成电人”，用真挚的爱呵护着师生、患者的安康。</p>
                <img src={img01}/>
            </div>
        )
    }
}
export default Introduction