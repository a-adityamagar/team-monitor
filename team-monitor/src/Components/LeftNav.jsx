import React from "react";
import Dashboard from "../Assets/Images/Dashboard.png";
import Arrow from "../Assets/Images/Arrow-symbol.png";
import Configuration from "../Assets/Images/Configurations.png";
import AppUsages from "../Assets/Images/Group.png";
import Leave from "../Assets/Images/Leave-management.png";
import Logout from "../Assets/Images/Logout.png";
import MyTeam from "../Assets/Images/My-team.png";
import ProofOfWork from "../Assets/Images/Proof-of-work.png";
import Reports from "../Assets/Images/Reports.png";
import { NavLink } from "react-router-dom";

export default function LeftNav() {
  return (
    <div className="nav" >
      <div className="logo-container">
        <h1>TEAM-MONITOR</h1>
        <p>The Complete Team Monitor System</p>
      </div>

      <div className="nav-item-container">
        <ul className="ul-nav-list">
          <li className="left-nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={Dashboard} alt="Dashboard Icon" />
                <span>Dashboards</span>
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/my-team"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={MyTeam} alt="My Team Icon" />
                <span>My Team</span>
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/leave-management"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={Leave} alt="Leave Icon" />
                <span>Leave Management</span>
              </div>

              <div className="nav-link-right">
                <img className="arrow" src={Arrow} alt="Arrow Icon" />
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/proof-of-work"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={ProofOfWork} alt="Proof of Work Icon" />
                <span>Proof Of Work</span>
              </div>
              <div className="nav-link-right">
                <img className="arrow" src={Arrow} alt="Arrow Icon" />
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/app-usages"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={AppUsages} alt="App Usages Icon" />
                <span>App Usages</span>
              </div>

              <div className="nav-link-right">
                <img className="arrow" src={Arrow} alt="Arrow Icon" />
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/configurations"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={Configuration} alt="Configurations Icon" />
                <span>Configurations</span>
              </div>

              <div className="nav-link-right">
                <img className="arrow" src={Arrow} alt="Arrow Icon" />
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={Reports} alt="Reports Icon" />
                <span>Reports</span>
              </div>
              <div className="nav-link-right">
                <img className="arrow" src={Arrow} alt="Arrow Icon" />
              </div>
            </NavLink>
          </li>
          <li className="left-nav-item">
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <div className="nav-link-left">
                <img src={Logout} alt="Logout Icon" />
                <span>Logout</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
