import React, {useEffect,useState } from 'react'
import {loginStudent} from '../services/StudentService'
import { useNavigate } from 'react-router-dom'

const LoginStudentComponent = () => {

    const [contactNumber, setContactNumber]=useState([])
    const [password, setPassword]=useState([])
    const [errorMsg, setErrorMsg]=useState([])
    const navigator=useNavigate();

    const [errors, setErrors] =useState({
        contactNumber : '',
        password : ''
    })

    function login(e){
        e.preventDefault();
        if(validateForm()){
        const student= {contactNumber,password}
        //console.log(student);
        loginStudent(student).then((response) => {
            localStorage.setItem('token','Bearer '+response.data.jwt)
            setErrorMsg("");
            //console.log(localStorage.getItem('token'));
            navigator('/listStudents')
        }).catch(error=>{
            //console.error(error);
            setErrorMsg("Incorrect Username or Password");
            console.error(errorMsg);

        })
        
    }
    }

    function validateForm(){
        let valid=true;
        const errorsCopy = {... errors}

        if(contactNumber.trim){
            errorsCopy.contactNumber='';
        }else{
            errorsCopy.contactNumber='Student Contact No is required';
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


        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Student Login</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div class="fw-bold text-danger">{errorMsg}</div>
                                        <div className = "form-group">
                                            <label> Username </label>
                                            <input placeholder="Username" name="contactNumber" className={`form-control ${errors.contactNumber ? 'is-invalid':''}`}
                                                value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                                        {errors.contactNumber && <div className='invalid-feedback'>{errors.contactNumber}</div>}
                                        </div>
                                        <div className = "form-group">
                                            <label> Password </label>
                                            <input type="password" placeholder="Password" name="password" className={`form-control ${errors.password ? 'is-invalid':''}`}
                                                value={password} onChange={(e) =>setPassword(e.target.value)}/>
                                                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                                        </div>
                                        <button className="btn btn-success" onClick={login}>Login</button>
                                        </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    


}

export default LoginStudentComponent
