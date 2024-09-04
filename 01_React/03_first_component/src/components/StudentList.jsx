import React from "react";

const StudentList = () => {

    const students = ['Aryan', 'Rana', 'Rana', 'Parker', 'Sam', 'Andrew'];

    return (
        <ol>
            {
                students.map((student, index) => <li key={index}>{student}</li>)
            }
        </ol>
    )

}

export default StudentList