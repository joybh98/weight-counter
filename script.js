console.log("Script connected");

document.addEventListener("click",showInput);

function showInput() {
    document.getElementById("hiddenInput").style.display="block";
    console.log("Input shown");
}