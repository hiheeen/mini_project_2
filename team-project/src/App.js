import logo from "./logo.svg";
import "./App.css";

import GlobalStyles from "./GlobalStyles"; //전역에 css 적용하는 js 컴포넌트
import { useState, useEffect } from "react";
import Container from "./frontend/component/Container";
import Start from "./frontend/startpage/Start";
import Result from "./frontend/resultpage/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Progress from "./frontend/component/Progress";

function App(props) {
  return (
    <div>
      <GlobalStyles />
      {/* <Progress /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path="container" element={<Container />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
