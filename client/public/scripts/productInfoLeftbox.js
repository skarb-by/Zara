var ele = JSON.parse(localStorage.getItem("product"));
var cartarr = JSON.parse(localStorage.getItem("cartData")) || [];

creattable(ele);
function creattable(ele) {
 
  let div1 = document.createElement("div");
    
  let h1 = document.createElement("h2");
    h1.setAttribute("class", "head");
    h1.textContent = "ОПИСАНИЕ";
    let div2 = document.createElement("div");
    let p = document.createElement("p");
    p.setAttribute("class", "pProductInfoLeftbox");
    p.textContent = ele.productDescription;
    
    let h5 = document.createElement("h2");
    h5.setAttribute("class", "head");
    h5.textContent = "СОСТАВ И УХОД";

    let h6 = document.createElement("h2");
    h6.setAttribute("class", "head");
    h6.textContent = "СОСТАВ";
    let p1 = document.createElement("p");
    p1.setAttribute("class", "pProductInfoLeftbox");
      
      p1.textContent = ele. productStructure;

      let div3 = document.createElement("div");
    
    const span = document.createElement("span");
   span.setAttribute("class", "spanProductInfoLeftbox");
      span.textContent = "ВНЕШНЯЯ ЧАСТЬ ";
      const br = document.createElement("br");  
      const span1 = document.createElement("span");
      span1.setAttribute("class", "spanProductInfoLeftbox");
      span1.textContent = ele.productStructure1;
      const br1 = document.createElement("br"); 
      const span3 = document.createElement("span");
      span3.setAttribute("class", "spanProductInfoLeftbox");
      span3.textContent = ele.productStructure2;
      const br3 = document.createElement("br"); 

      let div4 = document.createElement("div");
    
      let h2 = document.createElement("h2");
      h2.setAttribute("class", "head");
      h2.textContent = "УХОД";
      let div5 = document.createElement("div");
      let p2 = document.createElement("p");
      p2.setAttribute("class", "pProductInfoLeftbox");
      p2.textContent = ele.productCare;
      
   


 
    
    div1.append(h1,  div2, p, h5, h6, p1, div3, span, br, span1, br1, span3, br3, div4, h2, div5, p2,);
    document.querySelector(".leftbox").append(div1);
}