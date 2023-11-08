import React from "react";
import "./App.css";
// import { Discover } from "./components";
// import Layout from "./components/template/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { RouteList } from "./routes";

function App() {
  return (
    <>
      {/* <Layout> */}
      <Routes>
        {RouteList.map((route, i) => (
          <Route
            key={`route-${i}`}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
      {/* </Layout> */}
    </>
  );
}

export default App;
