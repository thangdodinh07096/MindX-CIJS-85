import "./Students.css"
import Student from "../Student/Student";

const studentsData = [
    {
        id: "1",
        name: "Nguyễn Văn A",
        classCode: "10A",
        math: "10",
        phy: "9",
        chem: "8"
    },
    {
        id: "1",
        name: "Nguyễn Văn B",
        classCode: "10B",
        math: "1",
        phy: "10",
        chem: "8"
    },
    {
        id: "1",
        name: "Nguyễn Văn C",
        classCode: "10C",
        math: "10",
        phy: "8",
        chem: "4"
    },
    {
        id: "1",
        name: "Nguyễn Văn D",
        classCode: "10D",
        math: "6",
        phy: "9",
        chem: "7"
    },
    {
        id: "1",
        name: "Nguyễn Văn E",
        classCode: "10E",
        math: "8",
        phy: "8",
        chem: "8"
    },
]

const Students = () => {
    // //Cách 1
    // let listStudents = [];
    // for (let i = 0; i < studentsData.length; i++) {
    //     const student = studentsData[i];
    //     listStudents.push(
    //          <Student
    //          studentName={student.name}
    //          classCode={student.classCode}
    //          math={student.math}
    //          phy={student.phy}
    //          chem={student.chem} />);
    // }

    //Cách 2

    let listStudents = studentsData.map((student) => {
        const { name, classCode, math, phy, chem } = student;
        return (<Student
            studentName={name}
            classCode={classCode}
            math={math}
            phy={phy}
            chem={chem} />);
    });


    return (
        <div className="container">
            <div className="student-controller">
                <button>Thêm học sinh mới</button>
                <button>Sắp xếp</button>
            </div>
            <div className="student-list">
                {listStudents}
            </div>
        </div>
    )
}

export default Students;