import React from "react";

const StudentList = (props) => {

    if(!props.students){
        return (
            <p>No students</p>
        )
    }

    return (
        <ol>
            {
                props.students.map((student, index) => <li key={index}>{student}</li>)
            }
        </ol>
    )

}

export default StudentList