console.log("JS chạy");
const products = [
{
name: "[NEW DEW] Son Tint Bóng Hàn Quốc Bền Màu, Lâu Trôi Cho Đôi Môi Căng Mọng, Ẩm Mịn Merzy The Watery Dew Tint 4g",
price: 180000,
image: "https://product.hstatic.net/1000006063/product/new_dew_e8c495c8963048059edac22a879fd44e_1024x1024.jpg",
category :"son"
},
{
name: "Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml",
price: 150000,
image: "https://www.viuviu.vn/wp-content/uploads/2023/10/sua-rua-mat-simple-7.jpg",
category:"suaruamat"
},
{
name: "Kem dưỡng ẩm da Nivea Creme dưỡng ẩm sâu, giữ da mềm mịn (30ml)",
price: 50000,
image: "https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90):format(webp)/00022125_kem_ne_nivea_creme_beiersdorf_ag_hamburg_germany_30ml_1803_6095_large_a57108f20a.jpg",
category:"kemduong"
},
{
name: "Serum L'Oreal Sáng Da, Mờ Thâm Mụn & Nám 30ml (Mới)",
price: 350000,
image: "https://product.hstatic.net/200000198575/product/-dynamic-serum-l-oreal-paris-duong-sang-va-mo-tham-nam-30ml-1646358158_8ff2011441124d6787597ce3ba4eac9b_master.png",
category:"serum"
},
{
name: "Kem Dưỡng Torriden Làm Dịu Mát, Dưỡng Ẩm, Sáng Bóng Da 100ml",
price: 300000,
image: "https://down-vn.img.susercontent.com/file/sg-11134208-7rcf5-lrqp4f0xwqrsd4",
category:"kemduong"
}
];


const cart = [];

function render(list = products){
const box = document.getElementById("product-list");
box.innerHTML="";

list.forEach((p,i)=>{
box.innerHTML += `
<div class="product">
<img src="${p.image}">
<h4>${p.name}</h4>
<p>${p.price}đ</p>
<button onclick="addToCart(${i})">Thêm</button>
</div>
`;
});
}

function filterProduct(type){
if(type === "all"){
render(products);
return;
}

const filtered = products.filter(p => p.category === type);
render(filtered);
}

function addToCart(i){
cart.push(products[i]);
document.getElementById("cart-count").innerText = cart.length;
}

function openLogin(){
document.getElementById("login-modal").style.display="block";
}
function closeLogin(){
document.getElementById("login-modal").style.display="none";
}

function openCart(){
const box = document.getElementById("cart-items");
box.innerHTML="";
cart.forEach(c=>{
box.innerHTML += `<p>${c.name}</p>`;
});
document.getElementById("cart-modal").style.display="block";
}
function closeCart(){
document.getElementById("cart-modal").style.display="none";
}

document.addEventListener("DOMContentLoaded", function(){
render();
});
function showSupport(type){
const title = document.getElementById("support-title");
const content = document.getElementById("support-content");

if(type==="buy"){
title.innerText="Hướng dẫn mua hàng";
content.innerHTML="Bước 1: Chọn sản phẩm <br> Bước 2: Thêm vào giỏ <br> Bước 3: Thanh toán";
}

if(type==="pay"){
title.innerText="Phương thức thanh toán";
content.innerHTML="Thanh toán COD, VNPay, ZaloPay...";
}

if(type==="ship"){
title.innerText="Chính sách giao hàng";
content.innerHTML="Giao hàng toàn quốc 2-5 ngày.";
}

if(type==="return"){
title.innerText="Chính sách đổi trả";
content.innerHTML="Đổi trả trong 7 ngày nếu lỗi.";
}

if(type==="privacy"){
title.innerText="Chính sách bảo mật";
content.innerHTML="Chúng tôi cam kết bảo mật thông tin khách hàng.";
}

document.getElementById("support-box").style.display="block";
}

function closeSupport(){
document.getElementById("support-box").style.display="none";
}

