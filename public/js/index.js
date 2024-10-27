const form = document.getElementById("formImage");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();

        const imgName = document.querySelector("#imageName").value;
        formData.append("imageName", imgName);

        const imageCover = document.querySelector("#imageCover");
        formData.append("imageCover", imageCover.files[0]);

        const images = document.querySelector("#images");
        formData.append("images", images.files[0]);
        formData.append("images", images.files[1]);
        formData.append("images", images.files[2]);

        await fetch("/v1/api/docs/createImage", {
          method: "POST",
          body: formData
        });
    } catch (error) {
        console.log("their was an error");
    }
})