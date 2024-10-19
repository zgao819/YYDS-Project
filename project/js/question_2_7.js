window.addEventListener("load",function(){
	let next = document.getElementById("next");
	let prev = document.getElementById("prev");
	var bt3 = document.getElementsByClassName("bt_3");
	let asList2 = localStorage.getItem("asList2");
	asList2 = JSON.parse(asList2);
	let idx = 0;
	if(asList2.length>0){
		title.innerText = "How often did you use these "+asList2[0]+" :";
	}
	var nextUrl = "result.html";
	for(let temp = 0;temp<bt3.length;temp++){
		bt3[temp].addEventListener("click",function(){
			console.log(bt3[temp].style.backgroundColor)
			if(bt3[temp].style.backgroundColor=="red"){
				bt3[temp].style.backgroundColor="#F5BDBD";
				bt3[temp].style.color="black";
			}else{
				bt3[temp].style.backgroundColor="red";
				bt3[temp].style.color="white";
				console.log(bt3[temp].innerText);
				for(let idx=0;idx<bt3.length;idx++){
					if(idx!=temp){
						bt3[idx].style.backgroundColor="#F5BDBD";
						bt3[idx].style.color="black";
					}
				}
			}
		
			
		})
		
	}
	
	next.addEventListener("click",function(){
		if(idx<asList2.length-1){
			idx++;
			title.innerText = "How often did you use these "+asList2[idx]+" :";
			for(let temp = 0;temp<bt3.length;temp++){
				bt3[temp].style.backgroundColor="#F5BDBD";
				bt3[temp].style.color="black";
			}
			
		}else{
			window.location.href=nextUrl;
		}
	});
	prev.addEventListener("click",function(){
		window.location.href="question_2_6.html";
	});

	var close = document.getElementById("close");
	if(close){
		close.addEventListener("click",function(){
			window.location.href="index.html";
		});
	}
});