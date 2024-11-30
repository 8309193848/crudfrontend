
import axios from 'axios';
import React, {  useEffect, useState} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const [student, setStudent] = useState([]);
    const [values, setValues] = useState({});
    console.log('student', values, student)
    const navigagate = useNavigate()
  
    useEffect(() => {
      axios
        .get("http://localhost:6400/read/" + id)
        .then((res) => {
          console.log(res);
          setStudent(res.data);
          setValues({
            name: res.data[0].name,
            email: res.data[0].Email
          })
        })
        .catch((err) => console.log(err));
    }, []);

    // const [values,  setValues]= useState({
    //     name:student?.length > 0 ? student[0].name : " ",
    //     email:student?.length > 0 ? student[0].Email : " ",
    //   })
    //   console.log('Values', values)

    const handleUpdate = (event) =>{
        event.preventDefault();
        axios.put(' http://localhost:6400/update/'+id,values)
        .then(res => {
            console.log(res)
            Navigate('/')
        }).catch(err => console.log(err));

    }
  return (
    <div className='d-flex vh-100 bg-primary  justify-content-center aliignn-items-center'>
        <div className ='w100 bg-white rounded p-3'>
        <form onSubmit={ handleUpdate}>
           <h2> Update Student</h2>
           <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' value={values.name}
            
            onChange={e => setValues({...values, name:  e.target.value})}
            />
           </div>
           <div className='mb-2'>
           <label htmlFor="">Email</label>
           <input type="email" placeholder='Enter Email' className='form-control' value={values.email}
            onChange={e => setValues({...values, email:  e.target.value})}
           />
           </div>
           
            <button className='btn btn-success'>Update</button>
        </form>
        </div>
    </div>
  )
} 

export default Update
