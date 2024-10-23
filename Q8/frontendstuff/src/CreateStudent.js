import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from 'axios';

function CreateStudent() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    //Sends data from the form to the backend, then returning the user to the main page
    function handleSubmit (event) {
      event.preventDefault();
      axios.post("http://localhost:8081/create", {name, email})
      .then(res => {
        console.log(res);
        navigate('/');
      }).catch(err => console.log(err));
    }

    return (
        //Form to input data
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter name" className="form-control" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter email" className="form-control" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent