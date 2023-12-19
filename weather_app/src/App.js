// import './App.css';
// import React, { useEffect, useState } from "react";
// import Weather from './Components/Weather'
// import API from './Key'
// function App() {
//   const [lat, setLat] = useState("12.9314177");
// const [long, setLong] = useState("80.198654");
// const [data, setData] = useState([]);
// useEffect(() => {
//   const fetchData = async () => {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     await fetch(`${API.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API.REACT_APP_API_KEY}`)
//     .then(res => res.json())
//     .then(result => {
//       setData(result)
//     });
//   }
//   fetchData();
// }, [lat, long]);
//   return (
//     <div className="App">
//       {
//         (typeof data.main != 'undefined') ? <Weather weatherData={data}/>: <div></div>
//       }
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Datas from "./Components/Datas";
import ShowData from "./Components/ShowData";

export default function App() {
  const [name, SetName] = useState("");
  const [Age, Setage] = useState("");
  const [school, Setschool] = useState("");
  const [College, Setcollege] = useState("");
  const [List, Setlist] = useState([Datas]);

  useEffect(()=>{
    
    let filetereddata = Datas.filter((data) => {
      console.log({name,  Age, school, College})
      return (name === "" && Age === "" && school === "" && College === "" ? Datas : data.name.includes(name) && data.Age.toString().includes(Age) && data.school.includes(school) && data.College.includes(College))
    })
    Setlist(filetereddata)
  }, [name, Age, school, College])

  return (
    <div className="App">
      <input
        placeholder="Name"
        onChange={(e) => {
          SetName(e.target.value);
        }}
        name="name"
      />
      <input
        placeholder="Age"
        onChange={(e) => {
          Setage(e.target.value);
        }}
        name="Age"
      />
      <input
        placeholder="School Name"
        onChange={(e) => {
          Setschool(e.target.value);
        }}
        name="school"
      />
      <input
        placeholder="College Name"
        onChange={(e) => {
          Setcollege(e.target.value);
        }}
        name="College"
      />
      {List.length > 0 ? <ShowData Datas={List} /> : <h1>No data found</h1>}
    </div>
  );
}
