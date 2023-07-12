
let output="";
let button_input = document.querySelectorAll(".input-button");
let equal=document.querySelector(".equal")
let clear=document.getElementById("clear")
let erase=document.getElementById("erase")
let memory=0

Array.from(button_input).forEach((button_inputs) => {
   button_inputs.addEventListener("click", (e) =>{
     console.log(e.target)
     if(e.target.value == 'M+'){
       const CValue=parseFloat(document.querySelector("input").value)
       memory+=CValue;
     }
     if(e.target.value == 'M-'){
        const CValue=parseFloat(document.querySelector("input").value)
        memory-=CValue;
     }
     if(e.target.value == 'MC'){
           memory=0;
     }
     if(e.target.value == 'M+'|| e.target.value == 'M-'|| e.target.value == 'MC')
     {
        output=output
     }
     else{
        output = output + e.target.value;
        console.log("output",output)
        document.querySelector("input").style.color="black"; 
        document.querySelector("input").value=output
     }
     
    })
});
equal.addEventListener("click" , (e) =>{
    try{
        output=eval(output)
        document.querySelector("input").value=output
    }catch(err){
        alert("Invalid Expression")
        document.querySelector("input").style.color="red";
    }
       
})

clear.addEventListener("click", (e) => {
    document.querySelector("input").value=0
    output=""
})

erase.addEventListener("click", () => {
    output=output.slice(0, -1)
    document.querySelector("input").value=output
}) 