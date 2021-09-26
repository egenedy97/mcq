import React from 'react';
import { Result } from 'antd'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


const FinalResult = () => {
    const { user, result } = useSelector((state) => state);
    const message = "Thanks " + user + " your Score is " + result ;
   
    return (
        <div>
            <Result
                status="success"
                title= {message}
                subTitle="thanks for taking my Quiz"
                extra={[
                    <Link to='/' key="primary" >Restart Again</Link>,
                ]}
            />
        </div>
    )   
}

export default FinalResult;