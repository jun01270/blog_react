import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import { Layout, Menu, Button } from 'antd';
import { Header } from "antd/lib/layout/layout";
import  Guestbook  from "./guestbook";

function App() {
  // const login = useGoogleLogin({
  //   onSuccess: async (codeResponse) => {
  //     const { code } = codeResponse
  //     console.log(codeResponse),
  //     await axios.post('http://localhost:5000/auth/google', {
  //       code,
  //     });
  //   },
  //   flow: 'auth-code',
  // });

  // const [time, setTime] = useState(new Date());
  // const timer = setInterval(() => {
  //   setTime(new Date());
  // }, 1000);
  
  // useEffect(() => {
  //   clearInterval(timer);
  // }, [timer]);

  return (
    <Layout className="layout">
    <Router>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={[{
                key: 1,
                label: <Link to="/">Home</Link>,
              }, {
                key: 2,
                label: <Link to="/resume">이력서</Link>,
              },{
                key: 3,
                label: <Link to="/portfolio">포트포리오</Link>,
              },{
                key: 4,
                label: <Link to="/Practice">글쓰기</Link>
              }, {
                key: 5,
                label: <Link to="/guestbook">방명록</Link>
              }]}
            />
          </Header>
            <Layout.Content style={{ padding: '0 50px', height: "300px" }}>
            <div className="site-layout-content" style={{height: 200}}>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element = {<Resume />} />
              <Route path="/" element={<Home />} />
              <Route path="/practice" element = {<Practice />} />
              <Route path="/guestbook" element={<Guestbook />} />
              
            </Routes>
            </div>
          </Layout.Content>
        </Router>
        </Layout>
  );   }

const Home = () => {
  return <a className="HOME"
  href="https://jun01270.github.io/blog_react/">홈페이지</a>;
  // <h3>현재 시간: {time.toLocaleTimeString()}</h3>
}

const Resume = () => {
  return (
    //DOM
  <div>
      <h1 style = {{ }}>자기소개</h1>
      <h3>이름: 김성준(21)</h3>
      <h3>학력</h3>
      <ul>
        <li>덕일전자공업고등학교</li>
        <li>동양미래대학교  컴퓨터소프트웨어공학과 </li>
      </ul>
      <h3>경력</h3>
      <>
        <li>SKT</li>
      </>
    </div>
    );

}

const Portfolio = () => {
  return <><h2>포트폴리오</h2>
  <li style={{ margin: "20px" }}><a href="https://jun01270.github.io/blog_react/">React로 만든 자기소개 블로그</a></li> 
  
  </>
}

const Practice =() => {
  return <div id="third_page">
    <h2>글쓰는 페이지</h2>
    <div>
    <input id = "title" placeholder="제목을 입력하세요" ></input>
    <p/>
    <textarea id = "context" placeholder="내용을 입력하세요"></textarea>
     <Button type="primary" id="Pbutton" >글쓰기 버튼</Button>
     </div>
  </div>
}


export default App;
