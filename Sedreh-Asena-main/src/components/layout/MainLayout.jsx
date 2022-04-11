import React from "react";

import NavBar from "../navbar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default MainLayout;
