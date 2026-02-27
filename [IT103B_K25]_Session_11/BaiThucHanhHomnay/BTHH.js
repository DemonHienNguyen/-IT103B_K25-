let students = [
    { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];
// chức năng phụ:
function fornmatStudent(arr){
    return `ID: ${arr.id} | Name: ${arr.name} | Age: ${arr.age} | Status: ${arr.status}`;
}

// chức năng 3: Filter Scholarship Candidates
let filterScholarshipCandidates = (arr) => {
    const result = arr.filter(c => c.gpa >= 8);
    let rows = "===== STUDENT MANAGEMENT SYSTEM ===== \n ----------------------------------------------------- \n";
    result.forEach(c=>{
        rows += fornmatStudent(c) + `\n`;
    });
    result += "\n -----------------------------------------------------";
    result += `\n Total: ${result.length}`;
    alert(result);
}

// Chức năng 4: Update Profile
let updateID = (arr) => {
    let idWannaToUpdate = +prompt("Vui lòng nhập ID muốn cập nhập !");
    const result = arr.find(value => value.id === idWannaToUpdate);
    if (result) {
        alert(`Found\n ID: ${result.id} | Name: ${result.name} | Age: ${result.age} | GPA: ${result.gpa} | Status: ${result.status} \n Leave blank to keep current value`);
        const newName = prompt(`New name (current: ${result.name}): `);
        const newGPA = parseFloat(prompt(`New name (current: ${result.gpa}): ` ));
        
        if(newName.trim() !== "") result.name = newName.trim();

        if(newGPA >=0 && !isNaN(newGPA) &&  newGPA <=10){
            result.gpa = newGPA;
        }else{
            alert("Invalid GPA value. GPA not updated.");
        }
    }else{
        alert("No student found with ID: " + idWannaToUpdate);
    }
    alert(`Student updated successfully!\n ID: ${result.id} | Name: ${result.name} | Age: ${result.age} | GPA: ${result.gpa} | Status: ${result.status} `);
}
// chức năng 5: Delete Record
let deleteStudent = (arr) => {
    let deleteId = +prompt("Vui lòng nhập ID của sinh viên cần phải xóa: ");
    let deleteIndex = arr.findIndex(c => c.id === deleteId);
    if(deleteIndex !== -1){
        arr.splice(deleteIndex, 1);
        alert("Xóa sinh viên thành công !");
    }else{
        alert("Không tìm thấy sinh viên có ID: " + deleteId);
    }
}

// chức năng 6 :Compliance Verification
let complianceStudent = (arr) =>{
    let oneStudentUnder18 = arr.some(c => c.age < 18);
    let allStudentHaveActive = arr.every(c => c.status  === "active");

    let result = "===== COMPLIANCE VERIFICATION =====\n";
    result += `\nHas at least one student under 18: ${oneStudentUnder18 ? "YES" : "NO"} \n`;

    if(oneStudentUnder18){
        const minor = arr.filter(c=>c.age < 18);
        result += `Minor Found \n`;
        minor.forEach(c => {
            result += `\n -> ${c.name} ( ${c.age} )`;
        });
    }
    result += `\n\nAll students have "active" status: ${allStudentHaveActive ? "YES" : "NO"} \n `;
    if(!allStudentHaveActive){
        const inActive = arr.filter(c=> c.status === "inactive");
        result += `Inactive students: \n`;
        inActive.forEach( c => {
            result += `\n  -> ${c.name} (stautus: ${c.status})`;
        });
    }
    alert(result);
}
// chức năng 7: Academic Statistics
let academicStatistics  =  (arr) => {
    if(arr.length === 0){
        alert("Danh sách trống, không thể mà tính thống kê ");
        return [];
    }
    let totalGpa = arr.reduce((arc , cur) => arc + cur.gpa, 0).toFixed(2);
    let avgGpa = (totalGpa / arr.length).toFixed(2);
    let highestGpa = {
        names: "",
        Gpa: arr[0].gpa,
    };
    let lowestGpa = {
        names: "",
        Gpa: arr[0].gpa,
    };
    arr.forEach(c => {
        if(c.gpa > highestGpa.Gpa){
            highestGpa.names = c.name;
            highestGpa.Gpa = c.gpa;
        }
        if(c.gpa < lowestGpa.Gpa){
            lowestGpa.names = c.name;
            lowestGpa.Gpa = c.gpa;
        }
    });
    alert(`===== ACADEMIC STATISTICS =====
Total students: ${arr.length}
Total GPA sum: ${totalGpa}
Average GPA: ${avgGpa}

Highest GPA: ${highestGpa.names} (${highestGpa.Gpa})
Lowest GPA: ${lowestGpa.names} (${lowestGpa.Gpa})`);
}

let displayMenu = () => {
    do{
        let choose = +prompt(`===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:`);
        switch(choose){
            case 1:
                break;
            case 2:
                break;
            case 3:
                filterScholarshipCandidates(students);
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 0:
                alert("Goodbye! Thank you for using Student Management System.");
            default:
                alert("Invalid choice! Please enter a number from 0 to 8.");
        }
    }while(choose !== 0);


}
displayMenu();