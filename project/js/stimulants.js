window.addEventListener("load",function(){
		var resultList = document.querySelector("#resultList");
		var rest1 = document.querySelector("#rest1");
		var rest2 = document.querySelector("#rest2");
		
		var asList1 =JSON.parse( localStorage.getItem("asList1"));
		var asList2 =JSON.parse( localStorage.getItem("asList2"));
		console.log("asList2:"+asList2);
		let html = "";
		// if(localStorage.getItem("ques_2_4")){
		// 	html+='<a href="nestWell5.html">'
		// 	html+='<div class="bt_3  m_t20">';
		// 	html+=	localStorage.getItem("ques_2_4");
		// 	html+='	</div>';
		// 	html+='</a>'
		// }
		// if(localStorage.getItem("ques_2_6")){
		// 	html+='<a href="nestWell5.html">'
		// 	html+='<div class="bt_3  m_t20">';
		// 	html+=	localStorage.getItem("ques_2_6");
		// 	html+='	</div>';
		// 	html+='</a>'
		// }
		if(asList1.length>0){
			for(var i=0;i<asList1.length;i++){
				html+='<a href="nestWell5.html">'
				html+='<div class="bt_3  m_t20">';
				html+=	asList1[i];
				html+='	</div>';
				html+='</a>'
			}
		}
		if(asList2.length>0){
			for(var i=0;i<asList2.length;i++){
				html+='<a href="nestWell5.html">'
				html+='<div class="bt_3  m_t20">';
				html+=	asList2[i];
				html+='	</div>';
				html+='</a>'
			}
		}
		resultList.innerHTML=html;
		
});

var modal = document.getElementById('trigger-modal');
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}