console.log("Script connected");

document.addEventListener("click",togglePopup);

function togglePopup() {
    document.getElementById("popup-1").style.display="block";
}

document.addEventListener("submit",saveInput);

function saveInput() {
    var image=document.getElementById("picture").value;
    var weight=document.getElementById("weight").value;
    var date=document.getElementById("date").value;

    console.log(weight,date);
}