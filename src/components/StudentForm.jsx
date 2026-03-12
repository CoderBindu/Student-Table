import { useState, useEffect } from "react";

function StudentForm({ addStudent, editingStudent, updateStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if(editingStudent){
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setAge(editingStudent.age);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !age){
      alert("All fields are required!");
      return;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if(!emailPattern.test(email)){
      alert("Enter a valid email!");
      return;
    }
    const student = { name, email, age };

    if(editingStudent){
      updateStudent(student);
      alert("Student updated successfully!");
    } else {
      addStudent(student);
      alert("Student added successfully!");
    }

    setName(""); setEmail(""); setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2 className="headline">Add Student</h2>
      <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="number" placeholder="Age" value={age} onChange={e=>setAge(e.target.value)}/>
      <button type="submit" className="action-btn">{editingStudent ? "Update" : "Add"} Student</button>
    </form>
  );
}

export default StudentForm;