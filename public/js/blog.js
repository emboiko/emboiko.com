const preview = document.getElementById("blog-preview");

document.getElementById("preview").addEventListener("click", (event) => {
    const body = document.getElementById("compose-body").value;
    preview.innerHTML = body;
});