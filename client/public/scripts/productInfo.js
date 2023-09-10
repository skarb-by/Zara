var ele = JSON.parse(localStorage.getItem("product"));
var cartarr = JSON.parse(localStorage.getItem("cartData")) || [];

creattable(ele);
function creattable(ele) {
    
    var td1 = document.createElement("div");
    td1.setAttribute("class", "div-img");
    var img1 = document.createElement("img");

    img1.setAttribute("src", ele.imageURL);
    td1.append(img1);

    var td2 = document.createElement("div");
    var head1 = document.createElement("p");
    head1.textContent = ele.productName;
    head1.setAttribute("class", "product-name");
    var smrp = document.createElement("span");
    smrp.textContent = ele.strikedPrice;
    smrp.setAttribute("class", "striked");

    var pmrp = document.createElement("span");
    pmrp.textContent = ele.price;
    pmrp.setAttribute("class", "realprice");



    var p5 = document.createElement("p");
    p5.style.marginBottom = 0;
    p5.textContent = ele.productColor;
    p5.setAttribute("class", "mrp");

    var select1 = document.createElement("select");
    var option1 = document.createElement("option");
    option1.text = "S";
    select1.add(option1);
    var option2 = document.createElement("option");
    option2.text = "M";
    select1.add(option2);
    var option3 = document.createElement("option");
    option3.text = "L";
    select1.add(option3);
    var option4 = document.createElement("option");
    option4.text = "XL";
    select1.add(option4);

    var a1 = document.createElement("a");
    a1.textContent = "УЗНАТЬ О НАЛИЧИИ ТОВАРА В МАГАЗИНЕ";
    a1.setAttribute("class", "product-action-a");
    var a2 = document.createElement("a");
    a2.setAttribute("class", "product-action-a");
    a2.textContent = "ВОЗВРАТ В МАГАЗИНЕ ZARA - БЕСПЛАТНО";
   

    var btn = document.createElement("button");
    btn.setAttribute("class", "addtocart")
    btn.textContent = "ДОБАВИТЬ";
    btn.addEventListener("click", function () {
        cartarr.push(ele);
        localStorage.setItem("cartData", JSON.stringify(cartarr));
 

        const Toast = Swal.mixin({
            toast: true,
            position: 'center-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            
            title: 'ДОБАВЛЕНО В КОРЗИНУ!'
          })

        
    });
    td2.setAttribute("class", "product-action");
    td2.append(head1, smrp, pmrp, p5, select1, btn,a1, a2,);
    document.querySelector(".rightbox").append(td1, td2);
}