import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';



const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
}

const logo = {
  width: '110px',
  height: '66px',
  lineHeight: '72px',
  textAlign: 'center',
  margin: '10px',
  fontSize: '18px',
  color: '#fff',
  background: '#00BFFF'
}



const view = () => {
  return (
    <div className="w-full" style={{height: '80px', background: '#87CEEB'}}>
      <ul className="w h-full flex justify-center items-center" style={{backgroundColor:'#87CEFA'}}>
        <li className="flex-1">
          <Link to="/">
            <div style={logo}>Logo</div>
          </Link>
        </li>
        <li className="w-2/6 flex justify-center items-center">
          <Link to="/login">
            <Button type="primary" style={{marginRight:'10px'}}>立即登录</Button>
          </Link>
          <Link to="/register">
            <Button ghost>立即注册</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export {view};
