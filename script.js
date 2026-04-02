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
name: "Nước tẩy trang sen Hậu Giang 500ml",
price: 400000,
image: "https://image.cocoonvietnam.com/uploads/Avatar_Website_Nuoc_tay_trang_sen_Artboard_7_copy_ac0bf66b46.jpg",
category:"taytrang"
},
{
name: "Kem Chống Nắng d'Alba Nâng Tông Tím Hiệu Chỉnh Sắc Da 50ml",
price: 450000,
image: "https://www.hangngoainhap.com.vn/images/202406/goods_img/4300-p2-1719050018.jpg",
category :"kemchongnang"
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
},
{
name: "Kem dưỡng ban đêm dưỡng sáng mịn & mờ thâm nám L'Oreal Paris Glycolic (AHA) Bright [Glycolic+ Niacinamide] + 50ml",
price: 320000,
image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m95wckgazfjid4.webp",
category:"kemduong"
},
{
name: "[CHỐNG NẮNG WATERGEL MỚI] Chống Nắng Phổ Rộng Thoáng Da, Kháng Mọi Tác Động UV Defender SPF 50+ PA++++ Loreal Paris",
price: 350000,
image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mfkoe37d3rpmf3.webp",
category:"chongnang"
},
{
name: "Son Tint Romand Juicy Lasting Tint màu 25 Bare Grape Hồng baby nude",
price: 259000,
image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mhuhbum5a0w39d.webp",
category:"son"
},
{
name: "Son Dưỡng Astrid Tái Tạo Môi Mỡ Hươu",
price: 59000,
image: "https://down-vn.img.susercontent.com/file/sg-11134253-824iw-mejah87odl38f3.webp",
category:"son"
},
{
name: "Son dưỡng môi A'Pieu Honey & Milk Lip Oil 5g chiết xuất từ mật ong và sữa giúp dưỡng ẩm môi sâu",
price: 69000,
image: "https://down-vn.img.susercontent.com/file/sg-11134253-8261e-mjteo9cel1c017@resize_w900_nl.webp",
category:"son"
},
{
name: "[Rom&nd] [Solunar Edition] Son Tint lì Romand Juicy Lasting Tint 5.5g",
price: 169000,
image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mgdgr8hes7pnaf.webp",
category:"son"
},
{
name: "[Rom&nd] Son Tint lì cho môi căng mọng THE JUICY LASTING TINT",
price: 289000,
image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m8w4qhulb9tzf5.webp",
category:"son"
},
{
name: "Sữa rửa mặt làm sạch sâu và sáng da L'Oreal Paris Glycolic (AHA) Bright Glowing Daily [Glycolic+ Niacinamide] 100ml",
price: 135000,
image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-maupowpour9oe1.webp",
category:"suaruamat"
}
];


const cart = [];

function render(list = products){
const box = document.getElementById("product-list");
box.innerHTML="";

list.forEach((p,i)=>{
box.innerHTML += `
<div class="product" onclick="viewDetail(${i})">
<img src="${p.image}">
<h4>${p.name}</h4>
<p>${p.price}đ</p>
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

function addToCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let found = cart.find(item => item.name === product.name);
if(found){
found.qty += 1;
}else{
cart.push({...product, qty:1});
}
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
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
}
function viewDetail(index){
localStorage.setItem("product", JSON.stringify(products[index]));
window.location.href = "spchitiet.html";
}
function updateCartCount(){
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const count = document.getElementById("cart-count");
if(count){
count.innerText = cart.length;
}
}
window.onload = updateCartCount;

function updateCartCount(){
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const count = document.getElementById("cart-count");

if(count){
count.innerText = cart.reduce((sum,item)=> sum + (item.qty || 1),0);
}
}
