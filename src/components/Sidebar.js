import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import Mytask from './mytask';
import Projects from './projects';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
 
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block  bglight sidebar collapse" style={{ backgroundcolor: '#222932 !important'}}>
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
        <li class="">
          <Link to="dashboard/" class="nav-link nav-item">
            <span data-feather="home"></span>
            <i class="bi bi-globe2"></i> Dashboard
          </Link>
        </li>
        <li class="nav-item">
          <Link to="mytask/" class="nav-link">
            
            <span data-feather="file"></span>
            <i class="bi bi-list-ul"></i> My Tasks
          </Link>
        </li>
        <li class="nav-item">
          <Link to="projects" class="nav-link">
            <span data-feather="shopping-cart"></span>
            <i class="bi bi-x-diamond-fill"></i> Projects
          </Link>
        </li>
        <li class="nav-item">
          <Link to="clients" class="nav-link">
            <span data-feather="shopping-cart"></span>
            <i class="bi bi-people-fill"></i> Clients
          </Link>
        </li>
        <li class="nav-item">
          <Link to="Reports" class="nav-link">
            <span data-feather="shopping-cart"></span>
            <i class="bi bi-floppy-fill"></i> Reports
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/Signout" class="nav-link">
            <span data-feather="shopping-cart"></span>
            <i class="bi bi-stop-circle-fill"></i> Signout
          </Link>
        </li>
        </ul>

   
      </div>
    </nav>


  )
}

export default Sidebar
