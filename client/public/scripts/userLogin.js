
let div = document.createElement("div");
div.setAttribute("id", "login");

let h = document.createElement("h2");
h.setAttribute("id", "h1");
h.textContent = "АВТОРИЗОВАТЬСЯ";

let form = document.createElement("form");
form.setAttribute("action", "");

let div2 = document.createElement("div");
div2.setAttribute("class", "form-group");

let input = document.createElement("input");
input.setAttribute("class", "form-control");
input.setAttribute("type", "text");
input.setAttribute("id", "mail");
input.setAttribute("autocomplete", "off");
input.setAttribute("placeholder", "email");
input.setAttribute("required", "");

let label = document.createElement("label");
label.setAttribute("class", "form-label");
label.setAttribute("for", "");
label.textContent = "E-MAIL";

let div3 = document.createElement("div");
div3.setAttribute("class", "form-group");

let input1 = document.createElement("input");
input1.setAttribute("class", "form-control");
input.setAttribute("autocomplete", "off");
input1.setAttribute("type", "password");
input1.setAttribute("id", "pwd");
input.setAttribute("placeholder", "ПАРОЛЬ");
input1.setAttribute("required", "");

let label1 = document.createElement("label");
label1.setAttribute("class", "form-label1");
label1.setAttribute("for", "");
label1.textContent = "ПАРОЛЬ";

let input3 = document.createElement("input");
input3.setAttribute("id", "sub");
input3.setAttribute("type", "submit");
input3.setAttribute("value", "ВОЙТИ");


let div4 = document.createElement("div");
div4.setAttribute("id", "reg");
let h1 = document.createElement("h2");
h1.setAttribute("id", "h2");
h1.textContent = "РЕГИСТРАЦИЯ";

let p = document.createElement("p");
p.setAttribute("id", "p1");
p.textContent = " ЕСЛИ У ТЕБЯ НЕТ УЧЕТНОЙ ЗАПИСИ, ПРОЙДИТЕ ПОЖАЛУЙСТА РЕГИСТРАЦИЮ, СОГЛАСНО РЕГИСТРАЦИОННОЙ ФОРМЕ.";

let p1 = document.createElement("p");
p1.setAttribute("id", "p2");
p1.textContent = "ПРЕДОСТАВИВ НАМ СВОИ ДАННЫЕ, ВАШИ ПОКУПКИ В НАШЕМ МАГАЗИНЕ БУДУТ БЫСТРЫМИ И ПРИЯТНЫМИ.";


let button = document.createElement("button");
button.setAttribute("id", "create");
button.textContent = "СОЗДАТЬ АККАУНТ";



div.append(h, form,);
form.append(div2, div3, input3);


div2.append(input, label);
div3.append(input1, label1);
div4.append(h1, p, p1, button,)



document.querySelector(".userLogin").append(div, div4);