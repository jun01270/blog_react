import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
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
  
  
    return {
      <>
      <h3>현재 시간: {time.toLocaleTimeString()}</h3>
      <Router>
        <div>
          <li>
            <link to ="/"> HOME</link>
          </li>
          <li>
            <link to ="/resume"> 이력서</link>
          </li>
          <li>
            <link to ="/portfolio"> 포트폴리오</link>
          </li>
        </div>
      </Router>
      </>

    }
  
}

const Resume = () => {
  return (
    //DOM
  <div>
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
  return <></>
}

const portfolio = () => {
  return <></>
}

export default App;
