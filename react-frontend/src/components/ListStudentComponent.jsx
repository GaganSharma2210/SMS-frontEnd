import React, {useEffect,useState } from 'react'
import {listStudent,deleteStudent} from '../services/StudentService'
import { useNavigate } from 'react-router-dom'

const ListStudentComponent = () => {

    const [students, setStudents]=useState([])
    const [deleteMsg, setDeleteMsg]=useState([])
    const navigator=useNavigate();

    useEffect(() => {
        setDeleteMsg("");
        getAllEmployee();
    },[])


    function getAllEmployee(){
        listStudent().then((response)=>{
            console.log(response.data)
            setStudents(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
 

    function addStudent(e){
        e.preventDefault();
        navigator('/addUpdateStudent')
    }
    function logout(e){
        e.preventDefault();
        navigator('/')
    }

    function deleteRecord(id){
            //console.log(id);
            deleteStudent(id).then((response)=>{
                //console.log(response.data);
                setDeleteMsg(response.data);
                getAllEmployee();
            }).catch(error=>{
                console.error(error);
            })
    }

    function editRecord(id){
        console.log(id);
        navigator(`/editStudent/${id}`)
    }

     return (
    
        <div className='container'>
                 <h2 className="text-center">Student List</h2>
                 <br></br>
                 <div class="fw-bold text-danger">{deleteMsg}</div>
                 <br></br>
                 <button className="btn btn-success" onClick={addStudent}>Add Student</button>
                 <button className="btn btn-success" onClick={logout}>Logout</button>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student Id</th>
                                    <th> Student Name</th>
                                    <th> Student Contact Number</th>
                                    <th> Student Address</th>
                                    <th> Student Pincode</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> {student.id}</td>
                                             <td> { student.name} </td>   
                                             <td> {student.contactNumber}</td>
                                             <td> {student.address}</td>
                                             <td> {student.pincode}</td>
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => editRecord(student.id)} className="btn btn-primary">Edit</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => deleteRecord(student.id)} className="btn btn-danger">Delete</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>

    
  )

}

export default ListStudentComponent