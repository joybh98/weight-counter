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
                localStorage.setItem("previous-image",reader.result);
                localStorage.setItem("next-image",reader.result);
                //console.log(reader.result);
            })
            
            reader.readAsDataURL(this.file[0]);
            reader.readAsDataURL(this.file[1]);    
            
            //reader.readAsDataURL(this.files[0]);
            //console.log(this.files);
        })

        document.addEventListener("DOMContentLoaded",() => {
            const recentImageDataURL_one=localStorage.getItem("previous-image");
            const recentImageDataURL_two=localStorage.getItem("next-image");
            if(recentImageDataURL_one && recentImageDataURL_two) {
                document.querySelector("#previousImage").setAttribute("src",recentImageDataURL_one);
                document.querySelector("#nextImage").setAttribute("src",recentImageDataURL_two)
            }
        })