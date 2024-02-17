let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yo You were clicked!<b>"
})
button.addEventListener("contextmenu", ()=>{
    alert("Dont right click!!")
})
document.addEventListener("keydown", (e)=>{
    console.log(e)
})
