import React from "react";
import GoogleMaps from "./GoogleMaps";


const Dashboard = (props) => {
  // API_KEY= AIzaSyA4WZVgyVFWRwW-JD1-qBojpP5sW9-5Rew

  const handleLogout = () => {
    props.history.push("/login");
  };

  return (
    <div className="dashboard">
      <div className="navdash">
        Welcome !<button onClick={handleLogout}>LogOut</button>
      </div>
      <div >
        <GoogleMaps />
      </div>
      
    </div>
  );
};

export default Dashboard;
