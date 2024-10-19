window.addEventListener("load",function(){
	let back = document.getElementById("back");
	let more = document.getElementById("more");
	var close = document.getElementById("close");
	back.addEventListener("click",function(){
		window.location.href="index.html";
	});
	more.addEventListener("click",function(){
		localStorage.setItem("goodFlag",true);
		window.location.href="result2.html";
	});
	if(close){
		close.addEventListener("click",function(){
			window.location.href="index.html";
		});
	}
});