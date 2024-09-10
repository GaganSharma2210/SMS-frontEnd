import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8443/students";
const AuthStr = localStorage.getItem('token')
    

export const loginStudent = (student) => axios.post(STUDENT_API_BASE_URL+"/login", student);  
export const listStudent = () => axios.get(STUDENT_API_BASE_URL, { headers: { Authorization: AuthStr } });
export const saveStudent = (student) => axios.post(STUDENT_API_BASE_URL, student);
export const deleteStudent = (studentId) => axios.delete(STUDENT_API_BASE_URL + '/' +studentId,{ headers: { Authorization: AuthStr } });
export const getStudent = (studentId) => axios.get(STUDENT_API_BASE_URL + '/' +studentId,{ headers: { Authorization: AuthStr } });
export const updateStudent = (studentId,student) => axios.put(STUDENT_API_BASE_URL + '/' +studentId, student, { headers: { Authorization: AuthStr } });  