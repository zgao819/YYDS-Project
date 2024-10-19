window.addEventListener("load",function(){
	let next = document.getElementById("next");
	let prev = document.getElementById("prev");
	var bt3 = document.getElementsByClassName("bt_3");
	let asList1 = localStorage.getItem("asList1");
	let title = document.getElementById("title");
	var nextUrl = "question_2_6.html";
	let idx = 0;
	console.log(JSON.parse(asList1));
	asList1 = JSON.parse(asList1);
	if(asList1.length>0){
		title.innerText = "How often did you use these "+asList1[0]+" :";
	}
	
	
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
				if(bt3[temp].innerText=="None of these"){
					nextUrl = "question_2_6.html"
				}
			}
		
		})
		
	}
	
	next.addEventListener("click",function(){
		if(idx<asList1.length-1){
			idx++;
			title.innerText = "How often did you use these "+asList1[idx]+" :";
			
			for(let temp = 0;temp<bt3.length;temp++){
				bt3[temp].style.backgroundColor="#F5BDBD";
				bt3[temp].style.color="black";
			}
			
		}else{
			window.location.href=nextUrl;
		}
		
	});
	prev.addEventListener("click",function(){
		window.location.href="question_2_4.html";
	});

	var close = document.getElementById("close");
	if(close){
		close.addEventListener("click",function(){
			window.location.href="index.html";
		});
	}
});