// ====== DATA ======
let employees = [
  { id: 1, fullname: "Nguyễn Văn A", email: "a.nguyen@example.com", dob: "1995-01-01", role: "Nhân viên" },
  { id: 2, fullname: "Trần Thị B", email: "b.tran@example.com", dob: "1995-12-03", role: "Trưởng nhóm" },
  { id: 3, fullname: "Lê Văn C", email: "c.le@example.com", dob: "1990-12-07", role: "Trưởng phòng" },
];

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

function updateCount() {
  employeeCount.textContent = `${employees.length} nhân viên`;
  footerCount.textContent = `Tổng số nhân viên: ${employees.length}`;
}

function validateForm() {
  let valid = true;

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorDob.textContent = "";
  errorPosition.textContent = "";

  if (nameItem.value.trim() === "") {
    errorName.textContent = "Vui lòng nhập tên";
    valid = false;
  }

  if (emailItem.value.trim() === "") {
    errorEmail.textContent = "Vui lòng nhập email";
    valid = false;
  }

  if (dobItem.value === "") {
    errorDob.textContent = "Vui lòng chọn ngày sinh";
    valid = false;
  }

  if (positionItem.value === "") {
    errorPosition.textContent = "Vui lòng chọn chức vụ";
    valid = false;
  }

  return valid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateForm()) return;
  if (editId) {

    const emp = employees.find(emp => emp.id === editId);

    emp.fullname = nameItem.value.trim();
    emp.email = emailItem.value.trim();
    emp.dob = dobItem.value;
    emp.role = positionItem.value;

    editId = null;

    form.querySelector("button[type='submit']").textContent = "Thêm Nhân Viên";

  } else {

    const newEmployee = {
      id: employees.length ? employees[employees.length - 1].id + 1 : 1,
      fullname: nameItem.value.trim(),
      email: emailItem.value.trim(),
      dob: dobItem.value,
      role: positionItem.value
    };

    employees.push(newEmployee);
  }

  renderAllEmployees(employees);
  form.reset();
});

employItem.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {

    const id = Number(e.target.dataset.id);

    employees = employees.filter(emp => emp.id !== id);

    renderAllEmployees(employees);
  }
});

employItem.addEventListener("click", function (e) {

  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("btn-delete")) {

    employees = employees.filter(emp => emp.id !== id);

    renderAllEmployees(employees);
  }

  if (e.target.classList.contains("btn-edit")) {

    const emp = employees.find(emp => emp.id === id);

    nameItem.value = emp.fullname;
    emailItem.value = emp.email;
    dobItem.value = emp.dob;
    positionItem.value = emp.role;

    editId = id;

    form.querySelector("button[type='submit']").textContent = "Cập nhật nhân viên";
    form.querySelector("button[type='reset']").textContent = "Hủy";

  }
  if(e.target.querySelector("button[type='reset']")){
    renderAllEmployees(employees);
    form.querySelector("button[type='submit']").textContent = "Thêm nhân viên";
    form.querySelector("button[type='reset']").textContent = "Nhập lại";
    return;
  }

});

renderAllEmployees(employees);