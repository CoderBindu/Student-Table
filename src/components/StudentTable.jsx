function StudentTable({ students, editStudent, deleteStudent }) {
  if(students.length === 0) return <p className="no-student-text">No students yet.</p>;

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, i)=>(
          <tr key={i}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.age}</td>
            <td>
              <button onClick={()=>editStudent(i)} className="edit-btn">Edit</button>
              <button onClick={()=>deleteStudent(i)} className="delete-btn">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;