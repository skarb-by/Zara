function setbackground()
{
window.setTimeout( "setbackground()", 3000); 

let index = Math.round(Math.random() * 9);

let ImageValue = "./images/001.jpg";

if(index == 1)
ImageValue = "./images/002.jpg";
if(index == 2)
ImageValue = "./images/003.jpg";
if(index == 3)
ImageValue = "./images/004.jpg";
if(index == 4)
ImageValue = "./images/005.jpg";
if(index == 5)
ImageValue = "./images/006.jpg";
if(index == 6)
ImageValue = "./images/007.jpg";
if(index == 7)
ImageValue = "./images/008.jpg";
if(index == 8)
ImageValue = "./images/009.jpg";

document.getElementById('container').style.backgroundImage = "url(" + ImageValue +")";

}