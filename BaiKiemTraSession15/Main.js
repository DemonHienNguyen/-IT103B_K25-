let result = [];
document.getElementById("btn-sub").addEventListener("click", (e) => {
    e.preventDefault();
    let keyEmail = document.getElementById("emailToAdd");
    let keyPassWord = document.getElementById("pass");
    let keyAgain = document.getElementById("passAgain");
    // if(e.target.classList.contains("btn-sub")){
        if(keyEmail.value.trim() === "" || keyEmail.value.includes(" ")){
            alert("Email không được để trống !");
            return;
        }
        if(!keyEmail.value.includes("@gmail.com")){
            alert("Tên không được thiếu chữ: @gmail.com  !");
            return;
        }
        if(keyPassWord.value.trim() === ""){
            alert("Mật khẩu không được để trống !");
            keyPassWord.focus();
            return;
        }
        if(keyAgain.value.trim() === ""){
            alert("Mật khẩu nhập lại không được để trống ! vui lòng nhập lại");
            keyAgain.focus();
            return;
        }
        if(keyPassWord.value !== keyAgain.value){
            alert("Mật khẩu nhập lại của bạn không khớp với mật khẩu đã nhập ");
            keyAgain.focus();
            return;
        }
        let newPlayer = {
            email: keyEmail.value,
            password: keyPassWord.value,
            rePassword: keyAgain.value,
        }
        result.push(newPlayer);
        alert("Đã đăng ký thành công ! hiển thị ở console");
        keyEmail.value = "";
        keyPassWord.value = "";
        keyAgain.value = "";
    // }
    console.log(result);
});