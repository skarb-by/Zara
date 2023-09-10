


function navbar() {
  return `<div id="nav-bar-left">

  <div class="burger" id="burger">
  <span class=""></span>
</div>

    <div id="logo">
      <a href="/"><img src="../images/zara-avrupa-logos-2020-desing--11.png" alt="favicon" id="favicon"></a>   
    </div>
    </div>
  
  <div id="nav-bar-right">
    <div id="search_bar" class="searchBarOld">
        <label class="navLabel" for="search"><a href="../pages/searchProducts.html">ПОИСК</a></label>
        <p id="search" ></p>
    </div>
    <div id="nav-items">
      <ul>
        <li class="nav_item"><a class="navLinks" id="user-name" href="../pages/userLogin.html"></a> </li>
        <li class="nav_item" id="last-nav"><a class="navLinks" href="../pages/userCart.html">КОРЗИНА</a> </li>
      </ul>
    </div>
  </div>
  <div id="navigation" class="navigation_1">
  <ul>
    <li class="category"><a href="../pages/menStyles.html" class="main_section">МУЖЩИНЫ</a></li>
    <ul>
      <li class="sub-section"><a href="../pages/menJackets.html">КУРТКИ</a></li>
      <li class="sub-section"><a href="../pages/menHoodies.html">ТОЛСТОВКИ</a></li>
      <li class="sub-section"><a href="../pages/menKnitwear.html">СВИТЕРЫ&nbsp;|&nbsp;КАРДИГАНЫ</a></li>
      <li class="sub-section"><a href="../pages/menShirts.html">РУБАШКИ</a></li>
      <li class="sub-section"><a href="../pages/menTees.html">ФУТБОЛКИ</a></li>
      <li class="sub-section"><a href="../pages/menTrousers.html">ДЖИНСЫ&nbsp;|&nbsp;БРЮКИ</a></li>
      <li class="sub-section"><a href="../pages/menShorts.html">ШОРТЫ</a></li>
      <li class="sub-section"><a href="../pages/menAthletics.html">ZARA-ATHLETICZ</a></li>
    </ul>
    <li class="category"><a href="../pages/womenStyles.html" class="main_section">ЖЕНЩИНЫ</a>
    </li>
    <ul>
      <li class="sub-section"><a href="../pages/womenJackets.html">КУРТКИ</a></li>
      <li class="sub-section"><a href="../pages/womenBlazer.html">БЛЕЙЗЕРЫ</a></li>
      <li class="sub-section"><a href="../pages/womenJumpsuits.html">ПЛАТЬЯ&nbsp;|&nbsp;КОМБИНЕЗОНЫ</a></li>
      <li class="sub-section"><a href="../pages/womenShirts.html">РУБАШКИ</a></li>
      <li class="sub-section"><a href="../pages/womenJeans.html">ДЖИНСЫ</a></li>
      <li class="sub-section"><a href="../pages/womenTrousers.html">БРЮКИ</a></li>
      <li class="sub-section"><a href="../pages/womenTees.html">ФУТБОЛКИ</a></li>
      <li class="sub-section"><a href="../pages/womenTops.html">ТОПЫ&nbsp;|&nbsp;БОДИ</a></li>
      <li class="sub-section"><a href="../pages/womenSkirts.html">ЮБКИ&nbsp;|&nbsp;ШОРТЫ</a></li>
      <li><a href="../pages/womenKnitwear.html">ТРИКОТАЖ</a></li>
     </ul>
    <li class="category"><a href="../pages/KidsStyles.html" class="main_section">ДЕТИ</a></li>
    <ul>
      <li class="sub-section"><a href="../pages/boyData.html">МАЛЬЧИКИ</a></li>
      <li class="sub-section"><a href="../pages/girlData.html">ДЕВОЧКИ</a></li>
    </ul>
   
 
</div>`
}




export default navbar;

