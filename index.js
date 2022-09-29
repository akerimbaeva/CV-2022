let menu = document.getElementsByClassName('menu-nav');
 // menu[0].onclick = openNav;
 menu[0].addEventListener('click', openNav)
 
 let navElement = document.getElementsByClassName('nav');

 function openNav() {
     navElement[0].classList.add('open')
 }



 /* Close nav by clicking on icon*/ 

 let closeButton = document.getElementsByClassName("close-img");
 closeButton[0].onclick = closeNav;


function closeNav() {
   navElement[0].classList.toggle("open");
 }


 /* Close nav by clicking on menu links*/

 let navLinks = document.getElementsByClassName('nav-link')
  for (let i = 0; i<=navLinks.length - 1; i++) {
      navLinks[i].onclick = closeNav;
  }