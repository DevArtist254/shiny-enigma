const form = document.getElementById("formPost");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await fetch("/v1/api/content", {
            method: "POST"
        })
    } catch (error) {
        console.log("their was an error");
    }
})