import axios from "axios";
import React, { useState } from "react";



function StudentForm({getStudents}) {

    const [studentFirstName, setStudentFirstName] = useState("");
    const [studentLastName, setStudentLastName] = useState("");
    const [studentSvnNumber, setStudentSvnNumber] = useState("");
    async function saveStudent(e){
        e.preventDefault();
    
        try{
            const studentData = {
                firstName: studentFirstName,
                lastName: studentLastName,
                svnNumber: studentSvnNumber
            }
    
            await axios.post("http://localhost:5000/student/", studentData);
            getStudents();
        }catch(err){
            console.error(err);
        }
    }

   return (
   <div> 
     <form onSubmit = {saveStudent}>
         <input 
         type = "text" 
         placeholder = "Students First Name" 
         onChange = {(e)=> {
             setStudentFirstName(e.target.value);
         }}
         value ={studentFirstName}
         />
        <input type = "text" 
        onChange={(e) => setStudentLastName(e.target.value)}
        value={studentLastName}
        placeholder = "Students Last Name" 
        />
        <input type = "number"
        placeholder = "Seven Hundred Number"
        onChange={(e) => setStudentSvnNumber(e.target.value)}
         value={studentSvnNumber} 
        />
         <button type= "submit">Save Student</button>
     </form>
   </div>
   )
};
export default StudentForm;