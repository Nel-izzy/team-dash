import React from "react";
import Details from "./Details";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <div className="row index">
      <div className="col-md-2 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-8 details">
        <Details />
      </div>
    </div>
  );
};

export default Index;
