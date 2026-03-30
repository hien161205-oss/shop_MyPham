```javascript
const products = [
{name:"Son đỏ", price:200000},
{name:"Kem dưỡng", price:350000},
{name:"Sữa rửa mặt", price:150000},
{name:"Nước hoa", price:500000}
];

const cart = [];

function render(){
const list = document.getElementById("product-list");
list.innerHTML="";

products.forEach((p,i)=>{
list.innerHTML += `
<div class="product">
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

render();
```
