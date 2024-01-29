import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Student(){
  const[students, setStudents] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/students').then(res =>{
      console.log(res);
      setStudents(res.data.students);
    });
  },[])
  var studentDetails = "";

    var studentDetails = students.map( (item, index) => {
      return(
        <tr key = {index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.course}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td><Link to="/" className = "btn btn-success">Edit </Link></td>
          <td><button className = "btn btn-danger">Delete </button></td>
        </tr>
      )

  });
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Student List
                                <Link to ="/" className = "btn btn-primary">Add Student </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Course</td>
                                        <td>Email</td>
                                        <td>Phone No</td>
                                        <td>Edit</td>
                                        <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                      {studentDetails}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student;