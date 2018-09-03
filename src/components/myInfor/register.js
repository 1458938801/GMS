import { Form, Input,  Button } from 'antd';
import React from "react";
import axios from "axios";
const FormItem = Form.Item;
class RegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
        };
    }


    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();

        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    /*changeUsername(event){
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
    }*/
    handleSubmit = (e) => {
        e.preventDefault();
        //const axios = require('axios');
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('/zyc/register?username='+values.username+'&password='+values.password)
                    .then(function (response) {
                        console.log(response);
                        if(response.data.code===200){
                            alert(response.data.msg);
                            window.history.back(-1);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);

                    });
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
      return (
        <Form onSubmit={this.handleSubmit} >
          <FormItem
            {...formItemLayout}
            label="UserName"
          >
            {getFieldDecorator('username', {
                rules: [{
                    required: true, message: 'Please input your userName',
                }],
            })(
                <Input id="username" type="text" name="username"   />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Password"
        >
            {getFieldDecorator('password', {
                rules: [{
                    required: true, message: 'Please input your password!',
                },
                    {
                   validator: this.validateToNextPassword,
                }],
            })(
                <Input id="password"  type="password" name="password"   />
            )}
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Confirm Password"
        >
            {getFieldDecorator('confirm', {
                rules: [{
                    required: true, message: 'Please confirm your password!',
                }, {
                    validator: this.compareToFirstPassword,
                }],
            })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">注册/重置密码</Button>
        </FormItem>
      </Form>
      )
    }
}
const Register = Form.create()(RegisterForm);

export default Register;