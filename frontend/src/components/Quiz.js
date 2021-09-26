import React from 'react';
import { Form , Button, Radio, Card, Space } from 'antd';
import { useDispatch } from 'react-redux';
import {setResult} from '../actions/index'
import { useHistory } from 'react-router';

const questions = [
    {
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
    }
];

const Quiz = () => {
    const dispatch = useDispatch(); 
    const history = useHistory();
    const onFinish = (values) => {
        var score = 0 ; 
        questions.forEach(element => {
            if(element.correct === values[element.id])
            {
                score = score+1 ;
            }
        });
        dispatch(setResult(score)) ; 
        history.push('/result')
        
    };

   
    return (
        <Card title="Quiz">
            <Form
                name="basic"

                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                
                {questions.map((question) => {
                   return  <Form.Item name={ question.id } key={question.id} label={question.id+'. '+question.title }
                   rules={[{ required: true, message: 'Question  '+question.id +' is required' }]}
                   >
                   <Radio.Group>
                       <Space direction="vertical">
                       <br/>

                           {question.Answers.map((answer, index) => {
                               return <Radio value={answer} key={index}>{answer}</Radio>
                           })}
       
                       </Space>
                   </Radio.Group>
               </Form.Item>
                   
                })}


                <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit Quiz
                    </Button>
                </Form.Item>
            </Form>

        </Card>
    );
}


export default Quiz;

