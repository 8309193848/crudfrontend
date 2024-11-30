import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6400/read/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary  justify-content-center aliignn-items-center">
      <div className="w100 bg-white rounded p-3">

        <h2> Student Detail</h2>
        {student?.length > 0 && (
          <>
          <div className='p-2'>
            <h2>{student[0].id}</h2>
            <h2>{student[0].name}</h2>
            <h2>{student[0].Email}</h2>
            </div>
            <Link to="/" className='btn btn-primary me-2'>Back</Link>
            <Link to={`/edit/${student[0].id}`}className='btn btn-info'>Edit</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Read;
