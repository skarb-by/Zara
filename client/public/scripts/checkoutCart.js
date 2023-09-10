var currentUser = JSON.parse(localStorage.getItem("kyc"));
var cartarr = JSON.parse(localStorage.getItem("cartData"));



let box_1 = document.createElement("div");
box_1.setAttribute("class", "userDetails-box");
let delivery_title = document.createElement("p");
delivery_title.setAttribute("class", "delivery");
delivery_title.textContent = "СВЕРКА ЗАКАЗА";


let userDetails = document.createElement("div");
userDetails.setAttribute("class", "userDetails");

let user_details = document.createElement("p");
user_details.setAttribute("class", "delivery");
user_details.textContent = "ДАННЫЕ";

let user_name = document.createElement("p");
user_name.setAttribute("class", "user");
user_name.textContent = currentUser[0].username;



let locality = document.createElement("p");
locality.setAttribute("class", "user");
locality.textContent = currentUser[0].Locality;

let city = document.createElement("p");
city.setAttribute("class", "user");
city.textContent = currentUser[0].City;

let address = document.createElement("p");
address.setAttribute("class", "user");
address.textContent = currentUser[0].Address;

let address_2 = document.createElement("p");
address_2.setAttribute("class", "user");
address_2.textContent = currentUser[0].Addaddress;



let phone = document.createElement("p");
phone.setAttribute("class", "user");
phone.textContent = currentUser[0].Mobile;

let email = document.createElement("p");
email.setAttribute("class", "user");
email.textContent = currentUser[0].Email;

userDetails.append(
    user_details,
    user_name,
    address,
    address_2,
    locality,
    city,
    phone,
    email
);

box_1.append(
    delivery_title,
    userDetails
   
);

var ele = JSON.parse(localStorage.getItem("product"));
let box_2 = document.createElement("div");
box_2.setAttribute("class", "div-box_2");
var cartItems = JSON.parse(localStorage.getItem("cartData")) || [];







let numOfCartItems = document.createElement("p");
numOfCartItems.setAttribute("id", "numOfCart");
let products_num = document.createElement("span");
products_num.setAttribute("class", "products_num");
products_num.textContent = cartItems.length;

let products_text = document.createElement("span");
products_text.setAttribute("class", "products_num");
products_text.textContent = " ШТ.";

let td2 = document.createElement("div");
let head1 = document.createElement("h1");
head1.textContent = ele.productName;
head1.setAttribute("class", "product-name-carts");


numOfCartItems.append(products_num, products_text, td2, head1,);

let product_images = document.createElement("div");
product_images.setAttribute("id", "imageflex");
cartItems.map(function (elem) {
    let image = document.createElement("img");
    image.setAttribute("src", elem.imageURL);
    image.setAttribute("class", "productImage");
    product_images.append(image);
});

box_2.append(numOfCartItems, product_images);
document.querySelector("#container").append(box_1, box_2);

var prices = [];
cartItems.map(function (elem) {
    var price = elem.price;
    var bag = "";
    for (var i = 0; i < price.length; i++) {
        if (price[i] == ".") {
            break;
        } else {
            bag = bag + price[i];
        }

    }
    prices.push(bag);
});

var prices = prices.map(Number);

var total = 0;

for (var j = 0; j < prices.length; j++) {
    total = total + prices[j];
}

var total_field = (document.getElementById("#total_price").textContent = `${total}.00 BYN`);


function paymentSuccess() {

    Swal.fire({
        confirmButtonColor: "#000",
        text:'Спасибо за покупки с ZARA!'

    })
      function regPage() {
        window.location.href = "../index.html";
    }
    
    document.querySelector(".swal2-confirm").addEventListener("click", regPage);
    
    
   aX();
    localStorage.removeItem('cartData');
   
}
var x = JSON.parse(localStorage.getItem("x")) || [];
xobj={
    user_name: currentUser[0].username,
    email: currentUser[0].Email,
    productName: ele.productName,
    products_num: cartItems.length,
    product_images: ele.imageURL,
    total: total_field,
};
x.push(xobj);
function aX() {
   localStorage.setItem("x", JSON.stringify(x))
};

