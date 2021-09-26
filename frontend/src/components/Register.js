import { Form, Input, Button , Card  , notification} from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {setUserName , getQuestions } from '../actions/index' ; 
import questionService from '../service/questionsAPI' ; 
import axios from 'axios';
import './Register.css'

const arr = [{
  id: 1,
  title: 'this is the first Question',
  Answers: ['asd', 'fasdfasd', 'asdf', 'asdfaf'],
  correct: 'asd',
},
{
  id: 2,
  title: 'this is the second Question',
  Answers: ['car', 'dog', 'asdf', 'asdfaf'],
  correct: 'dog',
},
{
  id: 3,
  title: 'this is the first Question',
  Answers: ['cat', 'fasdfasd', 'asdf', 'asdfaf'],
  correct: 'cat',
},
{
  id: 4,
  title: 'this is the first Question',
  Answers: ['cat', 'ddd', 'asdf', 'asdfaf'],
  correct: 'ddd',
},
{
  id: 5,
  title: 'this is the first Question',
  Answers: ['cat', 'fasdfasd', 'asdf', 'asdfaf'],
  correct: 'asdfaf',
}] ;


const Register = () => {
  const dispatch= useDispatch() ; 
  const openNotificationWithIcon = (type , name) => {
    notification[type]({
      message: 'Welcome' + name,
      description:
        'this quiz is starting now.',
    });
  };
  
  const history = useHistory(); 
  const onFinish = (values) => {
    dispatch(setUserName(values.username)) ; 
    openNotificationWithIcon('success' , values.username) ;
    dispatch(getQuestions(arr))
    history.push('/quiz') ; 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <Card className='registerCard' title="MCQ Task" hoverable>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="student"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="Please input your username" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Start Quiz
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};


export default Register ; 

