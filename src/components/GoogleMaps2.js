import axios from "axios";
import React,{useState, useEffect} from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {

  const[response,setResponse]=useState([])

  useEffect(()=>{
    axios.get("https://605a159ab11aba001745d85c.mockapi.io/spot")
    .then((res) => setResponse(res.data));
  },[]);

  console.log(response)
  const lat = response.map((item) => +item.lat)
  //console.log(lat)
  const long = response.map((item) => +item.long);
  //console.log(long)

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.158455, lng: 27.601442 }}
    >
      {setTimeout(function(){response.map((item)=>(<Marker key={response.id}
        position={{lat: +response.lat, lng: +response.long}}/>))},3000)
        
      }
      {
        <div>{response.id}</div>
      }
    </GoogleMap>
  );
  
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const API_KEY = "AIzaSyA4WZVgyVFWRwW-JD1-qBojpP5sW9-5Rew";

export default function GoogleMap2() {
  return (
    <div style={{ width: "90vw", height: "65vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
