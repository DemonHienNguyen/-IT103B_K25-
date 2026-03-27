
let products = [
    { id: "SPJ806NEC", name: "Laptop Dell XPS 13", price: 28500000, stock: 12, status: true },
    { id: "SPJ806VAO", name: "Chuột Logitech MX Master", price: 1850000, stock: 34, status: true },
    { id: "SPJ8067PK", name: "Bàn phím Keychron K2", price: 2200000, stock: 7, status: true },
    { id: "SPJ806IHC", name: "Áo thun Basic Uniqlo", price: 390000, stock: 0, status: false },
    { id: "SPJ8061MB", name: "Cà phê rang xay 500g", price: 185000, stock: 58, status: true },
];
let localProduct;
let editId = null;
let dellId = null;

function saveProduct(pro) {
    localStorage.setItem("product", JSON.stringify(pro));
}
function getProduct() {
    return JSON.parse(localStorage.getItem("product")) || [];
}

// form 
let form = document.getElementById("form");


// BÀI NÀY CỦA DEMON HIỂN NGUYỄN !!!
// input 
let nameInput = document.getElementById("iName");
let priceInput = document.getElementById("iPrice");
let stockInput = document.getElementById("iStock");

// searchInput 
let searchInput = document.getElementById("searchInput");


// sortInput 
let sortInput = document.getElementById("sortSelect");



// nut
let btnAction = document.querySelector(".form-actions");
let btnadd = document.getElementById("btnSubmit");
let btncancel = document.querySelector(".btn-secondary");

// dnah sach
let productList = document.getElementById("tbody");
let emptyList = document.getElementById("emptyState");

// badage 
let total = document.getElementById("totalBadge");

let pageSize = document.getElementById("pageSz");

// error
let errorName = document.getElementById("error--name");
let errorPrice = document.getElementById("error--price");
let errorStock = document.getElementById("error--stock");

let listToast = document.querySelector(".overlay");

function renderAllProduct(arr) {
    let html = "";
    productList.innerHTML = "";
    emptyList.innerHTML = "";
    emptyList.style.display = "none";
    if (arr.length === 0) {
        emptyList.style.display = "block";
        emptyList.innerHTML = `
            <div class="empty-ico">📭</div>
            <p>Chưa có sản phẩm nào. Hãy thêm sản phẩm đầu tiên!</p>
          </div>
        `;
        return;
    }
    arr.forEach((c, index) => {
        html = `
        <tr id="row-${c.id}" class = "content" data-id = "${c.id}">
                <td>${index + 1}</td>
                <td class="td-name">${c.name}</td>
                <td class="td-price">${c.price.toLocaleString("vi-VN")} đ</td>
                <td class="center" style="font-weight: 700">${c.stock}</td>
                <td class = "td-status">${c.stock ? "Còn hàng" : "Hết hàng"}</td>
                <td>
                  <div class="td-actions">
                    <button class="btn btn-sm btn-edit" data-id = "${c.id}">✏ Sửa</button>
                    <button class="btn btn-sm btn-del" data-id = "${c.id}">✕ Xóa</button>
                  </div>
                </td>
              </tr>
        `;
        productList.innerHTML += html;
    });
}
function submitForm() {
    errorName.textContent = "";
    errorPrice.textContent = "";
    errorStock.textContent = "";
    if(editId === null){
        const name = nameInput.value.trim();
        if (name === "") {
            errorName.textContent = "Vui lòng nhập tên sản phẩm.";
            nameInput.focus();
            return;
        }
        if (localProduct.some(c => c.name === name)) {
            errorName.textContent = "Tên sản phẩm đã tồn tại";
            nameInput.focus();
            return;
        }
        const price = +priceInput.value.trim();
        if (price <= 0) {
            errorPrice.textContent = "Giá phải là số dương lớn hơn 0."
            priceInput.focus();
            return;
        }
        const stock = +stockInput.value.trim();
        if (stock < 0) {
            errorStock.textContent = "Tồn kho phải là số nguyên lớn hơn hoặc bằng 0.";
            return;
        }
        const newProduct = {
            id: localProduct.length ? "SPJ000" + localProduct[localProduct.length - 1].id.slice(5, 7) + 1 : "SPJ000001",
            name,
            price,
            stock,
        }

        localProduct.push(newProduct);
    }else{
        let result = localProduct.find(c => c.id === editId);
        result.name = nameInput.value;
        result.price = +priceInput.value;
        result.stock = +stockInput.value;
        editId = null;
        btnadd.textContent = "Thêm sản phẩm";
        btncancel.textContent = "Làm mới";
    }

    // console.log();
    saveProduct(localProduct);
    renderAllProduct(localProduct);
    renderBadge();
    resetForm();
}

