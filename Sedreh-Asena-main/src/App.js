import React from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Main from "./containers/mainPage/Main";
const App = () => {
  return (
    <>
      <MainLayout>
        <Main />
      </MainLayout>
    </>
  );
};

export default App;
