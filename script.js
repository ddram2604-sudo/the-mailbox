// ---------- Popup Elements ----------

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const title = document.getElementById("letterTitle");
const content = document.getElementById("letterContent");

// ---------- Letter Data ----------

const letters = {

    letter1: {
        title: "Open when you're first getting this",
        text: "This is where your first letter will go."
    },

    letter2: {
        title: "Open when you're needing a hug",
        text: "This is where your hug letter will go."
    },

    letter3: {
        title: "Open when you're sick",
        text: "This is where your sick letter will go."
    },

    letter4: {
        title: "Open when you're feeling nostalgic",
        text: "This is where your nostalgic letter will go."
    },

    letter5: {
        title: "Open when you're missing my voice",
        text: "This is where this letter will go."
    }

};

// ---------- Open Letter ----------

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const data = letters[button.id];

        if (!data) return;

        title.textContent = data.title;
        content.textContent = data.text;

        popup.classList.add("show");
        popup.style.display = "flex";

    });

});

// ---------- Close ----------

closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

    setTimeout(() => {

        popup.style.display = "none";

    }, 200);

});

// ---------- Click Outside ----------

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.style.display = "none";

        }, 200);

    }

});

// ---------- Escape ----------

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.style.display = "none";

        }, 200);

    }

});
