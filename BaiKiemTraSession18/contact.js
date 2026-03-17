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

let list = document.getElementById("contact-tbody");

document.querySelector(".btn-add").addEventListener("click", (e) => {
    e.preventDefault();
    if (nameItem.value === "") {
        alert("Tên không được để trống !");
        return;
    }
    if (nameItem.value.length < 2) {
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
    if (phoneItem.value.length < 10) {
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
    let newName= {
        id: listName[listName.length - 1].id + 1,
        name: nameItem.value,
        phone: phoneItem.value,
        email: emailItem.value,
    }
    listName.push(newName);
    nameItem.value = "";
    phoneItem.value = "";
    emailItem.value = "";
    renderAll();
});
function renderAll() {
    listName.forEach(c => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.phone}</td>
                <td>${c.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete" data-id = "${c.id}">Xóa</button>
                  </div>
                </td>
        `;
        list.appendChild(tr);
    });
}
renderAll();

document.getElementById("contact-tbody").addEventListener("click", (e) =>{
    if(e.target.classList.contians("btn-delete")){
        id = +e.target.dataset.id;
        listName = listName.filter()
    }
})