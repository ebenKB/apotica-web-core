//humburger logic
document.getElementById("media-mob").addEventListener("click",()=>{
	const burgerTop = document.getElementById("burger-top");
	const burgerMid = document.getElementById("burger-mid");
	const burgerDown = document.getElementById("burger-down");
	const mobileView = document.getElementById("mobile-container");
	// const wrapper    = document.getElementById("wrapper");
	// const menu 			=  document.getElementById("mobile-menu");


	burgerTop.classList.toggle("burger-top-rotate");
	burgerDown.classList.toggle("burger-down-rotate");

	burgerMid.classList.toggle("hide");
	mobileView.classList.toggle("hide");

	if(burgerTop.classList.contains("burger-top-rotate")){
		burgerDown.classList.add("green");
		burgerTop.classList.add("green");
		// add listener to disable scroll

		// menu.classList.add("green");
		// wrapper.classList.add("hide");

	}else{
		burgerDown.style.backgroundColor="#fff";
		burgerTop.style.backgroundColor="#fff";

// Remove listener to disable scroll

		// wrapper.classList.remove("hide");
		// menu.classList.remove("green");
	}
});


