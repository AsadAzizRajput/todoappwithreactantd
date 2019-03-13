import React from 'react';
import { message,Layout,Form,Input,Button  } from 'antd';
import {
  withRouter,
  Redirect
} from "react-router-dom";
import { CreateTodo } from '../../redux/actions'
import './AddTodo.css';
const {
  Header, Content,
} = Layout;

const FormItem = Form.Item
const axios = require('axios');


 class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch ,history,CreateTodo} = this.props
    console.log(history);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let todo = {
          "title":values.name,
          "order":values.order,
          "completed":false
        }     
          CreateTodo(todo,history)
      }
    });
  }
  handleLogout(){
    localStorage.clear();
    this.props.history.push('/')
    window.location.reload()
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const {todo} = this.props;
    console.log(todo);

    if (localStorage.getItem('accessToken')) {
      return (
        <div >     
        <Layout>
        <Header>Add Todos
        <Button className="btn-logout" type="primary" onClick={this.handleLogout.bind(this)}>Primary</Button>
           </Header>
        <Content> 
        <Form onSubmit={this.handleSubmit} className="layoutForm">
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message:'' }],
              })(
                <Input  type="text" id="name" placeholder='Type Todo...' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('order', {
                rules: [{ required: true, message:'' }],
              })(
                <Input  type="text" id="order" placeholder='Type order...' />
              )}
            </FormItem>
            <FormItem>
            <Button type="primary" htmlType="submit" className="signup-form-button">
               Add
            </Button>
            </FormItem>
         </Form>  
      </Content>
      </Layout>
        </div>
      );
    }
 else{
  return (
    <Redirect
      to={{
        pathname: "/"
      }}
    />
  )
  }
}
}



const WrappedForm = Form.create()(AddTodo);

export default withRouter(WrappedForm);


