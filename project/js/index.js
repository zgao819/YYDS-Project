window.addEventListener("load", function () {
	let next = document.getElementById("next");
	let prev = document.getElementById("prev");
	let next2 = document.getElementById("next2");
	let next3 = document.getElementById("next3");
	var currentUrl = window.location.href;
	currentUrl = currentUrl.split("/");
	currentUrl = currentUrl[currentUrl.length - 1];
	console.log(currentUrl);
	if (next) {
		next.addEventListener("click", function () {
			if (currentUrl == "question.html") {
				window.location.href = "question_2.html";
			} else if (currentUrl == "question_2.html") {
				window.location.href = "question_3.html";
			} else if (currentUrl == "question_3.html") {
				window.location.href = "question_4.html";
			} else if (currentUrl == "question_4.html") {
				window.location.href = "question_5.html";
			} else if (currentUrl == "question_5.html") {
				window.location.href = "question_6.html";
			} else if (currentUrl == "question_6.html") {
				window.location.href = "question_7.html";
			} else if (currentUrl == "question_7.html") {
				window.location.href = "question_8.html";
			} else if (currentUrl == "question_8.html") {
				window.location.href = "question_9.html";
			} else if (currentUrl == "question_9.html") {
				window.location.href = "question_10.html";
			} else if (currentUrl == "question_10.html") {
				window.location.href = "question_2_1.html";
			} else if (currentUrl == "question_2_1.html") {
				window.location.href = "question_2_2.html";
			} else if (currentUrl == "question_2_2.html") {
				window.location.href = "question_2_3.html";
			} else if (currentUrl == "question_2_3.html") {
				window.location.href = "question_2_4.html";
			} else if (currentUrl == "question_2_4.html") {
				window.location.href = "question_2_5.html";
			} else if (currentUrl == "question_2_5.html") {
				window.location.href = "question_2_6.html";
			} else if (currentUrl == "question_2_6.html") {
				window.location.href = "question_2_7.html";
			} else if (currentUrl == "question_2_7.html") {
				window.location.href = "result.html";
			}
		});
	}
	if (next2) {
		next2.addEventListener("click", function () {
			if (currentUrl == "question.html") {
				window.location.href = "question_2.html";
			} else if (currentUrl == "question_2.html") {
				window.location.href = "question_3.html";
			} else if (currentUrl == "question_3.html") {
				window.location.href = "question_4.html";
			} else if (currentUrl == "question_4.html") {
				window.location.href = "question_5.html";
			} else if (currentUrl == "question_5.html") {
				window.location.href = "question_6.html";
			} else if (currentUrl == "question_6.html") {
				window.location.href = "question_7.html";
			} else if (currentUrl == "question_7.html") {
				window.location.href = "question_8.html";
			} else if (currentUrl == "question_8.html") {
				window.location.href = "question_9.html";
			} else if (currentUrl == "question_9.html") {
				window.location.href = "question_10.html";
			} else if (currentUrl == "question_10.html") {
				window.location.href = "question_2_1.html";
			} else if (currentUrl == "question_2_1.html") {
				window.location.href = "question_2_2.html";
			} else if (currentUrl == "question_2_2.html") {
				window.location.href = "question_2_3.html";
			} else if (currentUrl == "question_2_3.html") {
				window.location.href = "question_2_4.html";
			} else if (currentUrl == "question_2_4.html") {
				window.location.href = "question_2_5.html";
			} else if (currentUrl == "question_2_5.html") {
				window.location.href = "question_2_6.html";
			} else if (currentUrl == "question_2_6.html") {
				window.location.href = "question_2_7.html";
			} else if (currentUrl == "question_2_7.html") {
				window.location.href = "done.html";
			}
		});
	}
	if (next3) {
		next3.addEventListener("click", function () {
			if (currentUrl == "question.html") {
				window.location.href = "question_2.html";
			} else if (currentUrl == "question_2.html") {
				window.location.href = "question_3.html";
			} else if (currentUrl == "question_3.html") {
				window.location.href = "question_4.html";
			} else if (currentUrl == "question_4.html") {
				window.location.href = "question_5.html";
			} else if (currentUrl == "question_5.html") {
				window.location.href = "question_6.html";
			} else if (currentUrl == "question_6.html") {
				window.location.href = "question_7.html";
			} else if (currentUrl == "question_7.html") {
				window.location.href = "question_8.html";
			} else if (currentUrl == "question_8.html") {
				window.location.href = "question_9.html";
			} else if (currentUrl == "question_9.html") {
				window.location.href = "question_10.html";
			} else if (currentUrl == "question_10.html") {
				window.location.href = "question_2_1.html";
			} else if (currentUrl == "question_2_1.html") {
				window.location.href = "question_2_2.html";
			} else if (currentUrl == "question_2_2.html") {
				window.location.href = "question_2_3.html";
			} else if (currentUrl == "question_2_3.html") {
				window.location.href = "question_2_4.html";
			} else if (currentUrl == "question_2_4.html") {
				window.location.href = "question_2_5.html";
			} else if (currentUrl == "question_2_5.html") {
				window.location.href = "question_2_6.html";
			} else if (currentUrl == "question_2_6.html") {
				window.location.href = "question_2_7.html";
			} else if (currentUrl == "question_2_7.html") {
				window.location.href = "done.html";
			}
		});
	}

	if (prev) {
		prev.addEventListener("click", function () {
			if (currentUrl == "question.html") {
				window.location.href = "index.html";
			} else if (currentUrl == "question_2.html") {
				window.location.href = "question.html";
			} else if (currentUrl == "question_2_1.html") {
				window.location.href = "question_2.html";
			} else if (currentUrl == "question_2_2.html") {
				window.location.href = "question_2_1.html";
			} else if (currentUrl == "question_2_3.html") {
				window.location.href = "question_2_4.html";
			} else if (currentUrl == "question_2_3.html") {
				window.location.href = "question_2_5.html";
			} else if (currentUrl == "question_2_5.html") {
				window.location.href = "question_2_4.html";
			} else if (currentUrl == "question_2_6.html") {
				window.location.href = "question_2_5.html";
			} else if (currentUrl == "question_2_7.html") {
				window.location.href = "question_2_6.html";
			} else if (currentUrl == "question_3.html") {
				window.location.href = "question_2_7.html";
			} else if (currentUrl == "question_3.html") {
				window.location.href = "question_5.html";
			} else if (currentUrl == "question_4.html") {
				window.location.href = "question_4.html";
			} else if (currentUrl == "question_6.html") {
				window.location.href = "question_5.html";
			} else if (currentUrl == "question_6.html") {
				window.location.href = "question_8.html";
			} else if (currentUrl == "question_8.html") {
				window.location.href = "question_7.html";
			} else if (currentUrl == "question_9.html") {
				window.location.href = "question_8.html";
			} else if (currentUrl == "question_10.html") {
				window.location.href = "question_9.html";
			} else if (currentUrl == "done.html") {
				window.location.href = "index.html";
			}
		});
	}

	var close = document.getElementById("close");
	if (close) {
		close.addEventListener("click", function () {
			window.location.href = "index.html";
		});
	}
});

var modal = document.getElementById('trigger-modal');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}