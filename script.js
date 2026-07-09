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
    },

    letter6: { title: "Open when you're struggling to sleep", 
              text: `Write your letter here...` 
     },
    
    letter7: { title: "Open when you're having a good day ",
              text: `Write your letter here...`
     },
    
    letter8: { title: "Open when you're feeling lonely",
              text: `Write your letter here...` 
    },
    
    letter9: { title: "Open when it's the 30th of September ",
              text: `Write your letter here...` 
    },
    
    letter10:{ title: "Open when you're needing a giggle", 
              text: `Write your letter here...`
   },

    letter11:{ title: "Open when you're having a bad day ", 
              text: `Write your letter here...`
    },
    
    letter12:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter13:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter14:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter15:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },

    letter16:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter17:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter18:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter19:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter20:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },

    letter21:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter22:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter23:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter24:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter25:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },

    letter26:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter27:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter28:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter29:{ title: "YOUR TITLE HERE", text: `Write your letter here...` },
    letter30:{ title: "YOUR TITLE HERE", text: `Write your letter here...` }

};
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
