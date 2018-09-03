import React from 'react';
import './myLibrary.css'
import axios from "axios";
class Loading extends React.Component{
    constructor(props){
        super(props)

    }
    changeFile(){
        let file = this.refs.resource.files[0]
        this.setState({
            file:file
        });
    }
    changeTitle(event){
        let title = event.target.value;
        this.setState({
            title:title
        });
    }
    changeFirstAuthor(event){
        let firstAuthor = event.target.value;
        this.setState({
            firstAuthor:firstAuthor
        });
    }
    changeOtherAuthor(event){
        let otherAuthor = event.target.value;
        this.setState({
            otherAuthor:otherAuthor
        });
    }
    changeCommunicateAuthor(event){
        let communicateAuthor = event.target.value;
        this.setState({
            communicateAuthor:communicateAuthor
        });
    }
    changeType(event){
        let type = event.target.value;
        this.setState({
            type:type
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let file=this.state.file,
            title=this.state.title,
            firstAuthor=this.state.firstAuthor,
            otherAuthor=this.state.otherAuthor,
            communicateAuthor=this.state.communicateAuthor,
            type=this.state.type,
            formdata=new FormData();
        formdata.append("file",file);
        formdata.append("title",title);
        formdata.append("firstAuthor",firstAuthor);
        formdata.append("otherAuthor",otherAuthor);
        formdata.append("communicateAuthor",communicateAuthor);
        formdata.append("type",type);


        if(file===""||title===""){
            return
        }else{
            const url="/zyc/paper/save?file="+this.state.file+"&title="+this.state.title+"&firstAuthor="+this.state.firstAuthor+"&otherAuthor="+this.state.otherAuthor+"&communicateAuthor="+this.state.communicateAuthor+"&type="+this.state.type

            axios.post(url,formdata,{
                method:"post",
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
                .then((response)=> {
                    console.log(response);
                })
                .catch( (error)=> {
                    console.log(error);

                });

        }


    }
    render(){
        return(
            <form className="loading"  onSubmit={this.handleSubmit} >
                <p>选择文件：<input type="file" name="file" ref="resource" onChange={this.changeFile.bind(this)}/></p>
                <p>论文题目：<input type="text" name="title" onChange={this.changeTitle.bind(this)}/></p>
                <p>第一作者：<input type="text" name="firstAuthor" onChange={this.changeFirstAuthor.bind(this)}/></p>
                <p>其他作者：<input type="text" name="otherAuthor" onChange={this.changeOtherAuthor.bind(this)}/></p>
                <p>通讯作者：<input type="text" name="communicateAuthor" onChange={this.changeCommunicateAuthor.bind(this)}/></p>
                <p>文章类型：<input type="text" name="type" onChange={this.changeType.bind(this)}/></p>
                <button type="submit" >提交</button>
            </form>
        )
    }
}
export default Loading