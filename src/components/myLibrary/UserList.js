import React, { Component, PropTypes } from 'react';
import ajax from './ajax';
import axios from"axios";
class UserList extends Component{
    constructor(props){
        super(props);
        this.state={
            firstView:true,
            loading:false,
            titles:null,
            error:null
        }
    }
    //当接收到新的props时，会调用--->发送ajax请求
    componentWillReceiveProps(nextProps){
        let searchName=nextProps.searchName
        if(searchName===""){
            return
       }else{
            console.log('发送ajax请求',searchName)
           const url=`/zyc/paper/findByTitle?title=${searchName}`
            this.setState({ firstView: false, loading: true });
           axios.post(url)
               .then( (response)=> {
                   console.log(response);
                   this.setState({firstView:false,loading:false, titles:response.data});


               })
               .catch( (error)=> {
                   console.log(error);
                   this.setState({ loading: false, error: error.toString() })
               });

       }
    }
    render(){

        if(this.state.firstView){
            return <h2>请输入关键字进行搜索</h2>
        }else if(this.state.loading){
            return <h2>Loading result .....</h2>
        }else if(this.state.error){
            return <h2>{this.state.error}</h2>
        }else {
            return (
                <div className="userList">
                   {
                        this.state.titles.map((paper) => (
                            <li className="titleList" key={paper.title}>
                                <p><span>{paper.title}</span></p>
                            </li>
                        ))
                    }
                </div>

            )
        }
    }
}
UserList.propTypes = {
    searchName: PropTypes.string.isRequired
};
export default UserList