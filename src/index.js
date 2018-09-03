import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
//引入各个路由模块组件
import App from './components/app/App';
import Home from './components/home/Home';
import MyForm from './components/myInfor/MyInfor';
import Register from './components/myInfor/register';;
import Introduction from './components/myHospital/introduction';
import Navigation from './components/myHospital/navigation';
import MyLibrary from './components/myLibrary/MyLibrary';
import MyMap from './components/myMap/MyMap';
import MyCarousel from './components/myCarousel/MyCarousel';
//引入antd库的内置样式
import 'antd/dist/antd.css';
import registerServiceWorker from "../../../../my-app/src/registerServiceWorker";


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute  component={Home}></IndexRoute>
      <Route path='/form' component={MyForm}/>
        <Route path='/form/register' component={Register}/>
      <Route path='/myMap' component={MyMap}/>
      <Route path='/library' component={MyLibrary}/>
        <Route path='/hospital/introduction' component={ Introduction}/>
        <Route path='/hospital/navigation' component={ Navigation}/>
      <Route path='/carousel' component={MyCarousel}/>
    </Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();