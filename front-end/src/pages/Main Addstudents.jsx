import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Addstudents(){

    const [inputErrorList, setInputErrorList] = useState({})
    const [student, setStudent]=useState({
        name: '',
        email: '',
        phone: '',
        course: '',
    });

    const handleInput = (e) =>{
        e.persist();
        setStudent({...student,[e.target.name]: e.target.value });

    }
    const saveStudent = (e) =>{
        e.preventDefault();

        const data = {
            name: student.name,
            email: student.email,
            phone: student.phone,
            course: student.course,
        }
        axios.post('http://localhost:8000/api/students', data)
        .then((res =>{
            alert(res.data.message);
        })).catch(function (error){
            if(error.response){
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                }

                if(error.response.status === 500){
                    alert(error.response)
                }
            }
        });
    }
    return(
        <div>
            <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Create Student List
                                <Link to ="/Student" style={ {margin: '0px 0px 0px 1150px'} } className = "btn btn-danger">Back</Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <h1>Now you ar watching the Student List</h1>
                            <form onSubmit={saveStudent}> 
                            <div className="mb-3">
                                    <label for="Name" className="form-label">Name</label>
                                    <input type="text" className="form-control"value={student.name} onChange={handleInput} />
                                    <span className="text-danger">{inputErrorList.name}</span>
                                </div>
                                <div className="mb-3">
                                    <label for="Email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp"/>
                                    <span className="text-danger">{inputErrorList.email}</span>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="Phone No" className="form-label">Phone No</label>
                                    <input type="text" className="form-control" id="Phone No"/>
                                    <span className="text-danger">{inputErrorList.phone}</span>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleSelect" className="form-label">Select Course</label>
                                    <select className="form-select" id="exampleSelect">
                                    <option selected>Open this select menu</option>
                                    <option value="PHP">PHP</option>
                                    <option value="React Js">React Js</option>
                                    <option value="Bootstrap">Bootstrap</option>
                                    <option value="C++">C++</option>
                                    <option value="Python">Python</option>
                                    <option value="Laravel">Laravel</option>
                                    <option value="ASP.net">ASP.net</option>
                                    <option value="JAVA">JAVA</option>
                                    <option value="Javascript">Javascript</option>
                                    </select>
                                    <span className="text-danger">{inputErrorList.course}</span>
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Addstudents;