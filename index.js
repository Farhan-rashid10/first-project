 let bg = document.getElementById("bg")
 let input1 = document.getElementById("input1")
 let input2 = document.getElementById("input2")
 let input3 = document.getElementById("input3")
 let input4 = document.getElementById("input4")
 let input5 = document.getElementById("input5")


 let button = document.getElementById("btn")
button.addEventListener("click" , function(){

   
    if (input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "" || input5.value === "") 
        {
        alert('Please fill other fields.');
       } else {
      input.textContent = input.value;
      sub.appendChild(input);
      alert("submited")

    }
} )  

   