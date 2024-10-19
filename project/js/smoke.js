const to_smo = document.getElementById("to_smo")
const back_smo = document.getElementById("back_smo")


const s1 = document.getElementById("smoke1")
const s2 = document.getElementById("smoke2")


const show1 = () =>{
    s1.style.display="block"
    s2.style.display="none"
}
show1();

const shows2 = () =>{
    s1.style.display="none"
    s2.style.display="block"
}

to_smo.addEventListener("click",shows2);
back_smo.addEventListener("click",show1);








document.addEventListener('DOMContentLoaded', function () {
    const goBackBtn = document.getElementById('goBackBtn');
    const lastPage = sessionStorage.getItem('lastPage');

    if (lastPage === 'result') {
        goBackBtn.setAttribute('href', 'result.html');
    } else if (lastPage === 'result2') {
        goBackBtn.setAttribute('href', 'result2.html');
    } else {

        goBackBtn.setAttribute('href', 'index.html');
    }
});

var modal = document.getElementById('trigger-modal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}