'use strict'
let clicks = 0;

let burger = document.querySelector('.burgerPic');
let all = document.querySelector('ul.nav-links');


burger.addEventListener('click', toggleMenu);
all.addEventListener('click', toggleMenu);

function toggleMenu() {

    console.log("i work");
    document.getElementById("menu-dropdown").classList.toggle('active');
	changeImage();
	clicks++;
}

function changeImage(){
	console.log("works");
document.querySelector(".burgerPic").src="images/close.png";
	changeBack();


}
function changeBack(){
	if(clicks==1 || clicks==3 || clicks==5 || clicks==7 || clicks==9 || clicks==11 || clicks==13 || clicks==15 || clicks==17 || clicks==19){
	document.querySelector(".burgerPic").src="images/burger1.png";

}
}






/*
document.addEventListener('click', closeMenu)

function closeMenu (e) {

    console.log(e.target.classList);
    if (!e.target.classList.contains("toggle-btn") && !e.target.classList.contains("span-lines") ){
        console.log("success");
        document.getElementById("menu-dropdown").classList.toggle('active');
    }
}
*/
