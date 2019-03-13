import React from 'react';
import {
  withRouter,
  Redirect
} from "react-router-dom";
import {
  Form, Icon, Input, Button, Checkbox, Spin, message
} from 'antd';
import './Login.css';


const axios = require('axios');
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    // const body ={
    //   usernameOrEmail: "InjazPos143",
    //   password: "Injaz99922"
    // }

    this.props.form.validateFields((err, values) => {
      if (!err) {
       localStorage.setItem('accessToken',"adas3asdasd");
       window.location.reload()
    }
      });
  
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { props } = this;
 
    if (localStorage.getItem('accessToken')) {
      return (
        <Redirect
          to={{
            pathname: "/alltodo"
          }}
        />
      )
    }
 else{
      return (
        <React.Fragment>
          <div className="login-header">
              Login Here
         
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem >
              {getFieldDecorator('email', {
                rules: [ {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input id="email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                placeholder="Email"  />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input.Password id="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                 type="password" placeholder="Password"  />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember Me</Checkbox>
              )}
              <a className="login-form-forgot" href="#">Forgot Password</a>
              <Button type="primary" htmlType="submit" className="login-form-button loginbtn" >
                Login Here
              </Button>
              Or <a href="#">Register Now</a>
            </FormItem>
          </Form>

        </React.Fragment>
      )

              }

  }

}


const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm);