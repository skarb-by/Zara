

fetch('http://127.0.0.2:4000/users')
.then((response) => response.json())
.then((data) => {
    let regUsers = data;

         

    let cartData = [];
localStorage.setItem("cartData", JSON.stringify(cartData));
localStorage.removeItem('kyc');

document.querySelector("form").addEventListener("submit", loginaccount);

function loginaccount(event) {
    event.preventDefault();

    let email = document.querySelector("#mail").value;
    let password = document.querySelector("#pwd").value;

    var count = 0;
    for (var i = 0; i < regUsers.length; i++) {
        if (regUsers[i].Email == email && regUsers[i].Password == password) {
           
            Swal.fire({
                icon: 'success',
                confirmButtonColor: "#000",
                text: 'ВЫ УСПЕШНО АВТОРИЗОВАЛИСЬ!',
                
              })
    
        
            function regPage1() {
                window.location.href = "../index.html";
            }
            
            document.querySelector(".swal2-confirm").addEventListener("click", regPage1);




             
           
            var customer = [];
            cobj = {
                Email: regUsers[i].Email,
                username: regUsers[i].username,
                Address: regUsers[i].Address,
                Addaddress: regUsers[i].Addaddress,
                Locality: regUsers[i].Locality,
                City: regUsers[i].City,
                Prefix: regUsers[i].Prefix,
                Mobile: regUsers[i].Mobile,
            };
            customer.push(cobj);
            localStorage.setItem("kyc", JSON.stringify(customer));
            
       
             
              
            
        } else {
            count++;
        }
    }

    if (count == regUsers.length) {
      
        Swal.fire({
            icon: 'error',
            confirmButtonColor: "#000",
            text: 'НЕВЕРНЫЙ E-MAIL ИЛИ ПАРОЛЬ!',
            
          })
    }
}
});
document.getElementById("create").addEventListener("click", regPage);

function regPage() {
    window.location.href = "userSignUp.html";
}




