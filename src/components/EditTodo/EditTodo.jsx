import React from 'react';
import {withRouter,Link,Redirect } from "react-router-dom";
import { message,Layout,List,Form,Input,Icon,Button  } from 'antd';

const {
  Header, Content,
} = Layout;
const FormItem = Form.Item;

 class edittodo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const { GetTodoById,match } = this.props;
    GetTodoById(match.params.id);  
  }
  handleLogout(){
    localStorage.clear();
    this.props.history.push('/')
    window.location.reload()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch ,history,UpdateTodoById,todos} = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          id:todos.id,  
          title:values.name,
          order:values.order,
          completed:true
        }
        UpdateTodoById(data,history);

      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {todos} =this.props;
    
    if (localStorage.getItem('accessToken')) {
    return (
      <div >
      <Layout>
      <Header> 
      Add Todos
      <Button className="btn-logout" type="primary" onClick={this.handleLogout.bind(this)}>Primary</Button>
      </Header>
      <Content> 
      <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message:'' }],
            initialValue:todos.title
            })(
              <Input  type="text" placeholder='Type Todo...' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('order', {
              rules: [{ required: true, message:'' }],
             initialValue:todos.order
            })(
              <Input  type="text" placeholder='Type order...' />
            )}
          </FormItem>
          <FormItem>
          <Button type="primary" htmlType="submit" className="signup-form-button">
             Update
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


export default edittodo = Form.create()(edittodo);

