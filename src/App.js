import './App.css';
import React from 'react';
import Main from './MainPage/Main';
import Login_Page from './login/Login_Page';
import Join_Page from './join_members/Join_Page';
import SchoolMain from './School/SchoolMain.js';
import SchoolPost from './School/SchoolPost.js';
import Mypage from './Mypage/Mypage.js';
import { Routes, Route,Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login_Page />} />
          <Route path="/join_members" element={<Join_Page />} /> 
          <Route path='/school' element={<SchoolMain/>}></Route>
          <Route path='/school/postSchoolFunding' element={<SchoolPost/>}/>
          <Route path='/Mypage' element={<Mypage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;