import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div>
          <i class="bi bi-stack"></i>
        </div>

        <div>
          <h3 className="sidebar-header-h3">PJ</h3>
        </div>
        <div>
          <i class="bi bi-arrow-bar-left"></i>
        </div>
      </div>
      <ul className="sidebar-ul">
        <li className="sidebar-li">
          <i className="bi bi-ui-checks-grid"></i>
          <a href="#" className="sidebar-a">
            Dashboard
          </a>
        </li>
        <li className="sidebar-li">
          <i class="bi bi-bar-chart"></i>
          <a href="" className="sidebar-a">
            Analytics
          </a>
        </li>
        <li className="sidebar-li">
          <i class="bi bi-folder-fill"></i>
          <a href="" className="sidebar-a">
            Projects
          </a>
        </li>
        <li className="sidebar-li">
          <i class="bi bi-stopwatch-fill"></i>
          <a href="" className="sidebar-a">
            Tracking
          </a>
        </li>
        <li className="sidebar-li">
          <i class="bi bi-clock-history"></i>
          <a href="" className="sidebar-a">
            History
          </a>
        </li>
        <li className="sidebar-li">
          <i className="bi bi-gear-fill"></i>
          <a href="" className="sidebar-a">
            Settings
          </a>
        </li>
      </ul>

      <div className="newtask">
        <div>
          Create
          <span className="newtask-span">new task</span>
        </div>

        <div>
          <i className="bi bi-plus-circle-fill"></i>
        </div>
      </div>

      <div className="avatar-bottom">
        <div>
          <i class="bi bi-person-circle"></i>
        </div>
        <div className="avatar-p">
          <p>
            Finna A.
            <span className=" text-muted avatar-span">finna@iksg.com</span>
          </p>
        </div>
        <div className="chevron">
          <i class="bi bi-chevron-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
