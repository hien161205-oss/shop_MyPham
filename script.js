
const products = [
{
name: "[NEW DEW] Son Tint Bóng Hàn Quốc Bền Màu, Lâu Trôi Cho Đôi Môi Căng Mọng, Ẩm Mịn Merzy The Watery Dew Tint 4g",
price: 180000,
image: "https://product.hstatic.net/1000006063/product/new_dew_e8c495c8963048059edac22a879fd44e_1024x1024.jpg"
},
{
name: "Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml",
price: 150000,
image: "https://www.viuviu.vn/wp-content/uploads/2023/10/sua-rua-mat-simple-7.jpg"
},
{
name: "Kem dưỡng ẩm da Nivea Creme dưỡng ẩm sâu, giữ da mềm mịn (30ml)",
price: 50000,
image: "https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90):format(webp)/00022125_kem_ne_nivea_creme_beiersdorf_ag_hamburg_germany_30ml_1803_6095_large_a57108f20a.jpg"
},
{
name: "Serum L'Oreal Sáng Da, Mờ Thâm Mụn & Nám 30ml (Mới)",
price: 350000,
image: "https://product.hstatic.net/200000198575/product/-dynamic-serum-l-oreal-paris-duong-sang-va-mo-tham-nam-30ml-1646358158_8ff2011441124d6787597ce3ba4eac9b_master.png"
}
];


const cart = [];

function render(){
const list = document.getElementById("product-list");
list.innerHTML="";

products.forEach((p,i)=>{
list.innerHTML += `
<div class="product">
<img src="${p.image}">
<h4>${p.name}</h4>
<p>${p.price}đ</p>
<button onclick="addToCart(${i})">Thêm</button>
</div>
`;
});
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

