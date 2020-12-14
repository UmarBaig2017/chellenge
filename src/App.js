import React, { useEffect, useState } from 'react';
import './App.css';
import moment from "moment"
import Dash from "./dash"
import CountDown from 'ant-design-pro/lib/CountDown';
import { Statistic, Card, Row, Col } from 'antd';
const { Countdown } = Statistic;
function App() {
  const [time, setTime] = useState(new Date());
  
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  useEffect(() => {
    // setTime(new Date())
  });
  return (
    <div className="App">
      {/* <Dash time={time}/> */}
     
      <CountDown style={{ fontSize: 20 }}  target={deadline} />
      <Row gutter={16}>
      {/* <Col span={12}>
      <Countdown title="Countdown" value={deadline}  />
    </Col> */}
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="DD :HH:mm" />
    </Col>
  </Row>
    </div>
  );
}

export default App;
