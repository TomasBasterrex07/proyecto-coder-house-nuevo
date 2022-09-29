document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "41966856";
  
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const tel = document.querySelector("#tel").value;
    const prov = document.querySelector("#prov").value;
    const proyecto = document.querySelector("#proyecto").value;
  
   
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_Carpinteria Snekker Vasco_*%0A
          *Presupuesto*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${nombre}%0A
          *Cual es tu apellido*%0A
          ${apellido}%0A
          *Indica email*%0A
          ${email}%0A
          *indica telefono*%0A
          ${tel}%0A
          *provincia de residencia*%0A
          ${prov}%0A
          *¿Cuál es el proyecto que se desea realizar?*%0A
          ${proyecto}`;
  
   
    
  
    window.open(url);
  });
  