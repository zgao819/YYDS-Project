window.addEventListener("load",function(){
		localStorage.removeItem("asList2");
		var result1 = document.querySelector("#result1");
		var result2 = document.querySelector("#result2");
		var result3 = document.querySelector("#result3");
		var result4 = document.querySelector("#result4");
		var result5 = document.querySelector("#result5");
		var resultList = document.querySelector("#resultList");
		var rest1 = document.querySelector("#rest1");
		var rest2 = document.querySelector("#rest2");
		var mainBox = document.querySelector("#mainBox");
		
		var asList1 =JSON.parse( localStorage.getItem("asList1"));
		var asList2 =JSON.parse( localStorage.getItem("asList2"));
		console.log("asList2:"+asList2);
		
		var goodFlag = localStorage.getItem("goodFlag");
		
		if(goodFlag){
			localStorage.removeItem("goodFlag");
			mainBox.style.display="none";
			result1.style.display="block";
			result2.style.display="block";
			result3.style.display="block";
			result4.style.display="block";
			result5.style.display="block";
		}
		
		// let html = "";
		// if(localStorage.getItem("ques_2_4")){
		// 	html+='<div class="bt_3  m_t20">';
		// 	html+=	localStorage.getItem("ques_2_4");
		// 	html+='	</div>';
		// }
		// if(localStorage.getItem("ques_2_6")){
		// 	html+='<div class="bt_3  m_t20">';
		// 	html+=	localStorage.getItem("ques_2_6");
		// 	html+='	</div>';
		// }
		// if(asList1.length>0){
		// 	for(var i=0;i<asList1.length;i++){
		// 		html+='<div class="bt_3  m_t20">';
		// 		html+=	asList1[i];
		// 		html+='	</div>';
		// 	}
		// }
		// if(asList2.length>0){
		// 	for(var i=0;i<asList2.length;i++){
		// 		html+='<div class="bt_3  m_t20">';
		// 		html+=	asList2[i];
		// 		html+='	</div>';
		// 	}
		// }
		// resultList.innerHTML=html;
		
		if(localStorage.getItem("ques2_4")||localStorage.getItem("ques2_6")){
			result3.style.display="block";
		}
		if(localStorage.getItem("ques10")){
			result1.style.display="block";
		}
		if(localStorage.getItem("ques1")){
			result1.style.display="block";
			result2.style.display="block";
			result3.style.display="block";
		}
		if(localStorage.getItem("ques6")){
			result1.style.display="block";
		}
		if(localStorage.getItem("ques9")){
			result4.style.display="block";
		}
		if(localStorage.getItem("ques5")||localStorage.getItem("ques3")){
			result5.style.display="block";
		}
});

var modal = document.getElementById('trigger-modal');
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}