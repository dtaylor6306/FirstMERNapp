import React from "react";

//li list element ul unordered list
function StudentList({students}) {
    function renderStudents(){
        return students.map((student, i)=>{
            return <li key = {i}>{student.firtName, student.lastName, student.svnNumber}</li>
        })
    };

   return (
       <div>
           <ul>
               {renderStudents()}
           </ul>
       </div>
   )

};
export default StudentList;