import React from 'react'
import Student from './Student';


function StudentList() {
    const students = 
    [
        {
            id: 1,
            image: 's1.png',
            name: 'Mike',
            gpa: 3.8
        },
        {
            id: 2,
            image: 's2.png',
            name: 'Manal',
            gpa: 3.6
        },
        {
            id: 3,
            image: 's3.png',
            name: 'Moe',
            gpa: 3.2
        },
        {
            id: 4,
            image: 's4.png',
            name: 'Mary',
            gpa: 2.6
        }
    ]
    const studentList = students.map(student => <Student key={student.id} student={student} />)

    return <div>{studentList}</div>
}

export default StudentList