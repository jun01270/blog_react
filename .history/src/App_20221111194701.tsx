import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [time, setTime] = useState(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  return (
    //DOM
    <div>
      <h3>현재 시간: {time.toLocaleTimeString()}</h3>
      <h3>자기소개</h3>
      <h3>이름: 김성준(21)</h3>
      <h3>학력</h3>
      <>
        <li>덕일전자공업고등학교</li>
        <li>동양미래대학교</li>
      </>
      <h3>경력</h3>
      <>
        <li>SKT</li>
      </>
    </div>
  );
}

const Resume = () => {
  return <></>
}

const portfolio = () => {
  return <></>
}

export default App;
