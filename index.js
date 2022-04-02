
function submit(){
    let section = document.querySelector("main");
    let othersection = document.querySelector(".thanks");
    section.style.display="none";
    othersection.style.display="block";
}

var a = 0;

var designer = document.querySelectorAll(".single");

function n(i){
    if(a!=0){
        for(var element of designer){
            element.classList.remove("orange");
        }
    }
    designer[i-1].classList.add('orange');
    document.querySelector(".rate").innerHTML = `You selected ${i} out of 5`
    a=1;
}

