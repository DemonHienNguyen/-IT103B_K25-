


let btnAl = document.getElementById("btn--all");
let btnWarn = document.getElementById("btn--warn");
let btnerror = document.getElementById("btn--error");
let btnInfor = document.getElementById("btn--inform");

// Cách cải biến nhiếu muốn nhiều thông báo mà mỗi lần mình sẽ thêm phần tử vào: queue
const MAX_COUNT = 5;
const list = [];

let toastList = document.getElementById("toastContainer");
let posistion = document.getElementById("option");

const typeData = {
    "success": { icon: "✅", message: "Thành công", message2: "Bài viết được lưu thành công !", duration: 3000 },
    "warning": { icon: "⚠️", message: "cảnh cáo !!", message2: "Phiên đăng nhập sắp hết hạn trong 6 phút", duration: 4000 },
    "error": { icon: "❗️", message: "Lỗi", message2: "Không thể kết nối với máy chủ, vui lòng thử lại", duration: 6000 },
    "infor": { icon: "ℹ️", message: "Thông tin", message2: "Hệ thống sẽ bảo trình vào 23:00 tối nay !", duration: 5000 },
};

// thêm phần tử vào trong mảng với 2 thuộc tính rồi dùng hàm tiếp theo
// function createQueue(type, posistion = "top-right"){
//     list.push({type, posistion});
//     showNextToast();
// }
// hàm này để so sánh nếu số lượng trong phần tử có lơn hơn bằng MAX không hoặc mảng =  0 thì return và chờ khi sai cả 2 thì mới tiếp tục được !
// function showNextToast(){
//     if(toastList.childElementCount >= MAX_COUNT)  return;
//     if(list.length === 0) return;

//     const {type, posistion} = list.shift(); // lấy phần tử đầu  tiên của mảng và render ra Toast của phần tử đó !
//     createToast(type, posistion);
// }

function createToast(type, posistion = "top-right") {

    // toastList.style.top = "";
    // toastList.style.bottom = "";
    // toastList.style.left = "";
    // toastList.style.right = "";
    const data = typeData[type];
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class = "div--content">${data.icon}
            <div class = "down"><h3>${data.message}</h3>
                                <p>${data.message2}</p>
                                </div>
            <button class = "dell">X</button>

        </div>
        
        <div class="procss ${type}"></div>
    `;
    toastList.appendChild(toast);

    // const valiPos = ["top-right","top-left","bottom-right","bottom-left"];
    // if(!valiPos.includes(posistion)){
    //     posistion = "top-right";
    // }

    // if (posistion === "top-right") {
    //     toastList.style.top = "20px";
    //     toastList.style.right = "20px";
    //     toastList.classList.remove("bottom-left");
    //     toastList.classList.remove("top-left");
    // }
    // if (posistion === "top-left") {
    //     toastList.style.top = "20px";
    //     toastList.style.left = "20px";
    //     toastList.classList.remove("bottom-left");
    //     toastList.classList.add("top-left");
    // }
    // if (posistion === "bottom-right") {
    //     toastList.style.bottom = "20px";
    //     toastList.style.right = "20px";
    //     toastList.classList.remove("bottom-left");
    //     toastList.classList.remove("top-left");
    // }
    // if (posistion === "bottom-left") {
    //     toastList.style.bottom = "20px";
    //     toastList.style.left = "20px";
    //     toastList.classList.add("bottom-left");
    //     toastList.classList.remove("top-left");
        
    // }

    localStorage.setItem("lastToast", JSON.stringify({
        type,
        posistion,
    }));


    setTimeout(() => {
        toast.classList.add("show");
        toast.querySelector(".procss").classList.add("show");
        toast.querySelector(".procss").style.animationDuration = data.duration + "ms";
    }, 10);
    if (toastList.childElementCount >= MAX_COUNT) {
        toastList.firstElementChild.remove();
    }
    setTimeout(() => {
        toast.remove();
        // showNextToast();
    }, data.duration);

}

toastList.addEventListener("click", (e) => {
    if (e.target.classList.contains("dell")) {
        e.target.disabled = true;
        let toastItem = e.target.closest(".toast");
        if(toastItem){
            toastItem.remove();
            
        }
    }
})

btnAl.addEventListener("mousedown", () => {
    createToast("success", posistion.value);
});
btnWarn.addEventListener("mousedown", () => {
    createToast("warning", posistion.value);
});
btnerror.addEventListener("mousedown", () => {
    createToast("error", posistion.value);
});
btnInfor.addEventListener("mousedown", () => {
    createToast("infor", posistion.value);
});

window.onload = () =>{
    const data = JSON.parse(localStorage.getItem("lastToast"));
    if(data){
        posistion.value = data.posistion;
        posistion.dispatchEvent(new Event("change"));
        createToast(data.type);
    }
}
posistion.addEventListener("change", (e) => {
    toastList.style.top = "";
    toastList.style.bottom = "";
    toastList.style.left = "";
    toastList.style.right = "";
    let key  = e.target.value;
    if(key === "top-right"){
        toastList.style.top = "20px";
        toastList.style.right = "20px";
        toastList.classList.remove("bottom-left");
        toastList.classList.remove("top-left");
    }
    if (key === "top-left") {
        toastList.style.top = "20px";
        toastList.style.left = "20px";
        toastList.classList.remove("bottom-left");
        toastList.classList.add("top-left");
    }
    if (key === "bottom-right") {
        toastList.style.bottom = "20px";
        toastList.style.right = "20px";
        toastList.classList.remove("bottom-left");
        toastList.classList.remove("top-left");
    }
    if (key === "bottom-left") {
        toastList.style.bottom = "20px";
        toastList.style.left = "20px";
        toastList.classList.add("bottom-left");
        toastList.classList.remove("top-left");
    }
});