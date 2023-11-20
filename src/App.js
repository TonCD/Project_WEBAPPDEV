import './App.scss';
import React, {Fragment} from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { routes } from './routes';
import DefaultComponent from './components/Default/Default';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
