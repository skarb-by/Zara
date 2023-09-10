


var product = JSON.parse(localStorage.getItem("cartData")) || [];
displayData(product);

function deleteTask(index) {
    document.querySelector("#cartContainer").innerHTML = "";
    product.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(product));
    displayData(product);
}

function displayData(product) {
    product.map(function (elem, index) {
        let div = document.createElement("div");
        div.setAttribute("id", "boxes");
        let div2 = document.createElement("div");
        div2.setAttribute("id", "item");
        let image = document.createElement("img");
        image.setAttribute("src", elem.imageURL);
        image.setAttribute("id", "avatar");
        let div3 = document.createElement("div");
    
        let name = document.createElement("p");
        name.textContent = elem.productName;
        name.setAttribute("id", "productName");
        let price = document.createElement("p");
        price.textContent = elem.price;
        price.setAttribute("id", "cost");
        let del = document.createElement("p");
        del.textContent = "УДАЛИТЬ";
        del.setAttribute("id", "del");
        del.addEventListener("click", function () {
            deleteTask(index);
        });
        div3.append( name, price, del);
        div2.append(image, div3);
        div.append(div2);
        document.querySelector("#cartContainer").append(div);
    });

    var prices = [];
    product.map(function (elem) {
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
    document.querySelector("#total-amount").textContent = `${total}.00 BYN`;
}

function checkoutValidation() {
    let isUser = localStorage.getItem("kyc") || [];
    if (isUser.length == 0) {
        Swal.fire({
            confirmButtonColor: "#000",
            title:'ПОЖАЛУЙСТА, ВОЙДИТЕ В СИСТЕМУ, ЧТОБЫ ПРОДОЛЖИТЬ!',
        });
       
       function regPage() {
        window.location.href = "userLogin.html";
    }
    
    document.querySelector(".swal2-confirm").addEventListener("click", regPage);
       
    }
    else if (product.length == 0)
       
        Swal.fire({
            title:'КОРЗИНА ПУСТА!',
            confirmButtonColor: "#000",
        });
    else


    
        window.location.href = "checkoutCart.html"
}







