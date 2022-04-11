import React from "react";

import NavbarMap from "../navbar/NavbarMap";

const MapLayout = ({ children }) => {
  return (
    <>
      <NavbarMap />
      {children}
    </>
  );
};

export default MapLayout;
