
import renderProducts from "../scripts/renderProducts.js";


    let responseWomenData = await fetch('http://127.0.0.2:4000/womenData');
    let dataWomenData = await responseWomenData.json();

    let responseMenData = await fetch('http://127.0.0.2:4000/menData');
    let dataMenData = await responseMenData.json();

    let responseBoyData = await fetch('http://127.0.0.2:4000/boyData');
    let dataBoyData = await responseBoyData.json();
    let responseGirlData = await fetch('http://127.0.0.2:4000/girlData');
    let dataGirlData = await responseGirlData.json();
   
   
  
   
    let query = document.getElementById("query");
    query.addEventListener("input", searchQuery);

    let regWomenData = dataWomenData;
    let regMenData = dataMenData;
    let regBoyData = dataBoyData;
    let regGirlData = dataGirlData;


    let men = regMenData;
let women = regWomenData;
let boy = regBoyData;
let girl = regGirlData;
let allProducts = [...girl,...boy,...men,...women];


function searchQuery() {
    let searchTerm = query.value;
    let matchingProducts = allProducts.filter((el) => {
        let product = el.productName.toLowerCase();
        return product.includes(searchTerm);
    })
    renderProducts(matchingProducts);
}




