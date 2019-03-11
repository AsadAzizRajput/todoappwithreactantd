import React from 'react';
import { message,Layout,Form,Input,Button  } from 'antd';
import {withRouter} from "react-router-dom";
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
    const {dispatch} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          title:values.name,
          order:values.order,
          completed:false
        }
        dispatch(CreateTodo(data))
          // axios({
          //   url: 'http://todo-backend-rails.herokuapp.com',
          //   method: 'POST',
          //   data,
          //   headers: {
          //     'Accept':'application/json',
          //     'Content-Type': 'application/json'
          // }
          // }).then((response) => {
          //   if(response.data){
          //     message.success("Added Successfully");
          //     this.props.history.replace('/')
          //   }
          //   else{
          //     message.error("Error Adding Todos");
          //   }
          //   console.log(response.data);
            
          // }).catch((error)=>{
          //       console.log(error);
          // })
      }
    });
  }

  render() {
    
    const { getFieldDecorator } = this.props.form;
    return (
      <div >     
      <Layout>
      <Header>Add Todos </Header>
      <Content> 
      <Form onSubmit={this.handleSubmit} className="layoutForm">
        
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message:'' }],
            })(
              <Input  type="text" placeholder='Type Todo...' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('order', {
              rules: [{ required: true, message:'' }],
            })(
              <Input  type="text" placeholder='Type order...' />
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
}



const WrappedForm = Form.create()(AddTodo);

export default withRouter(WrappedForm);


