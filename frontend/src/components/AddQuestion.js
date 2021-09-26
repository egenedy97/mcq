import React from 'react' ; 
import { Form, Input, Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {addQuestion} from '../actions/index'


const AddQuestion =()=>{
    const dispatch = useDispatch() ; 
    const history = useHistory() ; 
    const onFinish = (values) => {
        const QuestionAnswers = []
        QuestionAnswers.push(values.choiceOne) ;
        QuestionAnswers.push(values.choiceTwo) ;
        QuestionAnswers.push(values.choiceThree) ;
        QuestionAnswers.push(values.choiceFour) ;

        const questionObject = {
            title:values.Question , 
            answers : QuestionAnswers , 
            correct: values.correctAnswer
        }
        if(QuestionAnswers.indexOf(values.correctAnswer) <= -1)
        {
            alert('There is an error in correct')
        }
        else{
            dispatch(addQuestion(questionObject)) ; 
            history.push('/') ; 
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <Card title="Add New question">
    <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Question"
      name="Question"
      rules={[{ required: true, message: 'Please input your Question!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="choiceOne"
      name="choiceOne"
      rules={[{ required: true, message: 'Please input your choiceOne!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="choiceTwo"
      name="choiceTwo"
      rules={[{ required: true, message: 'Please input your choiceTwo!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="choiceThree"
      name="choiceThree"
      rules={[{ required: true, message: 'Please input your choiceThree!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="choiceFour"
      name="choiceFour"
      rules={[{ required: true, message: 'Please input your choiceFour!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="correctAnswer"
      name="correctAnswer"
      rules={[{ required: true, message: 'Please input your correctAnswer!' }]}
    >
      <Input />
    </Form.Item>



    <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Card>
    );
}

export default AddQuestion ; 

