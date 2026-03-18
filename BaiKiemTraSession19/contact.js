listName = [
    { id: 1, name: "Nguyễn Văn An", phone: "0901234567", email: "nguyenvanan@email.com" },
    { id: 2, name: "Trần Thị Bình", phone: "0912345678", email: "tranthibinh@email.com" },
    { id: 3, name: "Lê Văn Cường", phone: "0923456789", email: "levancuong@email.com" },
    { id: 4, name: "Phạm Thị Dung", phone: "0934567890", email: "phamthidung@email.com" },
    { id: 5, name: "Hoàng Văn Em", phone: "0945678901", email: "hoangvanem@email.com" },
]


let nameItem = document.getElementById("contact-name");
let phoneItem = document.getElementById("contact-phone");
let emailItem = document.getElementById("contact-email");


let addBtn = document.querySelector(".btn-add");

localStorage.setItem("List", JSON.stringify(listName));
let editId = null;

let localList = JSON.parse(localStorage.getItem("List"))

let list = document.getElementById("contact-tbody");

document.querySelector(".btn-add").addEventListener("click", (e) => {
    e.preventDefault();
    if (nameItem.value === "") {
        alert("Tên không được để trống !");
        return;
    }
    if (nameItem.value.length <= 2) {
        alert("Tên phải đủ dài hơn 2 ký tự");
        return;
    }
    if (phoneItem.value.trim() === "") {
        alert("Số điện thoại không được để trống !");
        return;
    }
    if (isNaN(+phoneItem.value)) {
        alert("Số điện thoại phải là số !");
        return;
    }
    if (+phoneItem.value[0] !== 0 && !phoneItem.value.includes("+84")) {
        alert("Số điện thoại phải bắt đầu bằng 0 đàu tiên");
        return;
    }
    if (phoneItem.value.length !== 10 ) {
        alert("Số điện thoại phải phải có 10 chữ số ");
        return;
    }
    if (emailItem.value === "") {
        alert("Email khoooogn được để trống !");
        return;
    }
    if (!emailItem.value.includes("@")) {
        alert("Email phải có ký tự @");
        return;
    }   
    let result = localList.find(c => c.id ===  editId);

    result.name = nameItem.value;
    result.phone = phoneItem.value;
    result.email = emailItem.value;
    editId = null;
    nameItem.value= "";
    phoneItem.value = "";
    emailItem.value = "";

    addBtn.textContent = "Thêm";
    renderAll();

});
function renderAll() {
    list.innerHTML = "";
    localList.forEach((c, index )=> {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
                <td>${c.name}</td>
                <td>${c.phone}</td>
                <td>${c.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" data-id = "${c.id}">Sửa</button>
                    <button class="btn-delete" data-id = "${c.id}">Xóa</button>
                  </div>
                </td>
        `;
        list.appendChild(tr);
    });
}
renderAll();

document.getElementById("contact-tbody").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        let WannaToDelete = window.confirm("Bạn có chắc chắn muốn xóa liên hệ này?");
        if (WannaToDelete) {
            let id = +e.target.dataset.id;
            localList = localList.filter(c => c.id !== id);
            localStorage.setItem("List", JSON.stringify(localList));
            renderAll();
        }
    }
    if(e.target.classList.contains("btn-edit")){
        editId = +e.target.dataset.id;
        let result = localList.find(c => c.id === editId);

        nameItem.value = result.name;
        phoneItem.value = result.phone;
        emailItem.value = result.email

        addBtn.textContent = "Cập nhập";
    }
});
