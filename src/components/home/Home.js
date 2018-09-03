
import React from 'react'
import './home.css'
//应用介绍的简单组件
export default function Home() {
  return (
    <div className="ani-box">
        <div><h1>电子科技大学</h1></div><hr/>
        <div className="content">
           <p className="page">电子科技大学（University of Electronic Science and Technology of China）简称电子科大，坐落于有“天府之国”之称的成都市，由中华人民共和国教育部直属，位列“211工程”、“985工程”，入选国家“2011计划”、“111计划”、“卓越工程师教育培养计划”，两电一邮成员，设有研究生院，是一所以电子信息科学技术为核心的全国重点大学，被誉为“中国电子类院校的排头兵”。</p>
           <p className="page">根据2018年5月学校官网显示，　学校设有清水河、沙河、九里堤三个校区，占地面积4100余亩，拥有馆藏丰富的现代化数字图书馆和一批设施齐备的现代化体育场馆。现有教职工3800余人，其中专任教师2300余人，教授500余人。</p>
        </div>
        <div className="detail">
            <p><span>主管部门：中华人民共和国教育部</span><span className="one">学校类型：理工</span></p>
            <p><span>硕士点：101个</span><span className="one">学校地区：中国四川成都</span></p>
            <p><span>博士点：66个</span><span className="one">招生电话：028-61831137</span></p>
            <p className="addition">学校地址：成都市高新区（西区）西源大道2006号</p>
            <p className="major">特色专业： 电子科学与技术 <span>电子信息工程</span><span>新能源材料与器件</span><span>传感网技术</span></p>

        </div>
    </div>
  )
}
