import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {saveStudent,getStudent,updateStudent} from '../services/StudentService'

const AddStudentComponent = () => {

    const [name, setName]=useState([])
    const [contactNumber, setContactNumber]=useState([])
    const [address, setAddress]=useState([])
    const [pincode, setPincode]=useState([])
    const [password, setPassword]=useState([])
    const navigator=useNavigate();
    const [errors, setErrors] =useState({
        name : '',
        contactNumber : '',
        address : '',
        pincode : '',
        password : ''
    })
    const {id}=useParams();

    useEffect(() => {
            if(id){
                getStudent(id).then((response) => {
                    setName(response.data.name)
                    setContactNumber(response.data.contactNumber)
                    setAddress(response.data.address)
                    setPincode(response.data.pincode)
                }).catch(error => {
                    console.error(error);
                })
            }
    },[id])

    function saveOrUpdate(e){
        e.preventDefault();
        if(validateForm()){
            const student= {name,contactNumber,address,pincode,password}
            console.log(student.name + ' ' +id)
            if(id){
                updateStudent(id, student).then((response) => {
                console.log('update ' +response.data)
                }).catch(error => {
                    console.error('update '+error);
                })
            }else {
                saveStudent(student).then((response) => {
                console.log('save' +response.data)
        }).catch(error => {
            console.error('save' +error);
        })
    }
        navigator('/')
    }
    }

    function validateForm(){
        let valid=true;
        const errorsCopy = {... errors}

        if(name.trim){
            errorsCopy.name='';
        }else{
            errorsCopy.name='Student Name is required';
            valid=false;
        }
        if(contactNumber.trim){
            errorsCopy.contactNumber='';
        }else{
            errorsCopy.contactNumber='Student Contact No is required';
            valid=false;
        }
        if(address.trim){
            errorsCopy.address='';
        }else{
            errorsCopy.address='Student Address is required';
            valid=false;
        }
        if(pincode.trim){
            errorsCopy.pincode='';
        }else{
            errorsCopy.pincode='Student Pincode is required';
            valid=false;
        }
        if(password.trim){
            errorsCopy.password='';
        }else{
            errorsCopy.password='Password is required';
            valid=false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function back(e){
        e.preventDefault();
        navigator('/listStudents')
    }

    function pageTitle(){
        if(id){
            return <h3 className="text-center">Update Student</h3>
        }else{
            return <h3 className="text-center">Add Student</h3>
        }
    }


return (

    <div>
                <br></br>
                <button className="btn btn-success" onClick={back}>Back</button>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    pageTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Student Name </label>
                                            <input placeholder="Student Name" name="name" className={`form-control ${errors.name ? 'is-invalid':''}`} 
                                                value={name} onChange={(e) => setName(e.target.value)}/>
                                        {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Student Contact Number </label>
                                            <input placeholder="Student Contact Number" name="contactNumber" className={`form-control ${errors.contactNumber ? 'is-invalid':''}`} 
                                                value={contactNumber} onChange={(e) =>setContactNumber(e.target.value)}/>
                                        {errors.contactNumber && <div className='invalid-feedback'>{errors.contactNumber}</div>}
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Student Address </label>
                                            <input placeholder="Student Address" name="address" className={`form-control ${errors.address ? 'is-invalid':''}`} 
                                                value={address} onChange={(e) => setAddress(e.target.value)}/>
                                        {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Student Pincode </label>
                                            <input placeholder="Student Pincode" name="pincode" className={`form-control ${errors.pincode ? 'is-invalid':''}`} 
                                                value={pincode} onChange={(e) =>setPincode(e.target.value)}/>
                                        {errors.pincode && <div className='invalid-feedback'>{errors.pincode}</div>}
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Password </label>
                                            <input type="password" placeholder="Password" name="password" className={`form-control ${errors.password ? 'is-invalid':''}`} 
                                                value={password} onChange={(e) =>setPassword(e.target.value)}/>
                                        {errors.name && <div className='invalid-feedback'>{errors.password}</div>}
                                        </div>
                                        
                                        <br></br>
                                        <button className="btn btn-success" onClick={saveOrUpdate}>Save</button>
                                        </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>

)
}
export default AddStudentComponent