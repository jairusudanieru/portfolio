const dropDownMenu = document.querySelector('.dropdown-menu')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.onclick = function () {
   dropDownMenu.classList.toggle('open')
}