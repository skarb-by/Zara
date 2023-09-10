let div = document.createElement("div");
div.setAttribute("id", "final");

let div1 = document.createElement("div");
div1.setAttribute("id", "total");


let p = document.createElement("p");
p.textContent = "ВСЕГО";
let p1 = document.createElement("p");
p1.setAttribute("id", "total-amount");


let div2 = document.createElement("div");




let a = document.createElement("a");
a.setAttribute("onclick", "checkoutValidation()");

let button = document.createElement("button");
button.setAttribute("id", "continue");
button.textContent = "ПРОДОЛЖИТЬ";





div.append(div1, div2);
div1.append(p, p1,);
div2.append(a,)
a.append(button,)
document.querySelector("#cartContainer2").append(div);