btncancel.addEventListener("click", () =>{
    resetForm();
    btnadd.textContent = "Thêm sản phẩm";
        btncancel.textContent = "Làm mới";
});

function resetForm() {
    nameInput.value = "";
    priceInput.value = "";
    stockInput.value = "";
    editId = null;
}
// saveProduct(products);

pageSize.addEventListener("change", (e) => {
    let size = +e.target.value;
    let result;
    if (size === 5) {
        result = localProduct.slice(0, size);
        renderAllProduct(result);
        return;
    }
    if (size === 10) {
        result = localProduct.slice(0, size);
        renderAllProduct(result);
        return;
    }
    if (size === 20) {
        result = localProduct.slice(0, size);
        renderAllProduct(result);
        return;
    }

});


form.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        submitForm();
    }
})

productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-del")) {
        dellId = e.target.dataset.id;
        creatToast();
    }
    if(e.target.classList.contains("btn-edit")){
        editId = e.target.dataset.id;
        let result = localProduct.find(c => c.id === editId);
            nameInput.value = result.name;
            priceInput.value = result.price;
            stockInput.value = result.stock;
            btnadd.textContent = "Cập nhập";
            btncancel.textContent = "Hủy cập nhập";
    }
});

function creatToast() {

    const div = document.createElement("div");
    div.className = "modal";
    div.innerHTML = `
        <div class="modal-ico">🗑️</div>
        <h3>Xác nhận xóa</h3>
        <p id="modalMsg">Bạn có chắc muốn xóa sản phẩm này?</p>
        <div class="modal-btns">
          <button class="btn btn-secondary" onclick="closeModal()">Hủy</button>
          <button class="btn btn-del" id="btnConfirm" onclick ="deleteId()">Xóa</button>
        </div>
        `;
    listToast.appendChild(div);

    setTimeout(() => {
        div.classList.add("show");
    }, 10);

    if (listToast.childElementCount > 1) {
        listToast.firstElementChild.remove();
    }
}

function closeModal() {
    listToast.firstElementChild.remove();
}

function deleteId() {
    localProduct = localProduct.filter(c => c.id !== dellId);
    closeModal();
    saveProduct(localProduct);
    renderAllProduct(localProduct);
    dellId = null;
}

window.onload = () => {
    localProduct = getProduct();
    // console.log(products);
    renderAllProduct(localProduct);
    renderBadge();
}

searchInput.addEventListener("input", (e) => {
    const key = e.target.value.trim().toLowerCase();
    // pageSize.onchange();
    let result = localProduct.filter(c => c.name.toLowerCase().trim().includes(key));
    renderAllProduct(result);
});

function renderBadge(){
    total.textContent = `${localProduct.length} Sản phẩm`;
}

sortInput.addEventListener("change", (e) => {
    let sort = e.target.value;
    if(sort === ""){
        renderAllProduct(localProduct);
    }
    if (sort === "name_asc") {
        // renderAllProduct([...localProduct].sort((a, b) => a.name - b.name));
        renderAllProduct([...localProduct].sort())
    }
    if (sort === "name_desc") {
        renderAllProduct([...localProduct].sort())
    }
    if (sort === "price_asc") {
        renderAllProduct([...localProduct].sort((a, b) => a.price  - b.price));
    }
    if (sort === "price_desc") {
        renderAllProduct([...localProduct].sort((a, b) => b.price  - a.price));
    }
});