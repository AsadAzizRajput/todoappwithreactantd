import React from 'react';
import { message,Layout,List,Icon  } from 'antd';
import {withRouter,Link } from "react-router-dom";


import './AllTodo.css';

const {
  Header, Content,
} = Layout;

class AllTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state={AllTodos:[]}
    console.log(this.props);
  }

  componentDidMount(){
      const { GetTodos } = this.props;
      GetTodos();
    }
  
  
 
  render() {
    return (
      <div >     
      <Layout>
      <Header>All Todos <span className="add-todo-btn"><Link to="/addtodo">+</Link></span></Header>
      <Content> 
    <List
      bordered
      dataSource={this.state.AllTodos}
      renderItem={(item,index) => (<List.Item key={index}>{item.title}
             />
      </List.Item>)}  
    /></Content>
    </Layout>
      </div>
    );
  }
}


export default withRouter(AllTodo)