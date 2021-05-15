import React from "react";

//li list element ul unordered list
function StudentList({students}) {
    function renderStudents(){
        return students.map((student, i)=>{
            var studentData = [student.firstName, student.lastName, student.svnNumber].join(" ");
            return <li key = {i}>{studentData}</li>
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