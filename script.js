let count = 0;

function add(){
    count++;
    document.getElementById("count").innerText = count;
}

function showLogin(){
    document.getElementById("login-popup").style.display="block";
}

function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user=="admin" && pass=="123"){
        localStorage.setItem("role","admin");
        showUser("Admin", true);
    }
    else if(user=="user" && pass=="123"){
        localStorage.setItem("role","user");
        showUser("User", false);
    }
    else{
        alert("Sai tài khoản");
    }
}

function showUser(name, isAdmin){
    document.getElementById("login-popup").style.display="none";

    let adminBtn = "";
    if(isAdmin){
        adminBtn = "<button onclick='alert(\"Trang quản trị\")'>Quản lý</button>";
    }

    document.getElementById("user-box").innerHTML =
        "Xin chào "+name+" "+adminBtn+
        " <button onclick='logout()'>Đăng xuất</button>";
}

function logout(){
    localStorage.removeItem("role");
    location.reload();
}

window.onload = function(){
    let role = localStorage.getItem("role");

    if(role=="admin"){
        showUser("Admin", true);
    }
    else if(role=="user"){
        showUser("User", false);
    }
}