const nav = document.querySelector(".navigation") 
const button = document.querySelector(".toggle-button")

button.addEventListener("click",function(){
    nav.classList.toggle("content")
})