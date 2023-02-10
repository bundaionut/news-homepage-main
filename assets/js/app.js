const openMenu = document.querySelector("ul");
const openBtn = document.querySelector (".open-menu");
const closeBtn = document.querySelector (".close-menu");
openBtn.addEventListener("click", ()=>{
    openMenu.classList.add("open")
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
})
closeBtn.addEventListener("click", ()=>{
    openMenu.classList.remove("open");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
})