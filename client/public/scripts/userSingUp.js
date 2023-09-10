let form = document.createElement("form");
form.setAttribute("id", "main");

let div = document.createElement("div");
div.setAttribute("id", "wholeform");
let div1 = document.createElement("div");
div1.setAttribute("id", "sub1");
let div2 = document.createElement("div");
div2.setAttribute("class", "formgroup");

let input = document.createElement("input");
input.setAttribute("required", "");
input.setAttribute("class", "form-input");
input.setAttribute("type", "email");
input.setAttribute("id", "eemail");
input.setAttribute("value", "");
input.setAttribute("placeholder", "");

input.addEventListener("input", function (event) {
  if (input.validity.typeMismatch) {
    input.setCustomValidity("Некорректно введен адрес электронной почты.");
  } else {
    input.setCustomValidity("");
  }
});

let label = document.createElement("label");
label.setAttribute("class", "form-label");
label.setAttribute("for", "eemail");
label.textContent = "E-MAIL";

let div3 = document.createElement("div");
div3.setAttribute("class", "formgroup");

let input1 = document.createElement("input");
input1.setAttribute("required", "");
input1.setAttribute("class", "form-input");
input1.setAttribute("type", "password");
input1.setAttribute("id", "Password");
input1.setAttribute("placeholder", "");



    

let label1 = document.createElement("label");
label1.setAttribute("class", "form-label1");
label1.setAttribute("for", "Password");
label1.textContent = "ПАРОЛЬ";

let div4 = document.createElement("div");
div4.setAttribute("class", "formgroup");

let input2 = document.createElement("input");
input2.setAttribute("required", "");
input2.setAttribute("class", "form-input");
input2.setAttribute("type", "password");
input2.setAttribute("id", "RPassword");

input2.setAttribute("placeholder", "");



let label2 = document.createElement("label");
label2.setAttribute("class", "form-label2");
label2.setAttribute("for", "RPassword");
label2.textContent = "ПОВТОРИТЕ ПАРОЛЬ";

let div5 = document.createElement("div");
div5.setAttribute("class", "formgroup");

let input3 = document.createElement("input");
input3.setAttribute("required", "");
input3.setAttribute("class", "form-input");
input3.setAttribute("type", "text");
input3.setAttribute("id", "user_name");
input3.setAttribute("placeholder", "");

let label3 = document.createElement("label");
label3.setAttribute("class", "form-label3");
label3.setAttribute("for", "user_name");
label3.textContent = "ИМЯ";

let div6 = document.createElement("div");
div6.setAttribute("class", "formgroup");

let input4 = document.createElement("input");
input4.setAttribute("required", "");
input4.setAttribute("class", "form-input");
input4.setAttribute("type", "text");
input4.setAttribute("id", "locality");
input4.setAttribute("placeholder", "");

let label4 = document.createElement("label");
label4.setAttribute("class", "form-label4");
label4.setAttribute("for", "locality");
label4.textContent = "СТРАНА";

let div7 = document.createElement("div");
div7.setAttribute("class", "formgroup");

let input5 = document.createElement("input");
input5.setAttribute("required", "");
input5.setAttribute("class", "form-input");
input5.setAttribute("type", "text");
input5.setAttribute("id", "city");
input5.setAttribute("placeholder", "");

let label5 = document.createElement("label");
label5.setAttribute("class", "form-label5");
label5.setAttribute("for", "city");
label5.textContent = "ГОРОД";

let div8 = document.createElement("div");
div8.setAttribute("class", "formgroup");

let input6 = document.createElement("input");
input6.setAttribute("required", "");
input6.setAttribute("class", "form-input");
input6.setAttribute("type", "text");
input6.setAttribute("id", "address");
input6.setAttribute("placeholder", "");

let label6 = document.createElement("label");
label6.setAttribute("class", "form-label6");
label6.setAttribute("for", "address");
label6.textContent = "АДРЕС";

let div9 = document.createElement("div");
div9.setAttribute("class", "formgroup");

let input7 = document.createElement("input");
input7.setAttribute("required", "");
input7.setAttribute("class", "form-input");
input7.setAttribute("type", "text");
input7.setAttribute("id", "add_address");
input7.setAttribute("placeholder", "");

let label7 = document.createElement("label");
label7.setAttribute("class", "form-label7");
label7.setAttribute("for", "add_address");
label7.textContent = "ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ";

let div_2 = document.createElement("div");
div_2.setAttribute("id", "sub2");

let div_2_1 = document.createElement("div");
div_2_1.setAttribute("class", "prefix");

let input_2_1 = document.createElement("input");
input_2_1.setAttribute("required", "");
input_2_1.setAttribute("class", "form-input");
input_2_1.setAttribute("type", "text");
input_2_1.setAttribute("id", "prefix");
input_2_1.setAttribute("value", "+375");
input_2_1.setAttribute("placeholder", "");



let label_2_1 = document.createElement("label");
label_2_1.setAttribute("class", "form-label8");
label_2_1.setAttribute("for", "prefix");
label_2_1.textContent = "ПРЕФИКС";



let div_2_2 = document.createElement("div");
div_2_2.setAttribute("class", "postfix");

let input_2_2 = document.createElement("input");
input_2_2.setAttribute("required", "");
input_2_2.setAttribute("class", "form-input");
input_2_2.setAttribute("type", "text");
input_2_2.setAttribute("id", "mobile");

input_2_2.setAttribute("placeholder", "");



let label_2_2 = document.createElement("label");
label_2_2.setAttribute("class", "form-label9");
label_2_2.setAttribute("for", "mobile");
label_2_2.textContent = "ТЕЛЕФОН";


let div_3 = document.createElement("div");
div_3.setAttribute("id", "sub3");

let div_3_1 = document.createElement("div");


let input_3_1 = document.createElement("input");
input_3_1.setAttribute("required", "");
input_3_1.setAttribute("value", "СОЗДАТЬ АККАУНТ");
input_3_1.setAttribute("type", "submit");
input_3_1.setAttribute("id", "createaccount");



form.append(div,);
div.append(div1, div_2, div_3,);
div1.append(div2, div3, div4, div5, div6, div7, div8, div9);
div2.append(input, label,);
div3.append(input1, label1,);
div4.append(input2, label2,);
div5.append(input3, label3,);
div6.append(input4, label4,);
div7.append(input5, label5,);
div8.append(input6, label6,);
div9.append(input7, label7,);
div_2.append(div_2_1, div_2_2);
div_2_1.append(input_2_1, label_2_1,);
div_2_2.append(input_2_2, label_2_2,);
div_3.append(div_3_1);
div_3_1.append(input_3_1);
document.querySelector("#regpage").append(form);