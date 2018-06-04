



let arrow = document.querySelector(".arrow-portfolio");
let hidden = document.querySelector(".hide");

let clickCounter = 0;
let moreOreLess = document.querySelector("#moreOrLess");

arrow.addEventListener('click', addOne);
function addOne(){
	console.log("clicks = " + clickCounter);
	clickCounter++;
}

arrow.addEventListener('click', showMore);
function showMore(){

	if(clickCounter == 1  ){
hidden.classList.remove("hide");
	arrow.classList.add("rotate");
		moreOreLess.textContent = "SEE LESS"
	}


	arrow.addEventListener('click', showLess);
	function showLess(){
		if(clickCounter == 2){
		hidden.classList.add("hide");
		arrow.classList.remove("rotate");
			moreOreLess.textContent = "SEE MORE"
		clickCounter = 0;
	//	location.reload();
	}
	}
}


/**************** VIDEO *****************/

let vid = document.querySelector(".video");
let playpic = document.querySelector("#playpic");
let pausepic = document.querySelector("#pausepic");
let soundonpic = document.querySelector("#soundoffpic");
let soundoffpic = document.querySelector("#soundonpic");
let replaypic = document.querySelector("#replaypic");

pausepic.classList.add('show');
playpic.classList.add('hide');
soundonpic.classList.add('show');
soundoffpic.classList.add('hide');

 playpic.addEventListener('click', startVideo);
function startVideo(){
	vid.play();
	playpic.classList.remove('show');
	playpic.classList.add('hide');
	pausepic.classList.remove('hide');
	pausepic.classList.add('show');
}

 pausepic.addEventListener('click', pauseVideo);
function pauseVideo(){
	vid.pause();
	pausepic.classList.remove('show');
	pausepic.classList.add('hide');
	playpic.classList.remove('hide');
	playpic.classList.add('show');
}
 soundoffpic.addEventListener('click', stopSound);
function stopSound(){
	soundoffpic.classList.remove('show');
	soundoffpic.classList.add('hide');
	soundonpic.classList.remove('hide');
	soundonpic.classList.add('show');
	vid.muted = true;
}

 soundonpic.addEventListener('click', startSound);
function startSound(){
	soundonpic.classList.remove('show');
	soundonpic.classList.add('hide');
	soundoffpic.classList.remove('hide');
	soundoffpic.classList.add('show');
	vid.muted = false;
}




/***** ON SCREEN ********/

let clickCounter2 = 0;

vid.addEventListener('click', addOne2);
function addOne2(){
	console.log("clicks = " + clickCounter);
	clickCounter2++;
}

vid.addEventListener('click', pauseIt);
function pauseIt(){
	if(clickCounter2 == 1  ){
	vid.pause();
	}


	vid.addEventListener('click', startIt);
	function startIt(){
		if(clickCounter2 == 2  ){
			vid.play();
			clickCounter2 = 0;
		}
	}
}
