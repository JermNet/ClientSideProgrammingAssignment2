//Dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Student() {
    
    const [student, setStudent] = useState([])
    
    //Gets data from the api and puts it into the variable setStudent
    useEffect(() => {
        axios.get('http://localhost:8081')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    }, [])

    //Deletes the selected row of data
    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/student/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
    }

    return (
        //I know there are probably better ways to do this but this whole question has been a big learning experience so this content is formated like this for ease
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add Data</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //Puts the data into the table
                            student.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-secondary ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student