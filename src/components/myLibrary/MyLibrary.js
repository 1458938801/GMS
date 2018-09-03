import React from 'react';
import Search from './Search';
import UserList from './UserList';
import Loading from './load';
import './myLibrary.css'
class MyLibrary extends React.Component{
    constructor(props){
        super(props);
            this.state={
                searchName:''
            }
    }
    refreshName=(searchName)=>{
        this.setState({searchName})
    }
    render(){
        return(
            <div className="myLibrary">
                <section className="librarySearch">
                    <h1 >电子科技大学图书馆</h1>
                    <Loading/>
                    <Search refreshName={this.refreshName}/>
                </section>
                <UserList searchName={this.state.searchName}/>
            </div>
        )
    }
}
export default MyLibrary