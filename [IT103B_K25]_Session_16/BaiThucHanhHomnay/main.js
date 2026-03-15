//DATA 
let employees = [
  { id: 1, fullname: "Nguyễn Văn A", email: "a.nguyen@example.com", dob: "1995-01-01", role: "Nhân viên" },
  { id: 2, fullname: "Trần Thị B", email: "b.tran@example.com", dob: "1995-12-03", role: "Trưởng nhóm" },
  { id: 3, fullname: "Lê Văn C", email: "c.le@example.com", dob: "1990-12-07", role: "Trưởng phòng" },
];

let editId = null;

let form = document.querySelector(".form-section form");

let nameItem = document.getElementById("fullName");
let emailItem = document.getElementById("email");
let dobItem = document.getElementById("dateOfBirth");
let positionItem = document.getElementById("position");

let errorName = document.getElementById("error-fullName");
let errorEmail = document.getElementById("error-email");
let errorDob = document.getElementById("error-dateOfBirth");
let errorPosition = document.getElementById("error-position");

let employItem = document.getElementById("employeesList");
let employeeCount = document.querySelector(".badge");
let footerCount = document.querySelector(".footer span");

function formatDateToDDMMYYYY(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();

  return `${d}/${m}/${y}`;
}
// chức năng render lại bảng
function renderAllEmployees(arr) {
  employItem.innerHTML = "";

  arr.forEach(emp => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.fullname}</td>
      <td>${emp.email}</td>
      <td>${formatDateToDDMMYYYY(emp.dob)}</td>
      <td>${emp.role}</td>
      <td>
        <div class="actions">
          <button class="btn btn-sm btn-edit" data-id="${emp.id}">Sửa</button>
          <button class="btn btn-sm btn-delete" data-id="${emp.id}">Xóa</button>
        </div>
      </td>
    `;

    employItem.appendChild(tr);
  });

  updateCount();
}
// phần cập nhập biến đếm bằng cách đến số phần tử trong mảng
function updateCount() {
  employeeCount.textContent = `${employees.length} nhân viên`;
  footerCount.textContent = `Tổng số nhân viên: ${employees.length}`;
}
// phần xác định đầu input vào của người dùng, nếu người dùng không nhập hết nội dung thì ta sẽ nảy chữ không được để trống và validate lại các phần quan trọng
function validateForm() {
  let valid = true;

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorDob.textContent = "";
  errorPosition.textContent = "";

  if (nameItem.value.trim() === "") {
    errorName.textContent = "Vui lòng nhập tên";
    errorName.style.color = "red";
    valid = false;
  }

  if (emailItem.value.trim() === "") {
    errorEmail.textContent = "Vui lòng nhập email";
    errorEmail.style.color = "red";
    valid = false;
  }else if(!emailItem.value.includes("@")){
    errorEmail.textContent = "email phải có chữ @ !";
    errorEmail.style.color = "red";
    valid = false;
  }

  if (dobItem.value === "") {
    errorDob.textContent = "Vui lòng chọn ngày sinh";
    errorDob.style.color = "red";
    valid = false;
  }

  if (positionItem.value === "") {
    errorPosition.textContent = "Vui lòng chọn chức vụ";
    errorPosition.style.color = "red";
    valid = false;
  }

  return valid;
}
// chỉnh 2 chế độ là chỉnh sửa và thêm nhân viên: xảy ra khi ta sử dụng biến cờ editId ban đầu đặt bằng null
// khi cờ bằng 1 id bất kỳ ta sẽ chỉnh vào chế độ chỉnh sửa lại nhân viên và lấy id của nhân viên đố khi cập nhập ta sẽ chỉnh text sao cho về form thêm nhân viên lúc đầu !
// khi cờ bằng null thì ta sẽ thêm nhân viên mới đó vào mảng và render lại bảng của nhân viên
form.addEventListener("submit" , (e) => {
  e.preventDefault();
  if(!validateForm()) return;
  
  if(editId !== null){
      const emp = employees.find(c => c.id === editId);

      emp.fullname = nameItem.value.trim();
      emp.email = emailItem.value.trim();
      emp.dob = dobItem.value;
      emp.role = positionItem.value;

  }else{
      const newEmployees = {
        id: employees.length ? employees[employees.length-1].id + 1 : 1,
        fullname: nameItem.value,
        email: emailItem.value,
        dob:  dobItem.value,
        role: positionItem.value,
      }
      employees.push(newEmployees);
  }
  renderAllEmployees(employees);
  form.reset();
});
// chức năng sửa và xóa 
// phần sửa ta sẽ lấy giá trị của nhân viên tại chỉ số trong bảng và đặt biến cờ thành id để có thể cập nhập trong mảng
// khi nhấn vào sửa ta sẽ chỉnh nội dung 2 phần form "thêm nhân viên " và "nhập lại" thành "Cập nhập nhân viên" và "Hủy";
// khi ta nhấn vào xóa thì ta sẽ thông báo cho người dùng có muốn xóa hay không , nếu xóa thì ta sẽ filter lại và gắn lại mảng mới vào rồi render lại 
employItem.addEventListener("click" ,  (e) => {
  let id  = +e.target.dataset.id;
  if(e.target.classList.contains("btn-delete")){
    let wannaDelete = window.confirm("Bạn có muốn xóa không ?");
    if(wannaDelete){
      employees = employees.filter(c => c.id !== id);
      renderAllEmployees(employees);
    }else{
      renderAllEmployees(employees);
    }
  }
  if(e.target.classList.contains("btn-edit")){
    const emp = employees.find(c => c.id === id);
    nameItem.value = emp.fullname;
    emailItem.value = emp.email;
    dobItem.value = emp.dob;
    positionItem.value = emp.role;
    editId = id;
    form.querySelector("button[type = 'submit']").textContent = "Cập nhập nhân viên";
    form.querySelector("button[type = 'reset']").textContent = "Hủy";
  }
});

// chức năng reset khi ta nhấn nhập lại hay hủy thì sẽ chỉnh biến cờ thành null và chỉnh text thành "Thêm nhân viên" và "Nhập lại"
form.addEventListener("reset", () => {
  editId = null;
  form.querySelector("button[type = 'submit']").textContent = "Thêm nhân viên";
  form.querySelector("button[type = 'reset']").textContent = "Nhập lại";
});


renderAllEmployees(employees);