window.addEventListener("load",function(){
	let next = document.getElementById("next");
	let prev = document.getElementById("prev");
	var bt3 = document.getElementsByClassName("bt_3");
	var nextUrl = "question_2_6.html";
	
	let asList = [];
	for(let temp = 0;temp<bt3.length;temp++){
		bt3[temp].addEventListener("click",function(){
			if(bt3[temp].style.backgroundColor=="red"){
				bt3[temp].style.backgroundColor="#F5BDBD";
				bt3[temp].style.color="black";
				console.log(bt3[temp].innerText);
				
				localStorage.removeItem("ques_2_4");
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
				localStorage.setItem("ques_2_4",bt3[temp].innerText);
				if(bt3[temp].innerText!='None of these'){
					localStorage.setItem("ques2_4",true);
					asList.push(bt3[temp].innerText);
					nextUrl = "question_2_5.html"
				}
				
				// for(let idx=0;idx<bt3.length;idx++){
				// 	if(idx!=temp){
				// 		bt3[idx].style.backgroundColor="#F5BDBD";
				// 		bt3[idx].style.color="black";
				// 	}
				// }
				if(bt3[temp].innerText=="None of these"){
					localStorage.removeItem("ques2_4");
					nextUrl = "question_2_6.html"
				}
			}
		})
		
	}
	
	next.addEventListener("click",function(){
		console.log(asList);
		console.log(JSON.stringify(asList));
		localStorage.setItem("asList1",JSON.stringify(asList))
		window.location.href=nextUrl;
	});
	prev.addEventListener("click",function(){
		localStorage.setItem("show",true);
		window.location.href="question.html";
	});

	var close = document.getElementById("close");
	if(close){
		close.addEventListener("click",function(){
			window.location.href="index.html";
		});
	}
});