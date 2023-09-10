

   async function getUsers() {
    console.log("Start fetching users...");
    try {
      const response = await fetch('http://127.0.0.2:4000/users/');
     
     const data = await response.json();
console.log(data)
 

   
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Finished fetching users...");
    }
  }
getUsers();



document.querySelector("form").addEventListener("submit", CheckPassword);
 


  function CheckPassword () {
    event.preventDefault();


    
      let password = document.getElementById("Password").value;
  
      let pas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(password.match(pas)) 
      { 
       
        createaccount();
     
      }
      else
      { 
        Swal.fire({
          icon: 'error',
         
          text: 'Введите пароль от 6 до 20 символов, содержащих по крайней мере одну цифру, одну заглавную и одну строчную букву!',
         
        })
     
      }
      };
  

   

function createaccount() {
    event.preventDefault();



        let email = document.querySelector("#eemail").value;

    let pw = document.querySelector("#Password").value;
    let rpw = document.querySelector("#RPassword").value;
    if ((pw != rpw) & (pw != "")) {
      
        Swal.fire({
            icon: 'error',
           
            text: 'ОШИБКА ПРИ ПОВТОРНОМ ВВОДЕ ПАРОЛЯ!',
           
          })




        return;
    }
    let name = document.querySelector("#user_name").value;
   
    let address = document.querySelector("#address").value;
    let addadress = document.querySelector("#add_address").value;
    let locality = document.querySelector("#locality").value;
    let city = document.querySelector("#city").value;
    
    let prefix = document.querySelector("#prefix").value;
    let mobile = document.querySelector("#mobile").value;

    var cobj = {
        Email: email,
        Password: pw,
        username: name,
        Address: address,
        Addaddress: addadress,
        Locality: locality,
        City: city,
        Prefix: prefix,
        Mobile: mobile,

    };



  async function addNewUser(users) {
    try {
      const response = await fetch('http://127.0.0.2:4000/users', {
        method: 'POST',
        body: JSON.stringify(users),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      getUsers();
    } catch (err) {
      console.error("Error:", err);
    }
  }

addNewUser(cobj);






Swal.fire({
 icon: 'success',

 text: 'ВЫ УСПЕШНО ПРОШЛИ РЕГИСТРАЦИЮ!',

})


function regPage() {
 window.location.href = "userLogin.html";
}

document.querySelector(".swal2-confirm").addEventListener("click", regPage);



  
}

     
