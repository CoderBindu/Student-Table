import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { exportToExcel } from "./utils/exportExcel";

function App(){
  const [students,setStudents] = useState([]);
  const [editingIndex,setEditingIndex] = useState(null);

  const addStudent = (student)=> setStudents([...students, student]);

  const deleteStudent = (index)=>{
    if(window.confirm("Delete this student?")){
      setStudents(students.filter((_,i)=>i!==index));
    }
  };

  const editStudent = (index)=> setEditingIndex(index);

  const updateStudent = (student)=>{
    const updated = [...students];
    updated[editingIndex] = student;
    setStudents(updated);
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <h1 className="headline">Student Table</h1>
      <p className="subtitle">Manage students easily with add, edit, delete, and download Excel</p>

      <StudentForm
        addStudent={addStudent}
        editingStudent={students[editingIndex]}
        updateStudent={updateStudent}
      />

      <button className="action-btn download-btn" onClick={()=>exportToExcel(students)}>Download Excel</button>

      <StudentTable
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;