export function exportToExcel(students){
  if(students.length === 0){
    alert("No students to export!");
    return;
  }

  let csv = "Name,Email,Age\n";
  students.forEach((s) => {
    csv += `${s.name},${s.email},${s.age}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "students-list.csv";
  a.click();
}