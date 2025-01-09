document.addEventListener("click", e => {
    if(!e.target.matches(".expand-button")) return;
    const card = e.target.closest(".card");
    const cardBody = card.querySelector(".card-body");
    const btn = e.target;
    if(btn.innerText === "Expand") {
        btn.innerText = "Collapse";
        cardBody.classList.add("show");
    }
    else {
        btn.innerText = "Expand";
        cardBody.classList.remove("show");
    }
});