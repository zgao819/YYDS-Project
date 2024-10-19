const to_mo = document.getElementById("to_more")
const back_al = document.getElementById("back_alco")


const s1 = document.getElementById("alcohol_p")
const s2 = document.getElementById("alcohol_p2")


const show1 = () =>{
    s1.style.display="block"
    s2.style.display="none"
}
show1();

const shows2 = () =>{
    s1.style.display="none"
    s2.style.display="block"
}

to_mo.addEventListener("click",shows2);
back_al.addEventListener("click",show1);

















document.addEventListener('DOMContentLoaded', function () {
    const goBackBtn = document.getElementById('goBackBtn');
    const lastPage = localStorage.getItem('lastPage');

    if (lastPage === 'result') {
        localStorage.removeItem("lastPage");
        goBackBtn.setAttribute('href', 'result.html');
    } else if (lastPage === 'result2') {
        localStorage.removeItem("lastPage");
        goBackBtn.setAttribute('href', 'result2.html');
    } else {
        localStorage.removeItem("lastPage");
        goBackBtn.setAttribute('href', 'result2.html');
    }
});

var modal = document.getElementById('trigger-modal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}