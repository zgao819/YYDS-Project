window.addEventListener("load",function(){
	let next = document.getElementById("next");
	let prev = document.getElementById("prev");
	var bt3 = document.getElementsByClassName("bt_3");
	
	let asList = [];
	var nextUrl = "result.html";
	for(let temp = 0;temp<bt3.length;temp++){
		bt3[temp].addEventListener("click",function(){
			console.log(bt3[temp].style.backgroundColor)
			if(bt3[temp].style.backgroundColor=="red"){
				bt3[temp].style.backgroundColor="#F5BDBD";
				bt3[temp].style.color="black";
				localStorage.removeItem("ques_2_6");
				if(asList.length>0){
					for(let j=0;j<asList.length;j++){
						if(bt3[temp].innerText==asList[j]){
							asList.splice(j,1);
						}
					}
				}
			}else{
				bt3[temp].style.backgroundColor="red";
				bt3[temp].style.color="white";
				console.log(bt3[temp].innerText);
				localStorage.setItem("ques_2_6",bt3[temp].innerText);
				if(bt3[temp].innerText!='None of these'){
					localStorage.setItem("ques2_6",true);
					asList.push(bt3[temp].innerText);
					nextUrl = "question_2_7.html"
				}
				if(bt3[temp].innerText=="None of these"){
					localStorage.removeItem("ques2_6");
					nextUrl = "result.html"
				}
			}
		})
		
	}
	
	next.addEventListener("click",function(){
		localStorage.setItem("asList2",JSON.stringify(asList))
		window.location.href=nextUrl;
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