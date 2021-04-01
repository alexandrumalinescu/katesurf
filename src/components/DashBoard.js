import React from "react";
//import GoogleMaps from "./GoogleMaps";
import GoogleMaps2 from './GoogleMaps2';
import '../Css/GoogleMaps.css'

const Dashboard = (props) => {
  // API_KEY= AIzaSyA4WZVgyVFWRwW-JD1-qBojpP5sW9-5Rew

  const handleLogout = () => {
    props.history.push("/login");
  };

  // function getPosition(){
  //     const succes = (position)=>{
  //       console.log(position);
  //     }
  //     const errorCall = (error)=>{
  //       console.log(error);
  //     }
  //     navigator.geolocation.getCurrentPosition(succes,errorCall);
  // }

  // getPosition()

  return (
    <div className="dashboard">
      <div className="navdash">
        Welcome !<button onClick={handleLogout}>LogOut</button>
      </div>
      <div className='googlemaps'>
        <GoogleMaps2 />
      </div>
      
    </div>
  );
};

export default Dashboard;
