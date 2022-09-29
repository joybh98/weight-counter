const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

        //retrieve file input
        document.querySelector("#input-image").addEventListener("change",function() {
            // as localstorage only supports storing strings, we have to convert our image to a datURL
            const reader=new FileReader();

            reader.addEventListener("load",() => {
                localStorage.setItem("recent-image",reader.result);
            })
            
            reader.readAsDataURL(this.files[0]);
            //console.log(this.files);
        })

        document.addEventListener("DOMContentLoaded",() => {
            const recentImageDataURL=localStorage.getItem("recent-image");
            if(recentImageDataURL) {
                document.querySelector("#previousImage").setAttribute("src",recentImageDataURL);
            }
        })