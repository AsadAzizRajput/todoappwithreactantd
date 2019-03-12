import React from 'react';
import {
  message,
  Layout,
  List,
  Icon,
  Col,
  Row,
  Button
} from 'antd';
import {withRouter,Link } from "react-router-dom";

import './AllTodo.css';

const {
  Header, Content,
} = Layout;

class AllTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state={AllTodos:[]}
    this.delete = this.handleDelete.bind(this);
    this.handleNavigateToEdit = this.handleNavigateToEdit.bind(this);
  }

  componentDidMount(){
      const { GetTodos } = this.props;
      GetTodos();
    }
    handleDelete(todoId){
      const {DeleteTodo,history} = this.props
      DeleteTodo(todoId.id,history)
     
    }
  render() {
    const {todos} = this.props;
    console.log(todos);
    return (
      <div >     
      <Layout>
      <Header>All Todos <span className="add-todo-btn"><Link to="/addtodo">+</Link></span></Header>
      <Content> 
    <List
      bordered
      dataSource={todos}
      renderItem={(item,index) => (
        <List.Item key={index}>   

        <Row>
          <Col span={18}>
          <Link to={`/edittodo/${item.id}`}>{item.title}</Link>
          </Col>
           <Col span={6}>
          </Col> 
          <Col span={6}>
          <Button type="danger"  onClick={this.handleDelete.bind(this, item)} >Delete</Button>
          </Col>
        </Row> 
             
      </List.Item>)}  
    /></Content>
    </Layout>
      </div>
    );
  }
}


export default withRouter(AllTodo)