import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router';
import axios from "axios";
const FormItem = Form.Item;
import image from "./1.jpg";
import "./myinfor.css"


class NormalLoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeUsername(event){
        let username = event.target.value;
        this.setState({
            username:username
        });
    }
    changePassword(event){
        let password = event.target.value;
        this.setState({
            password:password
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //const axios = require('axios');
        axios.post('/zyc/login?username='+this.state.username+'&password='+this.state.password)
            .then( (response) =>{
                console.log(response);
                if(response.data.code===200){
                    alert(`欢迎${this.state.username}`)
                }else{
                    alert(response.data.msg)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const style={
            marginLeft:200 ,
            backgroundImage:'url(' + image + ')',
            width:700,
            height:500

        }
        return (
            <div className="form" style={style}>
              <Form onSubmit={this.handleSubmit} className="login-form" >
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input  type="text" name="username"  onChange={this.changeUsername.bind(this)}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input type="text" name="password"  onChange={this.changePassword.bind(this)}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Link to="/form/register" className="login-form-forgot" >Forgot password</Link>
                    <div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    </div>
                    <div>Or <Link to="/form/register">register now!</Link></div>
                </FormItem>
              </Form>
            </div>
        );
    }
}

const MyForm = Form.create()(NormalLoginForm);

export default MyForm;
