import React, { Component, PropTypes } from 'react';
import './myLibrary.css'
class Search extends Component{
    constructor(props){
        super(props)
    }
    search=()=>{
       var searchName=this.refs.searchName.value.trim()
        if(searchName===''){
            return
        }
        this.props.refreshName(searchName)
    }
    render(){
        return(
           <div className="search-name">
               <input id="title" type="text" placeholder="enter the name you search"
                      ref='searchName'/>
               <button className="btn" onClick={this.search}>搜索</button>
           </div>
        )
    }
}
Search.propTypes = {
    refreshName: PropTypes.func.isRequired
};
export default Search