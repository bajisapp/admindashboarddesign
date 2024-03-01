import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dashboard from './components/dashboard';
import mytask from './components/mytask';
import projects from './components/projects';

import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  return (
   
      <Router forceRefresh={true}>
          <Header />
          <div className="container-fluid">
          <div className="row">
          <Sidebar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Switch>
                <Route exact path="/dashboard" component={dashboard} />
                <Route path="/mytask" component={mytask} />
                <Route path="/projects" component={projects} />

                {/* Add more routes for other components as needed */}
              </Switch>
          </div>  
        </div>
        </div>
      </Router>

  );
}

export default App;
