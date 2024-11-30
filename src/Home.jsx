import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  
  const [data, setData] = useState([]);
  const [student, setStudent] = useState([]);

  console.log(data, "datadata");

  useEffect(() => {
  

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:6400/");
      console.log(res, "res");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = (id) =>{
    axios.delete ('http://localhost:6400/delete/'+id)
   .then (res => {
    fetchData();
   })
   .catch (err => console.log(err));
  }

  return<div className='d-flex vh-100 bg-primary  justify-content-center aliignn-items-center'>
    <div className ='w100 bg-white rounded p-3'>
    <h1>Student List</h1>
    <div className='d-flex  justify-content-end'>
      <Link to="/create" className='btn btn-success'>Create +</Link>
    </div>
   

    <table  className='table'>
      <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>-
      </thead>
      <tbody>
       {data.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.Email}</td>
          <td>
            <Link to={`/Read/${item.id}`} className='btn btn-sm btn-info'>Read</Link>
            <Link to={`/edit/${item.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
            <button onClick={ () => handleDelete (item.id)} className='btn btn-sm btn-danger'>Delete</button>
          </td>
        </tr>
       ))}
      </tbody>
    </table>
    </div>
  </div>;
  
};

export default Home;
