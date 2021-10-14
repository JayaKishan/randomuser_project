import React, { useEffect, useState } from 'react';

import './body.css';


const GetData = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    console.log(data.results[0]);
    setData(data.results[0]);
    setLoadingData(true);
  };

  return (
    <div>
      {loadingData ? (
        <div className="card">
                <img src={data.picture.large}  alt="User" />
                <div className="container">
                    <h4><b>{data.name.first} {data.name.last}</b></h4> 
                    <i class="fa fa-envelope" aria-hidden="true"></i> <a href={"mailto:" + data.email}>{data.email}</a>
                    <p><i class="fa fa-mobile" aria-hidden="true"></i> {data.cell}</p>
                    <p><i class="fa fa-map-marker"></i> {data.location.state}</p>
                </div>
        </div>
      ) : (
        <p>No data</p>
      )}
      <br/>
      <button onClick={() => fetchdata()}>Refresh Data <i className="fa fa-refresh"></i></button>
    </div>
  );
};

export default GetData;